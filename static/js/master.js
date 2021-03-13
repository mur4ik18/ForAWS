window.M = window.M || {};

(function () {
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  var oCallbacks = [];
  window.M.updateBG = function () {
    _.each(oCallbacks, function (cb) {
      cb();
    });
  }

  window.M.recircle = function ($element) {
    oCallbacks = [];
    var $w = $(window);

    $element.find('.circle').each(function (i) {
      var $circle = $(this),
          data = $circle.data(),
          isInner = $circle.hasClass('inner'),
          $parent = isInner ? $circle.parent() : $w,
          W = $parent.width(),
          H = $parent.height(),
          $regions = $circle.find('> ng-include .r'),
          angle = parseFloat(data.angle),
          step = (2 * Math.PI) / $regions.length,
          // Circle Width: minus pading both sides
          max = isInner ? H : H - data.vPadding,
          cW = W - parseInt(data.padding) * 2,
          R,
          wSize = {
            width: $w.width(),
            height: $w.height()
          },
          leftOffset = 0,
          $circleHolder = $circle.parents('.view');

      // for smaller windows we remove only one padding, the right one
      if (wSize.width <= 1400 && !isInner) {
        cW = W - data.padding;
        if (data.legend) {
          leftOffset = data.padding / 2 - 50;
        }
      }

      $circle.show();

      cW = cW > max ? max : cW;
      R = cW / 2;
      $circle.css({
        width: cW,
        height: cW,
        left: (W - cW) / 2 - leftOffset,
        top: (H - cW) / 2
      });
      $regions.each(function () {
        var $region = $(this),
            w = $region.width(),
            h = $region.height(),
            $o = $region.find('.o');
        $region.show();
        $region.css({
          left: R + R * Math.cos(angle) - w / 2,
          top: R + R * Math.sin(angle) - h / 2
        });

        angle += step;
        oCallbacks.push(calculateBg);

        function calculateBg() {
          var offset = $region.offset(),
              chOffset = $circleHolder.offset();

          $o.css({
            width: wSize.width,
            height: wSize.height,
            top: - offset.top + chOffset.top,
            left: - offset.left + chOffset.left
          });
        }
      });

      window.M.updateBG();
      $('[data-toggle="tooltip"]').tooltip();
    });
  };

  window.M.animateSVG = function (element, reverse) {
    var $circle = element.find('.circle').first(),
        $svg = $('<svg width="100%" height="100%"><path fill="#6f268c" stroke="none" /></svg>')
            .appendTo($circle);

    // Angle to radians
    function toRad(angle) {
      return angle * Math.PI / 180;
    }

    // center equals radius
    function x(angle) {
      return Math.round(r + (r * Math.cos(toRad(angle))));
    }

    function y(angle) {
      return Math.round(r + (r * Math.sin(toRad(angle))));
    }

    var $path = $svg.find('path'),
        w = $svg.width(),
        r = w / 2;

    $path.attr({r: 360});

    function ternary(expr, ifTrue, ifFalse) {
      return (reverse ? !expr : expr) ? ifTrue : ifFalse;
    }

    var tpl = _.template(
      "M{{ w }} {{ r }} A{{ r }} {{ r }}, 0 {{ l }} {{ sw }}, {{ x }} {{ y }} L {{ r }} {{ r }} Z"
    );
    $path.attr({r: 0});
    $path.animate({
      r: 359
    }, {
      duration: 1000,
      easing: 'linear',
      step: function (val) {
        console.log(val);
        $path.attr('d', tpl({
          l: ternary(val > 180, 1, 0),
          sw: 0,
          w: w,
          r: r,
          x: x(reverse ? val : 360 - val),
          y: y(reverse ? val : 360 - val)
        }));
      },
      complete: function () {
        $svg.hide();
      }
    });
  };

  window.M.contentCenter = function () {
    setTimeout(function () {
      var $enter = $('.view.ng-enter'),
          $content;
      if ($enter.length == 0) {
        $content = $('.circle .content');
      } else {
        $content = $enter.find('.circle .content');
      }

      if ($content.length == 0) {
        return;
      }
      var $container = $content.find('.circle-container'),
          cH = $content.height(),
          containerH = $container.height();
      if (containerH > 0 && containerH < cH) {
        $container.css('margin-top', (cH - containerH) / 2);
      }
      $container.addClass('visible');
    }, 300);
  };

  function centerNavItems() {
    var $nav = $('#nav'),
        $ul = $nav.find('nav');
    $ul.css('margin-top', ($nav.height() - $ul.position().top) / 2  - $ul.height());
  }
  centerNavItems();
  $(window).on('resize', _.debounce(centerNavItems, 200));
})();

// jQuery(function ($) {
//   var $holder = $('.circle .holder');

//   $('.r[data-hover]').on('mouseenter', function () {
//     var $this = $(this),
//         hoverId = '#' + $this.data('hover');

//     $(hoverId).show();
//     $holder.hide();
//   }).on('mouseleave', function () {
//     var $this = $(this),
//         hoverId = '#' + $this.data('hover');

//     $(hoverId).hide();
//     $holder.show();
//   });
// });

// jQuery(function ($) {
//   $('.icon.ripple').on('click', function (e) {
//     var $this = $(this),
//         x = e.pageX,
//         y = e.pageY,
//         offset = $this.offset(),
//         clickY = parseInt(y - offset.top),
//         clickX = parseInt(x - offset.left),
//         $svg, $circle;

//     $svg = $('<svg><circle cx="' + clickX +'" cy="' + clickY + '" r="' + 0 + '"></circle></svg>').appendTo($this);
//     $circle = $svg.find('circle').attr({
//       cx: clickX,
//       cy: clickY,
//       r: 0,
//       fill: 'rgba(255, 255, 255, 0.2)'
//     });

//     $circle.animate({
//       r: $this.outerWidth() + 100
//     }, {
//       // easing: "easeOut",
//       duration: 200,
//       step: function (val) {
//         $circle.attr('r', val);
//       },
//       complete: function () {
//         $svg.remove();
//       }
//     });

  // });

  // $('.icon.ripple').on('mouseenter', function (e) {

  // });

  // $('.icon.ripple').on('mouseenter', function (e) {
  //   var $this = $(this),
  //       x = e.pageX,
  //       y = e.pageY,
  //       $svg, $circle;

  //   $svg = $('<svg><circle></circle></svg>').appendTo($this);
  //   $circle = $svg.find('circle');

  //   $this.data('svg', $svg);

  //   $this.css({
  //     color: '#000'
  //   });

  //   $circle.attr({
  //     cx: $svg.width() / 2,
  //     cy: $svg.height() / 2,
  //     r: 0,
  //     fill: 'rgba(255, 255, 255, 0.4)'
  //   });

  //   $circle.animate({
  //     r: $svg.width() / 2 - 10
  //   }, {
  //     // easing: "easeOut",
  //     duration: 150,
  //     step: function (val) {
  //       $circle.attr('r', val);
  //     },
  //     complete: function () {
  //       // $circle.remove();
  //     }
  //   });
  // }).on('mouseleave', function () {
  //   var $this = $(this);
  //   $this.css({color: '#fff'});
  //   $this.data('svg').remove();
  // });
// });
