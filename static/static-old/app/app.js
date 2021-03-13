(function () {

'use strict';

window.template = function (template) { return template; };

BaseController.$inject = ['$rootScope'];
function BaseController($rootScope) {
}

HomeController.$inject = ['$rootScope'];
function HomeController($rootScope) {
  $rootScope.section = 'home';
  $rootScope.legendCtrl.hide();

  var self = this;

  this.PAGES = [
    {name: 'Galleries', icon: 'a', url: '/galleries'},
    {name: 'About', icon: 'd', url: '/p/about'},
    {name: 'e_market', icon: 'c', url: '/e-market'},
    {name: 'events', icon: 'b', url: '/human-garden'},
  ];

  this.info = null;

  this.onMouseover = function (page) {
    this.info = page.name;
  };

  this.onMouseout = function (page) {
    this.info = null;
  };
}

LegendController.$inject = ['$rootScope'];
function LegendController($rootScope) {
  $rootScope.legendCtrl = this;

  this.show = false;

  this.setLegend = function (element, data) {
    var newElement = "legend/" + element + ".html";
    if (newElement != this.element) {
      this.element = newElement;
    } else {
      this.show = true;
    }
    this.data = data;
  };

  this.loaded = function () {
    this.show = true;
  };

  this.hide = function () {
    this.show = false;
  };
}

LightboxController.$inject = ['$rootScope', '$timeout'];
function LightboxController($rootScope, $timeout) {
  var self = this;
  $rootScope.lightboxCtrl = this;

  this.show = false;
  this.element = null;

  this.setLightbox = function (element, data) {
    var newElement = "lightbox/" + element + ".html";
    if (newElement != this.element) {
      this.element = newElement;
    } else {
      this.setShow(true);
    }

    this.data = data;
  };

  this.loaded = function () {
    this.setShow(true);

    $timeout(function () {
      angular.element('#lightbox .nano').nanoScroller();
    }, 1000);
  };

  this.hide = function () {
    if (this.show) {
      this.setShow(false);
    }
  };

  this.setShow = function (value) {
    $timeout(function () {
      self.show = value;
      if (!self.show) {
        $timeout(function () { self.element = null; }, 1000);
      }
    });
  }
  this.carousel = function () {
    angular.element('.carousel').carousel();
  };
}

GlobalSearchController.$inject = ['$rootScope', '$scope', '$http', '$location', 'api'];
function GlobalSearchController($rootScope, $scope, $http, $location, api) {
  var self = this;
  this.searching = false;

  this.search = function () {
    this.searching = true;
    $http.get(api('/search/'), {params: {search: this.query}})
      .then(function (response) {
        self.results = response.data;
      }, function () {
        console.log('Failure!');
      }).finally(function () {
        self.searching = false;
      });

    $rootScope.lightboxCtrl.setLightbox('search', this);
  };
}

appConfig.$inject = [
  '$routeProvider', '$locationProvider', '$sceDelegateProvider', '$sceProvider',
  '$httpProvider'
];
function appConfig($routeProvider, $locationProvider, $sceDelegateProvider,
                   $sceProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'home.html',
      controllerAs: 'ctrl'
    })
    .otherwise('/');

  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/embed/**',
    'https://player.vimeo.com/video/**'
  ]);

  $locationProvider.html5Mode(true);
  $sceProvider.enabled(false);
}

appRun.$inject = ['$rootScope', '$templateCache', '$timeout', 'STATIC_URL'];
function appRun($rootScope, $templateCache, $timeout, staticUrl, cart) {
  $rootScope.lightboxShow = false;
  angular.forEach(window.TEMPLATE_CACHE, function (template, key) {
    $templateCache.put(key + '.html', template);
  });

  $timeout(function () {
    $rootScope.loaded = true;
  });

  $rootScope.STATIC_URL = staticUrl;
}

angular.module('mofa', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ngSanitize',
  'ngMessages',

  'mofa.settings',
  'mofa.directives',
  'mofa.utils',
  'mofa.resources',
  'mofa.events',
  'mofa.galleries',
  'mofa.pages',
  'mofa.e_market',
  'mofa.orders',
  'mofa.users'
])

.controller('BaseController', BaseController)
.controller('HomeController', HomeController)
.controller('LegendController', LegendController)
.controller('LightboxController', LightboxController)
.controller('GlobalSearchController', GlobalSearchController)
.config(appConfig)
.run(appRun);

})();
