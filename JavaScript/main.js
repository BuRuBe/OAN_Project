$(document).ready(function(){
    //$('.section').hide();
    //$('.section').show(1000);
    $('div').fadeIn('slow');
    $('.tabs').tabs({collapsible: false, active: false});
    $(".menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1100);
    });
    $(".footer_menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1100);
    });
    $(".service_block").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1100);
    });
        //Доработать скольжение вкладок
    $('.tabs_li').click(function(){
        $().slideToggle("slow");
    });
});

