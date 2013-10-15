/** @preserve jQuery animateNumber plugin v0.0.1
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */
(function($) {

  $.fn.animateNumber = function(options) {
    var data_extractor = function(node, attr_name, default_value){
          var data_value = node.data(attr_name);
          return parseInt(data_value ? data_value : default_value);
        };

    return this.each(
      function(){
        var target_node = $(this),
            from = data_extractor(target_node, 'animate-number-from', target_node.text()),
            defaults = {
              step: function(now, fx) {
                target_node.text(now);
              }  
            },
            settings = $.extend(defaults, options);

        target_node
          .prop('number', from)
          .animate(
            {
              number: data_extractor(target_node, 'animate-number-to', options.to)
            },
            settings
          );
      }
    );
  };

}(jQuery));