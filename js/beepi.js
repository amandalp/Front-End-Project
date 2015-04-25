$(document).ready(function(){
	$('.money').on('click', function() {
		// var toggleText = 
		// $('.active').removeClass('active');
		$('.time').removeClass('active');
	  $('.money').addClass('active');
	  $('.banner1').addClass('banner1-toggle');
	  $('.time-text').addClass('no-display');
	  $('.money-text').removeClass('no-display');
	});
	$('.time').on('click', function() {
		// var toggleText = 
		// $('.active').removeClass('active');
		$('.money').removeClass('active');
	  $('.time').addClass('active');
	  $('.banner1').removeClass('banner1-toggle');
	  $('.money-text').addClass('no-display');
	  $('.time-text').removeClass('no-display');
	});
});