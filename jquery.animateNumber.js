/** @preserve jQuery animateNumber plugin v0.0.1
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */
(function($) {

  $.fn.animateNumber = function(options) {
    return this.each(
      function(){
        var target = $(this),
            from = parseInt(target.text()),
            defaults = {
              step: function(now, fx) {
                target.text(now);
              }  
            },
            settings = $.extend(defaults, options);

        target
          .prop('number', from)
          .animate(
            {
              number: options.to
            },
            settings
          );
      }
    );

  };

}(jQuery));