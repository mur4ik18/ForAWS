(function () {

'use strict';

function mCircleDirective($window, $timeout, defaults) {
  var $w = angular.element($window);

  return {
    scope: {
      elements: '@',
      sElements: '@',
      circleClass: '@',
      angle: '@',
      sAngle: '@',
      padding: '@',
      sPadding: '@',
      vPadding: '@',
      legend: '@',
      ctrl: '=',
      three: '@',
      extra: '@'
    },
    transclude: true,
    controller: ['$scope', 'STATIC_URL', function ($scope, staticUrl) {
      $scope.STATIC_URL = staticUrl;
    }],
    link: function (scope, element, attrs) {
      defaults(scope, {
        angle: 0,
        sAngle: 0.26,
        tAnngle: 0.2,
        padding: 350,
        sPadding: 40,
        tPadding: 40,
        vPadding: 150,
        legend: false
      });

      var recircle = scope.recircle = function () {
        $timeout(function () {
          window.M.recircle(element);
          window.M.contentCenter();
        });
      };
      $w.on('resize', recircle);

      scope.$on('$destroy', function () {
        $w.off('resize', recircle);
      });

      scope.$on("mRecircle", recircle);

      $timeout(function () {
        window.M.updateBG();
      }, 500);

      if (!scope.elements) {
        scope.recircle();
      }

      scope.$on('circle:emit-scope', function (e) {
        scope.$emit('circle:scope', scope);
      });
    },
    templateUrl: function (element, attrs) {
      if (attrs.three) {
        return 'directives/circle_3.html'
      }
      return 'directives/circle.html'
    }
  }
}

function mCircleSlidesDirective() {
  return {
    scope: {
      ctrl: '=',
      template: '@',
      onSlideFinish: '&',
      onAnimationStart: '&',
      onAnimationEnd: '&'
    },
    link: function (scope, element, attrs) {
      element.attr('id', 'event-slide');

      scope.previous = function () {
        var $current = element.find('.current'),
            $previous = element.find('.previous');

        var finish = _.after(2, function () {
          $current.css('left', 0);
          $previous.css('left', '-100%');

          scope.onSlideFinish({data: scope.ctrl.previous});

          scope.onAnimationEnd();
        });

        $current.animate({
          left: '100%'
        }, finish);
        $previous.animate({
          left: 0
        }, finish);

        scope.onAnimationStart();
      };

      scope.next = function () {
        var $current = element.find('.current'),
            $next = element.find('.next');

        var finish = _.after(2, function () {
          $current.css('left', 0);
          $next.css('left', '100%');

          scope.onSlideFinish({data: scope.ctrl.next});

          scope.onAnimationEnd();
        });

        $current.animate({
          left: '-100%'
        }, finish);
        $next.animate({
          left: 0
        }, finish);

        scope.onAnimationStart();
      };

      scope.$on('slide:next', scope.next);
      scope.$on('slide:previous', scope.previous);
    },
    templateUrl: 'directives/m_circle_slides.html'
  };
}

function mSlideDirective() {
  return {
    scope: {
      ctrl: '=',
      data: '=',
      template: '=',
    },
    template: '<ng-include src="template"></ng-include>'
  }
}

yearSelectDirective.$inject = ['$timeout'];
function yearSelectDirective($timeout) {
  return {
    scope: {
      selected: '='
    },
    link: function (scope, element, attrs) {
      var stopYear = 2015,
          startYear = (new Date()).getFullYear() + 1,
          year;

      scope.years = [];

      for (year = startYear; year >= stopYear; year--) {
        scope.years.push(year);
      }

      scope.$watch('visible', function (value) {
        if (value) {
          $timeout(function () {
            element.find('.nano').nanoScroller();
          });
        }
      });
      scope.setYear = function (year) {
        scope.selected = year;
        scope.visible = false;
      };
    },
    templateUrl: 'directives/year_select.html'
  }
}

orderSelectDirective.$inject = ['$timeout'];
function orderSelectDirective($timeout) {
  return {
    scope: {
      selected: '='
    },
    link: function (scope, element, attrs) {
      scope.orders = [
        'most recent'
      ];

      scope.$watch('visible', function (value) {
        if (value) {
          $timeout(function () {
            element.find('.nano').nanoScroller();
          });
        }
      });
      scope.setOrder = function (order) {
        scope.selected = order;
        scope.visible = false;
      };
    },
    templateUrl: 'directives/order_select.html'
  }
}

mfSelectDirective.$inject = ['$timeout'];
function mfSelectDirective($timeout) {
  return {
    require: 'ngModel',
    scope: {
      options: '=',
      empty: '@'
    },
    link: function (scope, element, attrs, ctrl) {
      ctrl.$render = function () {
        scope.selected = ctrl.$modelValue;
      };

      scope.$watch('visible', function (value) {
        if (value) {
          $timeout(function () {
            element.find('.nano').nanoScroller();
          });
        }
      });

      scope.changeOption = function (option) {
        scope.visible = false;
        scope.selected = option;
        ctrl.$setViewValue(option);
      };
    },
    templateUrl: 'directives/mf_select.html'
  }
}

function mediaVideoDirective() {
  return {
    scope: {
      link: '=',
      height: '@'
    },
    link: function (scope, element, attrs) {
      function updateUrl() {
        var url = scope.link;
        scope.playing = false;
        if (!scope.height) {
          scope.height = '100%';
        }

        if (url.search('youtube') > -1) {
          angular.forEach(url.split('?')[1].split('&'), function (d) {
            d = d.split('=');
            if (d[0] == 'v') {
              url = d[1];
            };
          });
          url = "https://www.youtube.com/embed/" + url;

        } else if (url.search('vimeo') > -1) {
          url = url.split('?')[0].split('/');
          url = url[url.length - 1];

          url = "https://player.vimeo.com/video/" + url;
        }
        scope.url = url + '?autoplay=1';
      }

      scope.$watch('link', function () {
        scope.playing = false;
        updateUrl();
      });

      scope.$on('stopPlaying', function (e) {
        scope.playing = false;
      });
    },
    templateUrl: 'directives/media_video.html'
  }
}

function mediaAudioDirective() {
  return {
    scope: {
      link: '='
    },
    link: function (scope, element, attrs) {
      scope.$watch('link', function () {
        scope.playing = false;
      })
    },
    templateUrl: 'directives/media_audio.html'
  }
}

function passwordMatchDirective() {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      var validator = ctrl.$validators.match = function (modelValue, viewValue) {
        var other = scope.$eval(attrs.passwordMatch);
        return other == modelValue;
      };

      scope.$watch(attrs.passwordMatch, function (value) {
        ctrl.$setValidity('match', validator(scope.match, value));
      });
    }
  };
}

function directivesConfig($animateProvider) {
  $animateProvider.classNameFilter('/^(hvr\-pop)/');
}

angular.module('mofa.directives', [])
  .directive('mCircle', ['$window', '$timeout', 'defaults', mCircleDirective])
  .directive('mCircleSlides', mCircleSlidesDirective)
  .directive('mSlide', mSlideDirective)
  .directive('yearSelect', yearSelectDirective)
  .directive('orderSelect', orderSelectDirective)
  .directive('mfSelect', mfSelectDirective)
  .directive('mediaVideo', mediaVideoDirective)
  .directive('mediaAudio', mediaAudioDirective)
  .directive('passwordMatch', passwordMatchDirective)
  .config(['$animateProvider', directivesConfig]);


})();
