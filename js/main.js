$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});


	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});

	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

    $('.next').on('click', function () {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
        return false;
    });

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	// Slider
    $('.bxslider').bxSlider({
		auto: true, speed: 500, pause: 2000, mode:'horizontal', autoControls: false, pager:false,
	});

    // Slider
    $('.favorite-slider').bxSlider({
        auto: true, speed: 500, pause: 2000, mode:'horizontal', autoControls: false, pager:false,
    });

    //vanilla-view-slider
    var slider = $('.vanilla-view-slider').bxSlider({
        auto: false, speed: 500, pause: 2000, mode:'fade', autoControls: false, pager:false, controls: false, touchEnabled: false

    });

    $('#vanillaViewButton').click(function(){
        slider.goToNextSlide();
        $(this).hide();
        return false;
    });

});