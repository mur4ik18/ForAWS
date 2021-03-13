(function () {
'use strict';

EventResource.$inject = ['$resource', 'api', 'dateUtils'];
function EventResource($resource, api, dateUtils) {
  var Event = $resource(api('/events/:id/'), {id: '@id'}, {
    getLast: {
      url: api('/events/last/')
    }
  });

  Event.prototype.getMonth = function () {
    var date = new Date(this.datetime);
    return dateUtils.MONTHS[date.getMonth()];
  };

  return Event;
}

ArticleResource.$inject = ['$resource', 'api'];
function ArticleResource($resource, api) {
  var Article = $resource(api('/articles/:id/'), {id: '@id'}, {
    mostRecent: {
      url: api('/articles/most_recent/'),
      method: 'GET'
    }
  });

  return Article;
}

PageResource.$inject = ['$resource', 'api'];
function PageResource($resource, api) {
  var Page = $resource(api('/pages/:id/'), {id: '@id'});
  return Page;
}

SubscriberResource.$inject = ['$resource', 'api'];
function SubscriberResource($resource, api) {
  var Subscriber = $resource(api('/subscribers/:id/'), {id: '@id'});
  return Subscriber;
}

CategoryResource.$inject = ['$resource', 'api'];
function CategoryResource($resource, api) {
  var Category = $resource(api('/categories/:id/'), {id: '@id'}, {
    siblings: {
      url: api('/categories/:id/siblings/'),
      method: 'GET',
      isArray: true
    }
  });

  Category.prototype.getLink = function () {
    var link = "/e-market/" + this.id;
    if (!this.has_children) {
      link += '/products';
    }
    return link;
  };
  return Category
}

ProductResource.$inject = ['$resource', 'api'];
function ProductResource($resource, api) {
  var Product = $resource(api('/products/:id/'), {id: '@id'});

  Product.prototype.setColor = function (color) {
    this.color = color;
  };

  Product.prototype.setSize = function (size) {
    this.size = size;
  };

  Product.prototype.getImage = function () {
    var image = null,
        color = this.color,
        size = this.size;

    if (color) {
      image = _.chain(this.stocks).filter(function (s) {
        return s.image != null;
      }).find(function (s) {
        var valid = s.color.id == color.id;
        if (valid && size) {
          return s.size.id == size.id;
        }
        return valid;
      }).value();
    }
    if (image) {
      return image;
    }
    return _.first(this.images);
  };

  Product.prototype.getSizes = function () {
    var color = this.color,
        chain = _.chain(this.stocks);

    if (color) {
      chain = chain.filter(function (s) {
        return s.color.id == color.id;
      });
    }

    return chain.map(function (s) {
      return s.size;
    }).uniq(function (s) { return s.id; }).value();
  };

  Product.prototype.getColors = function () {
    return _.chain(this.stocks).map(function (s) {
      return s.color;
    }).uniq(function (c) { return c.id; }).value();
  };

  // Return stock based on selected color and size
  Product.prototype.getStock = function () {
    var color = this.color,
        size = this.size;
    if (!color || !size) {
      return null;
    }
    return _.chain(this.stocks).find(function (s) {
      return s.color.id == color.id && s.size.id == size.id;
    }).value();
  };

  return Product;
}

OrderResource.$inject = ['$resource', 'api', 'Session', 'taxValue'];
function OrderResource($resource, api, Session, taxValue) {
  var Order = $resource(api('/orders/:id/'), {'id': '@id'}, {
    // Returns the order associated with this session, the current shopping cart
    // of the user or of the session if no logged user
    getCurrent: {
      url: api('/orders/current/'),
      method: 'GET'
    },
    update: {method: 'PUT'},
    submit: {
      url: api('/orders/submit/'),
      method: 'POST'
    },
    applyCoupon: {
      url: api('/orders/apply_coupon/'),
      method: 'POST',
    }
  });

  Order.prototype.getSubtotal = function (index) {
    var item = this.items[index];
    return item.quantity * item.price;
  };

  Order.prototype.getSubtotal = function () {
    return _.reduce(this.items, function (memo, item) {
      return memo + item.price * item.quantity;
    }, 0);
  };

  Order.prototype.getTotal = function () {
    if (this.submitted) {
      return this.total;
    }
    var total = this.getSubtotal();
    if (this.voucher) {
      total -= this.discount;
    }
    total += this.getTax(total);
    total += this.getShipping();
    return total;
  }

  Order.prototype.getTax = function (total) {
    if (this.submitted) {
      return this.tax;
    }
    if (typeof total == 'undefined') {
      total = this.getSubtotal();
    }

    return total * taxValue / 100;
  };

  Order.prototype.getShipping = function () {
    if (this.submitted) {
      return this.shipping;
    }
    if (!this.shipping_method) {
      return 0;
    }

    if (this.shipping_method.search(/FREE/ig) > -1) {
      return 0;
    }
    return 10;
  };

  Order.prototype.hasShipping = function () {
    return this.shipping_full_name &&
           this.shipping_address &&
           this.shipping_city &&
           this.shipping_state &&
           this.shipping_zip &&
           this.shipping_country;
  };

  Order.prototype.hasBilling = function () {
    var hasAddress = this.bill_as_shipping || (
      this.billing_full_name &&
      this.billing_address &&
      this.billing_city &&
      this.billing_state &&
      this.billing_zip &&
      this.billing_country);

    var isAuthorized = true; // TODO
    return hasAddress && isAuthorized;
  };

  Order.prototype.hasItems = function () {
    return this.items && this.items.length > 0;
  };

  Order.prototype.isReady = function () {
    var hasUser = this.user && Session.user && this.user == Session.user.id;
    var hasPaymentInfo = this.card_number && this.card_month && this.card_year && this.card_cvv;

    return hasUser && this.hasItems() && hasPaymentInfo &&
        this.hasShipping() && this.hasBilling();
  };

  Order.prototype.copyBillingAddress = function () {
    this.billing_full_name = this.shipping_full_name;
    this.billing_address = this.shipping_address;
    this.billing_city = this.shipping_city;
    this.billing_state = this.shipping_state;
    this.billing_zip = this.shipping_zip;
    this.billing_country = this.shipping_country;
  };

  Order.prototype.emptyBillingAddress = function () {
    if (Session.isLogged()) {
      this.billing_full_name = Session.user.billing_full_name;
      this.billing_address = Session.user.billing_address;
      this.billing_city = Session.user.billing_city;
      this.billing_state = Session.user.billing_state;
      this.billing_zip = Session.user.billing_zip;
      this.billing_country = Session.user.billing_country;
    } else {
      this.billing_full_name = '';
      this.billing_address = '';
      this.billing_city = '';
      this.billing_state = '';
      this.billing_zip = '';
      this.billing_country = '';
    }
  };

  return Order;
}

ItemResource.$inject = ['$resource', 'api'];
function ItemResource($resource, api) {
  var Item = $resource(api('/orders/items/:id/'), {id: '@id'}, {
    add: {
      url: api('/orders/items/add/'),
      method: 'POST'
    }
  });

  return Item;
}

UserResource.$inject = ['$resource', 'api'];
function UserResource($resource, api) {
  var User = $resource(api('/users/:id/'), {id: '@id'}, {
    getCurrent: {
      url: api('/users/current/'),
      method: 'GET'
    },
    auth: {
      url: api('/users/auth/'),
      method: 'POST'
    },
    update: {method: 'PUT'}
  });
  return User;
}

resourcesConfig.$inject = ['$resourceProvider'];
function resourcesConfig($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}


angular.module('mofa.resources', [
  'mofa.utils',
])
  .factory('Event', EventResource)
  .factory('Article', ArticleResource)
  .factory('Page', PageResource)
  .factory('Subscriber', SubscriberResource)
  .factory('Category', CategoryResource)
  .factory('Product', ProductResource)
  .factory('Order', OrderResource)
  .factory('Item', ItemResource)
  .factory('User', UserResource)
  .config(resourcesConfig);

})();
