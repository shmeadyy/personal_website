$('.bxslider').bxSlider({
  mode: 'vertical',
  slideMargin: 5
});

$(document).ready(function(){
  $('.bxslider').bxSlider();

  $('.fade').hover(
		function(){
			$(this).find('.caption').fadeIn(250);
		},
		function(){
			$(this).find('.caption').fadeOut(250);
		}
	);
});