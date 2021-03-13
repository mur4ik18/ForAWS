(function () {

'use strict';

EventsController.$inject = ['$rootScope', 'dateUtils'];
function EventsController($rootScope, dateUtils) {
  var self = this;
  $rootScope.section = 'human_garden';
  $rootScope.legendCtrl.hide();

  this.MONTHS = dateUtils.MONTHS;

  this.onMouseover = function (month) {
    self.info = month.title;
  };

  this.onMouseout = function (month) {
    self.info = null;
  };
}

EventsDayController.$inject = [
  '$rootScope', '$scope', '$routeParams', '$timeout', '$location',
  'dateUtils', 'event', 'Event',
];
function EventsDayController($rootScope, $scope, $routeParams, $timeout,
                             $location, dateUtils, event, Event) {
  $rootScope.section = 'human_garden';

  var self = this;

  this.sliderCtrl = null;

  $rootScope.legendCtrl.setLegend('events', this);
  this.MONTHS = dateUtils.MONTHS;

  this.fetchSiblings = function () {
    if (this.event.previous) {
      this.previous = Event.get({id: this.event.previous});
    } else {
      this.previous = null;
    }
    if (this.event.next) {
      this.next = Event.get({id: this.event.next});
    } else {
      this.next = null;
    }
  };

  this.setEvent = function (event) {
    // recalculate lists if month changed
    self.object = self.event = event;

    if (event) {
      self.eventDate = new Date(self.event.datetime);
      self.month = self.event.getMonth();
      self.day = self.eventDate.getDate()
      self.year = self.eventDate.getFullYear();

      self.fetchSiblings();
      self.updateLists(self.month.index);
    } else {
      self.day = $routeParams.day;
      self.month = dateUtils.MONTHS[$routeParams.month - 1];
      self.year = $routeParams.year;

      self.updateLists($routeParams.month);
    }
  };

  this.updateLists = function (month) {
    var lists = dateUtils.splitLists(month);

    this.list1 = lists[0];
    this.list2 = lists[1];
    this.daysInMonth = dateUtils.daysInMonth(month);

    $rootScope.$broadcast("mRecircle");
  };

  this.nextEvent = function () {
    $scope.$broadcast('slide:next');
  };

  this.previousEvent = function () {
    $scope.$broadcast('slide:previous');
  };

  this.more = function () {
    // $rootScope.lightboxShow = true;
    $rootScope.lightboxCtrl.setLightbox('event', {
      event: this.event,
      month: this.month
    });
  };

  this.setEvent(event);
}

EventSearchController.$inject = ['$scope', 'Event'];
function EventSearchController($scope, Event) {
  var self = this;
  this.results = null;

  this.search = function () {
    this.results = Event.query({
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

eventsConfig.$inject = ['$routeProvider'];
function eventsConfig($routeProvider) {
  var eventsDayRoute = {
    controller: 'EventsDayController',
    controllerAs: 'ctrl',
    resolve: {
      'event': ['$route', '$q', 'Event', 'dateUtils', function ($route, $q, Event, dateUtils) {
        var month = $route.current.params.month,
            params = {month: month};
        if ('year' in $route.current.params) {
          params.year = $route.current.params.year;
        } else {
          params.year = dateUtils.getYear();
          $route.current.params.year = params.year;
        }
        if ('day' in $route.current.params) {
          params.day = $route.current.params.day;
          $route.current.params.day = params.day;
        }

        return $q(function (resolve, reject) {
          Event.getLast(params, function (event) {
            resolve(event);
          }, function (response) {
            if (response.status == 404) {
              resolve(null);
            } else {
              reject();
            }
            resolve(null);
          });
        });
      }]
    },
    templateUrl: 'events/day.html'
  };

  $routeProvider
    .when('/human-garden', {
      controller: 'EventsController',
      controllerAs: 'ctrl',
      templateUrl: 'events/month.html'
    })
    .when('/human-garden/event/:event', {
      controller: 'EventsDayController',
      controllerAs: 'ctrl',
      resolve: {
        'event': ['$route', 'Event', function ($route, Event) {
          return Event.get({id: $route.current.params.event}).$promise;
        }]
      },
      templateUrl: 'events/day.html'
    })
    .when('/human-garden/:year/:month/:day', eventsDayRoute)
    .when('/human-garden/:year/:month', eventsDayRoute)
    .when('/human-garden/:month', eventsDayRoute);
}

angular.module('mofa.events', [
  'mofa.utils',
])
.controller('EventsController', EventsController)
.controller('EventsDayController', EventsDayController)
.controller('EventSearchController', EventSearchController)
.config(eventsConfig);

})();
