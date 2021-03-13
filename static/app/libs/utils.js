(function () {
'use strict';

function defaultsFactory() {
  return function (original, defaults) {
    for (var k in defaults) {
      if (original[k] == undefined) {
        original[k] = defaults[k];
      }
    }
  };
}

function dateUtilsFactory() {

  return {
    MONTHS: [
      {title: 'January', image: 'jan', index: 1},
      {title: 'February', image: 'feb', index: 2},
      {title: 'March', image: 'mar', index: 3},
      {title: 'April', image: 'apr', index: 4},
      {title: 'May', image: 'may', index: 5},
      {title: 'June', image: 'jun', index: 6},
      {title: 'July', image: 'jul', index: 7},
      {title: 'August', image: 'aug', index: 8},
      {title: 'September', image: 'sept', index: 9},
      {title: 'October', image: 'oct', index: 10},
      {title: 'November', image: 'nov', index: 11},
      {title: 'December', image: 'dec', index: 12},
    ],

    daysInMonth: function (month, year) {
      year = year || this.getYear();
      var date = new Date(year, month, 0);
      return date.getDate();
    },

    splitLists: function (month, year) {
      var days = this.daysInMonth(month, year),
          l1 = [], l2 = [],
          even = true,
          d,
          half = Math.round(days / 2) + (days > 28 && days % 2 == 0 ? 1 : 0),
          sw = false;

      // for (d = 1; d <= days; d++) {
      //   if (days % 2 != 0) {
      //     sw = d > half;
      //   }
      //   if (sw ? !even : even) {
      //     l1.push(d);
      //   } else {
      //     l2.push(d)
      //   }
      //   even = !even;
      // }

      // var m = this.MONTHS[month - 1],
      //     i = Math.round(l1.length / 2);
      // l1.splice(i, 0, m);

      // return [l1, l2]
      for (d = 1; d <= 30; d++) {
        if (d % 2 == 0) {
          l2.push(d);
        } else {
          l1.push(d);
        }
        if (d == 16) {
          l1.push(this.MONTHS[month - 1]);
        }
      }
      l2.push(31);

      return [l1, l2];
    },

    getYear: function () {
      return (new Date()).getFullYear();
    }
  };
}

function apiFactory() {
  return function (url) {
    return '/api' + url;
  }
}

CartService.$inject = ['Order', 'Item'];
function CartService(Order, Item) {
  function Cart() {
    this.order = null;
    this.pending = false;
  }

  // fetches current session order
  Cart.prototype.getCurrent = function (cb) {
    var self = this;
    this.pending = true;
    this.order = Order.getCurrent(function (order) {
      self.pending = false;
      cb && cb(order);
    });
  };

  Cart.prototype.addItem = function (stock, quantity) {
    // todo, if item exists just update quantity
    var itemData = {
      product: stock.product,
      stock: stock.id,
      quantity: quantity
    };

    return Item.add(itemData, _.bind(this.onItemAdded, this), function () {
      console.log('Error saving data!');
    });
  };

  Cart.prototype.onItemAdded = function (item) {
    var orderItem = _.find(this.order.items, function (i, index) {
      return i.id == item.id;
    });

    if (orderItem) {
      orderItem.quantity = item.quantity;
    } else {
      this.order.items.push(item);
    }
  };

  Cart.prototype.removeItem = function (index) {
    var item = new Item(this.order.items[index]),
        self = this;

    item.$delete(function () {
      self.order.items.splice(index, 1);
    });
  };

  Cart.prototype.updateItem = function () {

  };

  Cart.prototype.submit = function (cb, fail) {
    var self = this;
    this.order.$submit(function () {
      // reset the cart
      self.getCurrent(function (order) {
        cb && cb(order);
      });
    }, function (response) {
      if ('detail' in response.data) {
        fail && fail(response.data.detail);
      } else {
        fail(response.data);
      }
    });
  };

  Cart.prototype.clearPaymentData = function () {
    this.order.card_number = null;
    this.order.card_month = null;
    this.order.card_year = null;
    this.order.card_cvv = null;
  };

  Cart.prototype.updateShipping = function (user) {
    this.order.shipping_full_name = user.shipping_full_name;
    this.order.shipping_address = user.shipping_address;
    this.order.shipping_city = user.shipping_city;
    this.order.shipping_state = user.shipping_state;
    this.order.shipping_zip = user.shipping_zip;
    this.order.shipping_country = user.shipping_country;
    this.order.$update();
  }

  Cart.prototype.updateBilling = function (user) {
    this.order.billing_full_name = user.billing_full_name;
    this.order.billing_address = user.billing_address;
    this.order.billing_city = user.billing_city;
    this.order.billing_state = user.billing_state;
    this.order.billing_zip = user.billing_zip;
    this.order.billing_country = user.billing_country;
    this.order.$update();
  }

  return new Cart();
}

SessionService.$inject = ['$location', 'User'];
function SessionService($location, User) {
  function Session() {
    this.user = User.getCurrent();
  }

  Session.prototype.getCurrent = function () {
    if (this.user) {
      if (this.user.$resolved) {
        return this.user;
      } else {
        return this.user.$promise;
      }
    }
    return this.user;
  };

  Session.prototype.setUser = function (user) {
    this.user = user;
  };

  Session.prototype.isLogged = function (redirect) {
    if (redirect && !(this.user && this.user.id)) {
      $location.path(redirect);
    }
    return this.user && this.user.id;
  };

  return new Session();
}

utilsRun.$inject = ['Cart', 'Session'];
function utilsRun(Cart, Session) {
  // fetch initial cart
  Cart.getCurrent();
}

angular.module('mofa.utils', [])

  .factory('defaults', [defaultsFactory])
  .factory('dateUtils', [dateUtilsFactory])
  .factory('api', apiFactory)
  .service('Cart', CartService)
  .service('Session', SessionService)
  .run(utilsRun);

})();
