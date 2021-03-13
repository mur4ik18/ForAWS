(function () {

'use strict';

CheckoutController.$inject = ['$location', 'user'];
function CheckoutController($location, user) {
  if (user.id) {
    $location.path('/checkout/shipping');
  } else {
    $location.path('/checkout/authenticate');
  }
}

AuthenticateController.$inject = ['$rootScope', 'User', 'Session', 'Cart', '$location'];
function AuthenticateController($rootScope, User, Session, Cart, $location) {

  if (!Cart.order.hasItems()) {
    $location.path('/cart');
  }

  $rootScope.section = 'checkout';
  $rootScope.legendCtrl.hide();
  var self = this;

  this.step = 'authenticate';
  this.angle = 1.57079633;

  this.user = new User();

  this.continue = function () {
    this.loading = true;

    this.user.$auth(function (user) {
      Session.setUser(user);
      Cart.getCurrent();
      $location.path('/checkout/shipping');
    }, function (response) {
      if ('data' in response && 'detail' in response.data) {
        self.error = response.data.detail;
      }
      self.loading = false;
    });
  };
}


ShippingController.$inject = ['$rootScope', '$scope', '$location', 'Cart', 'Session'];
function ShippingController($rootScope, $scope, $location, Cart, Session) {
  $rootScope.section = 'checkout';
  $rootScope.legendCtrl.hide();
  Session.isLogged('/checkout/authenticate');

  this.shippingMethods = [
    "USPS Ground Shipping : FREE",
    "USPS Priority Shipping: $10"
  ];

  this.countries = ["United States"];

  this.step = 'shipping';
  this.angle = 0;

  this.order = Cart.order;

  this.continue = function () {
    $scope.error = null;
    this.loading = true;

    this.order.$update(function () {
      $location.path('/checkout/billing');
    }, function () {
      console.log('Error', arguments);
    });
  };
}

BillingController.$inject = ['$rootScope', '$scope', '$location', 'Cart', '$timeout'];
function BillingController($rootScope, $scope, $location, Cart, $timeout) {
  $rootScope.section = 'checkout';
  $rootScope.legendCtrl.hide();

  this.step = 'billing';
  this.angle = -1.57079633;
  this.view = 'billing-address';

  this.order = Cart.order;

  this.card = {};

  this.countries = ["United States"];

  this.cardInfo = function () {
    // validate card and continue to enter billing address
    this.view = 'card-info';
  };

  this.continue = function () {
    $scope.error = null;
    $rootScope.checkoutErr = null;
    this.loading = true;

    this.order.$update(function () {
      $location.path('/checkout/review');
    }, function () {
      console.log('Error', arguments);
    });
  };

  this.billAsShippingClick = function () {
    if (this.order.bill_as_shipping) {
      Cart.order.copyBillingAddress();
    } else {
      Cart.order.emptyBillingAddress();
    }
  };

  // $scope.$watch("ctrl.order.bill_as_shipping", function (value) {
  // });
}

ReviewController.$inject = ['$rootScope', '$scope', '$location', 'Cart'];
function ReviewController($rootScope, $scope, $location, Cart) {
  $rootScope.section = 'checkout';
  $rootScope.legendCtrl.hide();
  var self = this;

  if (Cart.pending) {
    Cart.order.$promise.finally(function (order) {
      if (!Cart.order.isReady()) {
        $location.path('/checkout');
      }
    });
  } else if (!Cart.order.isReady()) {
    $location.path('/checkout');
  }

  this.complete = false;

  this.step = 'review';
  this.angle = -1.57079633 * 3;

  this.order = Cart.order;

  this.checkout = function () {
    // submit order
    Cart.submit(function () {
      self.complete = true;
    }, function (error) {
      if (angular.isString(error)) {
        switch (error) {
          case 'invalid-payment-data':
            Cart.clearPaymentData();
            $rootScope.checkoutErr = 'Invalid payment information!';
            $location.path('/checkout/billing');
            break;
        }
      }
    });
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

CartController.$inject = ['$rootScope', '$scope', '$location', 'Cart', 'Order'];
function CartController($rootScope, $scope, $location, Cart, Order) {
  $rootScope.section = 'checkout';
  $rootScope.legendCtrl.hide();

  this.order = Cart.order;

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

  this.removeItem = function () {
    Cart.removeItem(this.rollerIndex);
    this.rollerIndex = 0;
  };

  this.applyCoupon = function () {
    var self = this;
    this.couponErr = false;

    if (this.coupon != undefined && this.coupon.trim() != '') {
      Order.applyCoupon(
        {'coupon': this.coupon},
        function (order) {
          self.forceCoupon = false;
          Cart.order = order;
          self.order = order;
        },
        function (response) {
          if ('detail' in response.data) {
            self.couponErr = response.data.detail;
          }
        }
      );
    } else {
      this.couponErr = 'Enter your coupon please.'
    }
  };
}

ordersConfig.$inject = ['$routeProvider'];
function ordersConfig($routeProvider) {
  $routeProvider
    .when('/checkout/review', {
      controller: 'ReviewController',
      controllerAs: 'ctrl',
      templateUrl: 'orders/checkout_review.html'
    })
    .when('/cart', {
      controller: 'CartController',
      controllerAs: 'ctrl',
      templateUrl: 'orders/cart.html'
    })
    .when('/checkout/billing', {
      controller: 'BillingController',
      controllerAs: 'ctrl',
      templateUrl: 'orders/checkout_billing.html'
    })
    .when('/checkout/shipping', {
      controller: 'ShippingController',
      controllerAs: 'ctrl',
      templateUrl: 'orders/checkout_shipping.html'
    })
    .when('/checkout/authenticate', {
      controller: 'AuthenticateController',
      controllerAs: 'ctrl',
      templateUrl: 'orders/checkout_authenticate.html'
    })
    .when('/checkout', {
      controller: 'CheckoutController',
      controllerAs: 'ctrl',
      resolve: {
        user: ['Session', function (Session) {
          return Session.getCurrent();
        }]
      },
      templateUrl: 'orders/checkout.html'
    });
}

angular.module('mofa.orders', [])
  .controller('CheckoutController', CheckoutController)
  .controller('AuthenticateController', AuthenticateController)
  .controller('ShippingController', ShippingController)
  .controller('BillingController', BillingController)
  .controller('ReviewController', ReviewController)
  .controller('CartController', CartController)
  .config(ordersConfig);

})();
