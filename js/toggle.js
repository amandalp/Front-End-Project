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
});