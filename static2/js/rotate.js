window.M = window.M || {};

jQuery(function ($) {
  var endTransitionEvents = [
    'webkitTransitionEnd',
    'otransitionend',
    'oTransitionEnd',
    'msTransitionEnd',
    'transitionend'
  ].join(' ');

  $('.circle .r').on('click', function () {
    var $region = $(this),
        $circle = $region.parent(),
        circleData = $circle.data(),
        step = (2 * Math.PI) / $circle.find('> .r').length,
        index = $region.prevAll().length,
        currentAngle = circleData.angle + (step * index),
        location = Math.round(currentAngle * (180 / Math.PI)) % 360,
        rotation, reverse;

    if (location >= 270) {
      rotation = 180 - (location - 270);
    } else if (location > 90) {
      rotation = 90 - location;
    } else {
      rotation = 90 - location;
    }
    reverse = - rotation;

    var rotateS = 'rotate(' + rotation +  'deg)',
        reverseS = 'rotate(' + reverse +  'deg)';


    $circle.css({
      'transform': rotateS,
      '-webkit-transform': rotateS,
      '-moz-transform': rotateS,
      '-o-transform': rotateS
    });
    var $reverse;

    if ($circle.find('.circle').length > 0) {
      $reverse = $circle.find('.circle').first();
    } else {
      $reverse = $circle.find('.content');
    }

    $reverse.add($circle.find('> .r')).css({
      'transform': reverseS,
      '-webkit-transform': reverseS,
      '-moz-transform': reverseS,
      '-o-transform': reverseS
    }).one(endTransitionEvents, _.once(function () {
      clearInterval(bgInt);
      _.delay(window.M.updateBG, 200);
    }));
    var bgInt = setInterval(window.M.updateBG, 200);

  });
});
