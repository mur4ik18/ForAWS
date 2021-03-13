(function () {

'use strict';

PagesController.$inject = ['$rootScope', 'page'];
function PagesController($rootScope, page) {
  this.page = page;

  $rootScope.pageTitle = this.page.title;
  $rootScope.legendCtrl.hide();
  $rootScope.section = 'pages';
}

LightPageController.$inject = ['$rootScope', 'page'];
function LightPageController($rootScope, page) {
  this.page = page;

  $rootScope.section = 'pages';
  $rootScope.pageTitle = this.page.title;
  $rootScope.legendCtrl.hide();
  $rootScope.lightboxCtrl.setLightbox('page', this.page);
}

MoNewsSignupController.$inject = ['$rootScope', '$scope', '$window', '$location', 'Subscriber'];
function MoNewsSignupController($rootScope, $scope, $window, $location, Subscriber) {
  var self = this;

  $rootScope.pageTitle = 'Mo-News Signup';
  $rootScope.section = 'mo-news';
  $rootScope.legendCtrl.hide();

  this.subscribe = function () {
    this.loading = true;
    this.subscriber.$save(function () {
      self.thanks = true;
      self.loading  = false;
    }, function () {
      self.thanks = true;
      self.loading = false;
    });
  };

  this.reset = function () {
    this.subscriber = new Subscriber();
    this.loading = false;
    this.thanks = false;

    $scope.$broadcast("circle:emit-scope");
  };

  $scope.$on('circle:scope', function (e, $circleScope) {
    $circleScope.$$childHead.signupForm.$setPristine();
  });

  this.back = function () {
    if ($window.history.length > 0) {
      $window.history.back();
    } else {
      $location.path('/');
    }
  };

  this.reset();
}

SubmitContentController.$inject = ['$rootScope', '$scope', '$http', '$location', '$window', 'api'];
function SubmitContentController($rootScope, $scope, $http, $location, $window, api) {
  var self = this;

  $rootScope.pageTitle = 'Submit Content';
  $rootScope.section = 'contact';
  $rootScope.legendCtrl.hide();

  this.submit = function () {
    this.loading = true;
    this.thanks = true;

    $http.post(api('/submit-content/'), this.info)
      .success(function () {
        self.thanks = true;
      })
      .finally(function () {
        self.loading = false;
      });
  };

  this.reset = function () {
    this.info = {};
    this.thanks = false;
    $scope.$broadcast("circle:emit-scope");
  };

  $scope.$on('circle:scope', function (e, $circleScope) {
    $circleScope.$$childHead.form.$setPristine();
  });

  this.back = function () {
    if ($window.history.length > 0) {
      $window.history.back();
    } else {
      $location.path('/');
    }
  };

  this.back = function () {
    if ($window.history.length > 0) {
      $window.history.back();
    } else {
      $location.path('/');
    }
  };


  this.reset();
}

pagesConfig.$inject = ['$routeProvider'];
function pagesConfig($routeProvider) {
  $routeProvider
    .when('/p/:page', {
      controller: 'PagesController',
      controllerAs: 'ctrl',
      templateUrl: 'pages/view.html',
      resolve: {
        page: ['$route', '$q', 'Page', function ($route, $q, Page) {
          return $q(function (resolve, reject) {
            Page.query({name: $route.current.params.page}, function (pages) {
              resolve(pages[0]);
            });
          });
        }]
      }
    })
    .when('/lp/:page', {
      controller: 'LightPageController',
      controllerAs: 'ctrl',
      templateUrl: 'pages/empty.html',
      resolve: {
        page: ['$route', '$q', 'Page', function ($route, $q, Page) {
          return $q(function (resolve, reject) {
            Page.query({name: $route.current.params.page}, function (pages) {
              resolve(pages[0]);
            });
          });
        }]
      }
    })
    .when('/mo-news/sign-up', {
      controller: 'MoNewsSignupController',
      controllerAs: 'ctrl',
      templateUrl: 'pages/mo_news.html'
    })
    .when('/submit-content', {
      controller: 'SubmitContentController',
      controllerAs: 'ctrl',
      templateUrl: 'pages/submit_content.html'
    });
}

angular.module('mofa.pages', [])
  .controller('PagesController', PagesController)
  .controller('LightPageController', LightPageController)
  .controller('MoNewsSignupController', MoNewsSignupController)
  .controller('SubmitContentController', SubmitContentController)
  .config(pagesConfig);

})();
