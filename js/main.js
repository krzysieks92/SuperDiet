jQuery(document).ready(function($){
	var secondaryNav = $('.secondary-nav'),
		secondaryNavTopPosition = secondaryNav.offset().top,
		taglineOffesetTop = $('.intro-tagline').offset().top + $('.intro-tagline').height() + parseInt($('.intro-tagline').css('paddingTop').replace('px', '')),
		contentSections = $('.section');
	
	$(window).on('scroll', function(){
		//on desktop - assign a position fixed to logo and action button and move them outside the viewport
		( $(window).scrollTop() > taglineOffesetTop ) ? $('.logo, .cd-btn, .social').addClass('is-hidden') : $('.logo, .cd-btn, .social').removeClass('is-hidden');
		
		//on desktop - fix secondary navigation on scrolling
		if($(window).scrollTop() > secondaryNavTopPosition ) {
			//fix secondary navigation
			secondaryNav.addClass('is-fixed');
			//push the .cd-main-content giving it a top-margin
			$('.main-content').addClass('has-top-margin');	
			//on Firefox CSS transition/animation fails when parent element changes position attribute
			//so we to change secondary navigation childrens attributes after having changed its position value
			setTimeout(function() {
	            secondaryNav.addClass('animate-children');
	            $('.logo').addClass('slide-in');
				$('.cd-btn').addClass('slide-in');
				$('.social').addClass('slide-in');
	        }, 50);
		} else {
			secondaryNav.removeClass('is-fixed');
			$('.main-content').removeClass('has-top-margin');
			setTimeout(function() {
	            secondaryNav.removeClass('animate-children');
	            $('.logo').removeClass('slide-in');
				$('.cd-btn').removeClass('slide-in');
				$('.social').removeClass('slide-in');
	        }, 50);
		}

		//on desktop - update the active link in the secondary fixed navigation
		updateSecondaryNavigation();
	});

	function updateSecondaryNavigation() {
		contentSections.each(function(){
			var actual = $(this),
				actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
				actualAnchor = secondaryNav.find('a[href="#'+actual.attr('id')+'"]');
			if ( ( actual.offset().top - secondaryNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - secondaryNav.height() > $(window).scrollTop() ) ) {
				actualAnchor.addClass('active');
			}else {
				actualAnchor.removeClass('active');
			}
		});
	}

	//on mobile - open/close secondary navigation clicking/tapping the .secondary-nav-trigger
	$('.secondary-nav-trigger').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('menu-is-open');
		secondaryNav.find('ul').toggleClass('is-visible');
	});

	//smooth scrolling when clicking on the secondary navigation items
	secondaryNav.find('ul a').on('click', function(event){
        event.preventDefault();
        var target= $(this.hash);
        $('body,html').animate({
        	'scrollTop': target.offset().top - secondaryNav.height() + 1
        	}, 400
        ); 
        //on mobile - close secondary navigation
        $('.secondary-nav-trigger').removeClass('menu-is-open');
        secondaryNav.find('ul').removeClass('is-visible');
    });

    //on mobile - open/close primary navigation clicking/tapping the menu icon
	/*$('.primary-nav').on('click', function(event){
		if($(event.target).is('.primary-nav')) $(this).children('.social').children('ul').toggleClass('is-visible');
	});*/
});

/*płynne przewijanie strony*/
$(document).ready(function() { 
 
	$('a[href^="."]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});

$(document).ready(function(){
	$('.welcome').on('click', function(event){
		
		var target = $('.section1');
		
		if( target.length ){
			event.preventDefault();
			$('html, body').animate({
				scrollTop:target.offset().top
			},1000);
		}
	});
});

