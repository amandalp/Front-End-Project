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

	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init();
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}
});

// $("#menuToggle").click(function () {
//     $('.wrapper,header,nav').toggleClass('push');

//         if ($('.wrapper,header,nav').hasClass('push')) {
//             $('.wrapper').css('position', 'fixed');
//         } else {
//             $('.wrapper').css('position', 'relative');
//         }

