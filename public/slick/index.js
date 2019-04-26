$(document).on('ready', function() { 
    $(".variable").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000, 

    });
    
  }).on('init', function() {
	$('.slick-dots').click(function() {
    	$('.variable').slick('autoplay', false);
    });
});