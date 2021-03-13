jQuery(function ($) {

  $(document)
    .on('mouseenter', '.r.effect', function () {
      var $this = $(this);
      $this.data('removing', false);

      _.delay(function () {
        if (!$this.data('removing')) {
          $this.addClass('visible');
        }
      }, 300);
    })
    .on('mouseleave', '.r.effect', function () {
      var $this = $(this);
      $this.data('removing', true);
      $this.removeClass('visible');
    });

});
