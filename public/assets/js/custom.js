/*
  Version: 1.0
  Author: BanyanTheme
  Website: https://banyanthemes.com/
*/
(function ($) {
  'use strict';
  $(document).ready(function () {
    // show body after site load
    $('body').show();

    /*mag popup*/
    $('.video').magnificPopup({
      type: 'iframe',

      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '<div class="mfp-title">Some caption</div>' +
          '</div>',
      },
      callbacks: {
        markupParse: function (template, values, item) {
          values.title = item.el.attr('title');
        },
      },
    });

    //counter
    $('.counter').counterUp({
      delay: 10,
      time: 5000,
    });

    // Masonry portfolio
    $('.all-course').mixItUp({
      selectors: {
        target: '.tile',
        filter: '.filter',
        sort: '.sort-btn',
      },
      animation: {
        animateResizeContainer: false,
        effects: 'fade scale',
      },
    });

    // Initilize wow js
    // new WOW().init();
  }); // End load document
})(jQuery);
