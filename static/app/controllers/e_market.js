(function () {

'use strict';


CategoriesController.$inject = ['$rootScope', '$routeParams', 'categories'];
function CategoriesController($rootScope, $routeParams, categories) {
  $rootScope.section = 'e_market';
  $rootScope.legendCtrl.hide();

  this.CATEGORIES = categories;

  if ($routeParams.parent) {
    this.showIcon = true;
  }

  this.angle = 0;

  this.onMouseover = function (c) {
    this.info = c.name;
  };
  this.onMouseout = function () {
    this.info = null;
  };


  this.getAngle = function () {
    if (this.showIcon) {
      return 1.57079633;
    } else {
      return 0;
    }
  };

  _.bindAll(this, 'onMouseout', 'onMouseover', 'getAngle');
}

function splitProducts(products) {
  var l1 = [], l2 = [], i;
  for (i = 0; i < products.length; i++) {
    if (i % 2 == 0) {
      l1.push(products[i]);
    } else {
      l2.push(products[i]);
    }
  }

  return [l1, l2];
}

ProductsController.$inject = [
  '$rootScope', '$scope', '$routeParams', 'products', 'categories', 'Product',
  '$timeout', 'Cart', '$location'
];
function ProductsController($rootScope, $scope, $routeParams, products,
                            categories, Product, $timeout, Cart, $location) {
  $rootScope.section = 'e_market';
  var self = this;

  this.order = Cart.order;
  this.products = products;
  this.productLists = splitProducts(products);

  var category,
      productIds = _.pluck(products, 'id');

  this.categories = _(categories).filter(function (c) {
    if (c.id == $routeParams.category) {
      category = c;
      return false;
    }
    return true;
  });
  this.category = category;
  this.category = _.chain(categories)
    .filter(function (c) { return c.id == $routeParams.category; })
    .first()
    .value();

  $rootScope.legendCtrl.setLegend('e_market', this);

  this.fetchSiblings = function () {
    this.next = this.previous = null;
    var current = productIds.indexOf(this.product.id);

    if (current > 0) {
      this.previous = products[current - 1];
    }
    if (productIds.length > current + 1) {
      this.next = products[current + 1];
    }
  };

  this.setProduct = function (product) {
    // recalculate lists if month changed
    this.object = this.product = product;
    // this.color = this.size = null;
    this.qty = 1;

    if (this.product) {
      $timeout(function () {
        self.fetchSiblings();
      });
    }
    $scope.$broadcast('video:reset');
  };

  this.nextProduct = function () {
    $scope.$broadcast('slide:next');
  };

  this.previousProduct = function () {
    $scope.$broadcast('slide:previous');
  }

  this.jump = function (product) {
    if (this.product.id == product.id) {
      return;
    }
    this.next = product;
    $timeout(function () {
      self.nextProduct();
    });
  }

  this.more = function () {
    $rootScope.lightboxCtrl.setLightbox('product', this.product);
  };

  if (products.length > 0) {
    if ('product' in $location.search()) {
      var pId = $location.search()['product'];
      this.setProduct(_.find(products, function (p) {
        return p.id == pId;
      }));
    } else {
      this.setProduct(products[0]);
    }
  }

  this.qtyUp = function () {
    var stock = this.product.getStock();

    if (stock && stock.quantity > this.qty) {
      this.qty++;
    }
  };

  this.qtyDown = function () {
    if (this.qty == 1) {
      return;
    }
    this.qty--;
  };

  this.setColor = function (color) {
    this.product.setColor(color);
    this.checkQty();
  };

  this.setSize = function (size) {
    this.product.setSize(size);
    this.checkQty();
  };

  this.checkQty = function () {
    if (this.qty == 0) {
      this.qty = 1;
    }
    var stock = this.product.getStock();
    if (stock && this.qty > stock.quantity) {
      this.qty = stock.quantity;
    }
  };

  this.addItem = function () {
    if (!(this.product.color && this.product.size)) {
      this.invalidSelection = true;
      return;
    } else {
      this.invalidSelection = false;
    }

    Cart.addItem(this.product.getStock(), this.qty)
        .$promise.then(function (item) {
          self.addedItem = item;
          self.rollerIndex = 0;
        });

    // recalculate remaining quantity
    // this.resetQty(this.qty);
  };
  this.hideCart = function () {
    this.addedItem = null;
  };

  this.rollerIndex = 0;
  this.rollerDirection = null;
  this.rollerUp = function () {
    if (this.rollerIndex > 0) {
      this.rollerIndex--;
      this.rollerDirection = 'up';
    }
  };
  this.rollerDown = function () {
    if (this.rollerIndex + 1 < this.order.items.length) {
      this.rollerIndex++;
      this.rollerDirection = 'down';
    }
  };
}

ProductSearchController.$inject = ['$scope', 'Product'];
function ProductSearchController($scope, Product) {
  var self = this;
  this.results = null;

  this.search = function () {
    this.results = Product.query({
      search: $scope.query
    });
  };

  $scope.$watch('query', function (query) {
    if (query) {
      self.search();
    } else {
      self.results = null;
    }
  });
}



animateRollerItem.$inject = ['$animateCss'];
function animateRollerItem($animateCss) {
  return {
    enter: function (element, done) {
      var ctrl;
      if (element.scope().legend) {
        ctrl = element.scope().legend.data;
      } else {
        ctrl = element.scope();
      }

      if (ctrl.rollerDirection && ctrl.rollerDirection == 'up') {
        return $animateCss(element, {
          from: {top: '-100%'},
          to: {top: 0},
          duration: 0.3
        });
      } else if (ctrl.rollerDirection && ctrl.rollerDirection == 'down') {
        return $animateCss(element, {
          from: {top: '100%'},
          to: {top: 0},
          duration: 0.3
        });
      }

      done();
    },
    leave: function (element, done) {
      var ctrl;
      if (element.scope().legend) {
        ctrl = element.scope().legend.data;
      } else {
        ctrl = element.scope();
      }

      if (ctrl.rollerDirection && ctrl.rollerDirection == 'up') {
        return $animateCss(element, {
          from: {top: 0},
          to: {top: '100%'},
          duration: 0.3
        });
      } else if (ctrl.rollerDirection && ctrl.rollerDirection == 'down') {
        return $animateCss(element, {
          from: {top: 0},
          to: {top: '-100%'},
          duration: 0.3
        });
      }

      done();
    }
  }
}

carouselZoomImgDirective.$inject = ['$timeout'];
function carouselZoomImgDirective($timeout) {
  return {
    scope: {
      image: '='
    },
    link: function (scope, element, attrs) {
      element.addClass('img-container');
      var $img = element.find('img');

      $timeout(function () {
        element.zoom({
          magnify: 3,
          onZoomIn: function () {
            $img.hide();
          },
          onZoomOut: function () {
            $img.show();
          }
        });
      });
    },
    template: '<img ng-src="{{ image.image.url }}" alt="{{ image.image.alt_text }}">'
  }
}

eMarketConfig.$inject = ['$routeProvider'];
function eMarketConfig($routeProvider) {
  var categoriesRoute = {
    controller: 'CategoriesController',
    controllerAs: 'ctrl',
    resolve: {
      categories: ['Category', '$route', function (Category, $route) {
        return Category.query($route.current.params).$promise;
      }]
    },
    templateUrl: 'e_market/categories.html'
  };
  $routeProvider
    .when('/e-market', categoriesRoute)
    .when('/e-market/:parent', categoriesRoute)
    .when('/e-market/:category/products', {
      controller: 'ProductsController',
      controllerAs: 'ctrl',
      resolve: {
        products: ['$route', 'Product', function ($route, Product) {
          return Product.query($route.current.params).$promise;
        }],
        'categories': ['$route', 'Category', function ($route, Category) {
            return Category.siblings({id: $route.current.params.category}).$promise;
        }]
      },
      templateUrl: 'e_market/products.html'
    })
}



angular.module('mofa.e_market', [])
  .controller('CategoriesController', CategoriesController)
  .controller('ProductsController', ProductsController)
  .controller('ProductSearchController', ProductSearchController)
  .animation('.item', animateRollerItem)
  .directive('carouselZoomImg', carouselZoomImgDirective)
  .config(eMarketConfig);

})();
