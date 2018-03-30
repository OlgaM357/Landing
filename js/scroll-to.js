'use strict';
(function($) {
	// Scroll to element
	const scrollBtn = $('[data-scroll]');

	function onScroll(e) {
	    e.preventDefault();
	    var target = $(this).attr('data-scroll');
	    var dist = $(target).offset().top;
	    $('html, body').animate({scrollTop: dist}, 1000, 'swing');
	}

	scrollBtn.on('click', onScroll);

})(jQuery);
