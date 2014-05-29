'use strict';

(function($) {
  
  // ================================================================
  // jpw behaviors
  // ================================================================

  var jpw = { // namespace setup

    config : {

      // Settings
      // -> global vars go here
      // --------------------------------------------------------------- 

    },

    // Setup
    // ---------------------------------------------------------------
    init : function(config) {
      $.extend(jpw.config, config);

      // fall back to .animate() frame animation is CSS transitions are not supported
      // -> for transit.js
      if (!$.support.transition) {
        $.fn.transition = $.fn.animate;
      }

      //----- Widon't & Best Ampersand -------------------------------------
      // -> http://justinhileman.info/article/a-jquery-widont-snippet/
      // -> http://justinhileman.info/article/more-jquery-typography/

      jQuery(function($) {
          $('h1, h2, h3, h4, h5, h6, p, li, dt, dd, a, span, figcaption').each(function() {
            $(this).html(
              $(this).html()
                // for any $amp; element, wrap in a span with class ".amp" 
                .replace(/&amp;/g,'<span class="amp">&amp;</span>')
                // add a non-breaking space between the last two words in selected elements
                // longer words are allowed to be widows
                .replace(/\s([^\s>]{0,12})\s*$/,'&nbsp;$1')
            );
          });
      });


    },

    // Methods
    // ---------------------------------------------------------------

    
  };

  
  $(window).load(function() {
    jpw.init();
  });
})(jQuery);

// H5BP
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());