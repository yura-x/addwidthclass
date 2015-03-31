/*!
 * jQuery Add Width Class Plugin v1.0.0
 * https://github.com/yura-x/addwidthclass
 *
 * Copyright 2015 Yuri X
 * Released under the MIT license
 */

/*
 * jQuery Plugin for adding CSS classes depending from element width
*/
(function ( $ ) {
 
    $.fn.addWidthClass = function( options ) {
 
        // Default options.
        var settings = $.extend({
            breakpoints: [200,400,600,1000,1200]
        }, options );

        //string which contains all of the possible CSS classes (needs for remove classes on windows resizing)
        var availableClassesString = '';
        for (var i = settings.breakpoints.length - 1; i >= 0; i--) {
            availableClassesString += " " + "width-lt-" + settings.breakpoints[i] + " " + "width-gt-" + settings.breakpoints[i];
        };

        return this.each(function(){
            var $this = jQuery(this);
            var newClassesString = '';
            for (var i = settings.breakpoints.length - 1; i >= 0; i--) {
                if( $this.width() <= settings.breakpoints[i] ) {
                    newClassesString += ' width-lt-' + settings.breakpoints[i]

                } else {
                    newClassesString += ' width-gt-' + settings.breakpoints[i]
                }
            };
            $this.addClass(newClassesString);

            //processing window resize event
            jQuery(window).resize(function(){
                //removing all classes
                newClassesString = '';
                $this.removeClass(availableClassesString);

                for (var i = settings.breakpoints.length - 1; i >= 0; i--) {
                    if( $this.width() <= settings.breakpoints[i] ) {
                        newClassesString += ' width-lt-' + settings.breakpoints[i]

                    } else {
                        newClassesString += ' width-gt-' + settings.breakpoints[i]
                    }
                };
                $this.addClass(newClassesString);
            });
        });
    };
}( jQuery ));