(function () {

'use strict';

AccountAuthController.$inject = ['$rootScope', 'User', 'Session', 'Cart', '$location'];
function AccountAuthController($rootScope, User, Session, Cart, $location) {
  $rootScope.section = 'account';
  $rootScope.legendCtrl.hide();
  var self = this;

  // this.step = 'authenticate';
  this.angle = 1.57079633;

  this.user = new User();

  this.continue = function () {
    this.loading = true;

    this.user.$auth(function (user) {
      Session.setUser(user);
      Cart.getCurrent();
      $location.path('/ur-account');
    }, function (response) {
      if ('data' in response && 'detail' in response.data) {
        self.error = response.data.detail;
      }
      self.loading = false;
    });
  };
}

AccountController.$inject = ['$rootScope', '$scope', 'Session'];
function AccountController($rootScope, $scope, Session) {
  Session.isLogged('/ur-account/auth');

  $rootScope.section = 'account';
  $rootScope.legendCtrl.hide();
  var self = this;

  this.step = 'profile';
  this.angle = 1.57079633;

  this.user = angular.copy(Session.user);

  this.update = function () {
    Session.user.email = this.user.email;
    Session.user.phone = this.user.phone;
    Session.user.password = this.user.password;

    Session.user.$update(function () {
      self.user = angular.copy(Session.user);
    });
  };
}

AccountShippingController.$inject = ['$rootScope', '$scope', 'Session', 'Cart'];
function AccountShippingController($rootScope, $scope, Session, Cart) {
  Session.isLogged('/ur-account/auth');

  $rootScope.section = 'account';
  $rootScope.legendCtrl.hide();
  var self = this;

  this.step = 'shipping';
  this.angle = 1.57079633 * 3;

  this.countries = ["United States"];

  this.user = angular.copy(Session.user);

  this.update = function () {
    Session.user.shipping_full_name = this.user.shipping_full_name;
    Session.user.shipping_address = this.user.shipping_address;
    Session.user.shipping_city = this.user.shipping_city;
    Session.user.shipping_state = this.user.shipping_state;
    Session.user.shipping_zip = this.user.shipping_zip;
    Session.user.shipping_country = this.user.shipping_country;

    Session.user.$update(function () {
      self.user = angular.copy(Session.user);
      // update order
      Cart.updateShipping(Session.user);
    });
  };
}

AccountBillingController.$inject = ['$rootScope', '$scope', 'Session', 'Cart'];
function AccountBillingController($rootScope, $scope, Session, Cart) {
  Session.isLogged('/ur-account/auth');

  $rootScope.section = 'account';
  $rootScope.legendCtrl.hide();
  var self = this;

  this.step = 'billing';
  this.angle = -1.57079633;

  this.countries = ["United States"];

  this.user = angular.copy(Session.user);

  this.update = function () {
    Session.user.billing_full_name = this.user.billing_full_name;
    Session.user.billing_address = this.user.billing_address;
    Session.user.billing_city = this.user.billing_city;
    Session.user.billing_state = this.user.billing_state;
    Session.user.billing_zip = this.user.billing_zip;
    Session.user.billing_country = this.user.billing_country;

    Session.user.$update(function () {
      self.user = angular.copy(Session.user);
      // update order
      Cart.updateBilling(Session.user);
    });
  };
}

AccountOrdersController.$inject = ['$rootScope', '$scope', '$timeout', 'Session', 'orders'];
function AccountOrdersController($rootScope, $scope, $timeout, Session, orders) {
  Session.isLogged('/ur-account/auth');

  $rootScope.section = 'account';
  $rootScope.legendCtrl.hide();
  var self = this;

  this.step = 'orders';
  this.angle = -1.57079633 * 2;
  this.orders = orders;

  this.setOrder = function (order) {
    $timeout(function () {
      self.object = self.order = order;
      self.rollerIndex = 0;

      var index = _.indexOf(self.orders, order);

      if (self.orders[index - 1]) {
        self.previous = self.orders[index - 1];
      } else {
        self.previous = null;
      }
      if (self.orders[index + 1]) {
        self.next = self.orders[index + 1];
      } else {
        self.next = null;
      }
    });
  };

  if (this.orders.length > 0) {
    this.setOrder(this.orders[0]);
  }

  this.nextOrder = function () {
    $scope.$broadcast('slide:next');
  };

  this.previousOrder = function () {
    $scope.$broadcast('slide:previous');
  }

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

usersConfig.$inject = ['$routeProvider'];
function usersConfig($routeProvider) {
  $routeProvider
    .when('/ur-account', {
      controller: 'AccountController',
      controllerAs: 'ctrl',
      resolve: {
        user: ['Session', function (Session) {
          return Session.getCurrent();
        }]
      },
      templateUrl: 'users/account.html'
    })
    .when('/ur-account/shipping', {
      controller: 'AccountShippingController',
      controllerAs: 'ctrl',
      resolve: {
        user: ['Session', function (Session) {
          return Session.getCurrent();
        }]
      },
      templateUrl: 'users/account_shipping.html'
    })
    .when('/ur-account/billing', {
      controller: 'AccountBillingController',
      controllerAs: 'ctrl',
      resolve: {
        user: ['Session', function (Session) {
          return Session.getCurrent();
        }]
      },
      templateUrl: 'users/account_billing.html'
    })
    .when('/ur-account/orders', {
      controller: 'AccountOrdersController',
      controllerAs: 'ctrl',
      resolve: {
        orders: ['Order', function (Order) {
          return Order.query({submitted: 'True'}).$promise;
        }]
      },
      templateUrl: 'users/account_orders.html'
    })
    .when('/ur-account/auth', {
      controller: 'AccountAuthController',
      controllerAs: 'ctrl',
      templateUrl: 'users/account_auth.html'
    });
}

angular.module('mofa.users', [])
  .controller('AccountController', AccountController)
  .controller('AccountShippingController', AccountShippingController)
  .controller('AccountBillingController', AccountBillingController)
  .controller('AccountAuthController', AccountAuthController)
  .controller('AccountOrdersController', AccountOrdersController)
  .config(usersConfig);

})();
