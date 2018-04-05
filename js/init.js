'use strict';
$( function() {
 	//Init tabs
 	$( "#tabs" ).tabs();
    //Init tabs-portfolio
    $( "#tabs-portfolio" ).tabs();

 // init slick carousel 
 $('.reviews-carousel').slick({ 
 	dots: true, 
 	prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',
 	nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>',
 });

 // Init slick nav
 $('.header-nav').slicknav({
 	appendTo: '.header .container-fluid',//мобильное меню добавили в container-fluid
	label: ''  //убрали слово меню
});

});