django.jQuery(function ($) {
  var $category = $('#id_category'),
      $image = $('#id_image').parents('.form-row'),
      $video = $('#id_video').parents('.form-row'),
      $audio = $('#id_audio').parents('.form-row'),
      $cropping = $('#id_cropping').parents('.form-row');

  $category.on('change', function () {
    $image.hide();
    $video.hide();
    $audio.hide();
    $cropping.hide();

    var val = $category.val();

    if (val == 'listen') {
      // $image.show();
      // $cropping.show();
      $audio.show();
    } else if (val == 'watch') {
      $video.show();
    } else if (val == 'see') {
      $image.show();
      $cropping.show();
    }
  }).trigger('change');
});
