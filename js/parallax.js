$(document).ready(function(){
  $.fn.parallax = function(options) {

    var windowHeight = $(window).height();
    var settings = $.extend({
        speed : 0.15
    }, options);

    return this.each( function() {

    	var $this = $(this);

    	// Scroll Handler
    	$(document).scroll(function(){

        var scrollTop = $(window).scrollTop();
        var offset = $this.offset().top;
        var height = $this.outerHeight();

        var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

        // Parallax Effect
  			$this.css('background-position', 'center ' + yBgPosition + 'px');

        // Progress Bar Blue Line
        var slidePosition = $('#slide-1').position();
	      // $('.line-1').addClass('blue-progress');
          
	    });
	  });
	}
}(jQuery));

$('.bcg-1,.bcg-2').parallax({
	speed :	0.01
});

$('.bcg-1,.bcg-2').parallax({
	speed :	0.15
});