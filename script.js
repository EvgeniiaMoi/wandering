$(document).ready(function(){
  	$('.events').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
	});
	$('.events').find('.slick-prev').html('<i class="fa fa-2x fa-arrow-circle-o-left"></i>');
	$('.events').find('.slick-next').html('<i class="fa fa-2x fa-arrow-circle-o-right"></i>');
	$(".fancybox").fancybox();
	$(function () {
    	var tabContainers = $('div.pages > div');
	
    	$('div.arrowgreen ul.tabNavigation a').click(function () {
    	    tabContainers.hide().filter(this.hash).show();
	
    	    $('div.arrowgreen ul.tabNavigation a').removeClass('selected');
    	    $(this).addClass('selected');
	
    	    return false;
    	}).filter(':first').click();
	});
});