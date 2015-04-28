$(document).ready(function(){
	
	$('.btn').on('click', function() {
		if ($(this).hasClass('money')) {
			$(this).addClass('active');
			$('.time').removeClass('active');
			$('.bcg-1').addClass('banner1-toggle');
			$('.time-text').addClass('no-display');
			$('.money-text').removeClass('no-display');
		} else if ($('.btn').hasClass('time')) {
			$(this).addClass('active');
			$('.money').removeClass('active');
			$('.bcg-1').removeClass('banner1-toggle');
			$('.money-text').addClass('no-display');
			$('.time-text').removeClass('no-display');
		}
	});


	$.fn.parallax = function(options) {
	 
    var windowHeight = $(window).height();

    // Establish default settings
    var settings = $.extend({
        speed : 0.15
    }, options);

    // Iterate over each object in collection
    return this.each( function() {

    	// Save a reference to the element
    	var $this = $(this);

    	// Set up Scroll Handler
    	$(document).scroll(function(){
	 
        var scrollTop = $(window).scrollTop();
        var offset = $this.offset().top;
        var height = $this.outerHeight();
	 
    	// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}
	 
			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
	 
        // Apply the Y Background Position to Set the Parallax Effect
  			$this.css('background-position', 'center ' + yBgPosition + 'px');
	      $('.line-1').addClass('blue-progress');
	      $('.line-2').addClass('blue-progress');     
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