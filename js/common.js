$(document).ready(function() {

		$('.nav__lines, .main-nav').on('click', function(){
			$('.line-1').toggleClass('line-1--active');
			$('.line-2').toggleClass('line-2--active');
			$('.main-nav').toggleClass('main-nav--active');
			$('body').toggleClass('body--overflow-hidden');
		});
		
		$('.mobile-dropdown').on('click', function(){
			$('.mobile__line-1').toggleClass('mobile__line-1--active');
			$('.mobile__line-2').toggleClass('mobile__line-2--active');
			$('.mobile-menu').toggleClass('mobile-menu--active');
			$('body').toggleClass('body--overflow-hidden');
		});

	// $(window).resize(function(event) {
	// 	if( $(window).width() >= 1100 ) {
	// 		$('.nav__lines').on('click', function(){
	// 			$('.line-1').toggleClass('line-1--active');
	// 			$('.line-2').toggleClass('line-2--active');
	// 			$('.main-nav').toggleClass('main-nav--active');
	// 			$('body').toggleClass('body--overflow-hidden');
	// 		});
	// 	} else{
	// 		$('.mobile-dropdown').on('click', function(){
	// 			$('.line-1').toggleClass('line-1--active');
	// 			$('.line-2').toggleClass('line-2--active');
	// 			$('.mobile-menu').toggleClass('mobile-menu--active');
	// 			$('body').toggleClass('body--overflow-hidden');
	// 		});
	// 	}
	// });
	
	$('#dropdown-numbers').on('click', function(){
		$('#dropdown-block-1').toggleClass('dropdown-block-1--active');
		$(this).toggleClass('dropdown__link--rotate');
	});
	$('#dropdown-integer').on('click', function(){
		$('#dropdown-block-2').toggleClass('dropdown-block-2--active');
		$(this).toggleClass('dropdown__link--rotate');
	});

	$('#menu-1').on('click', function(){
		$('.clients-menu').find('.clients-menu__item--active').removeClass('clients-menu__item--active');
		$(this).addClass('clients-menu__item--active');
		$('.clients__items').hasClass('.clients__items--show'), $('.clients__items').removeClass('clients__items--show');
		$('#management').addClass('clients__items--show');
	});
	$('#menu-2').on('click', function(){
		$('.clients-menu').find('.clients-menu__item--active').removeClass('clients-menu__item--active');
		$(this).addClass('clients-menu__item--active');
		$('.clients__items').hasClass('.clients__items--show'), $('.clients__items').removeClass('clients__items--show');
		$('#sale').addClass('clients__items--show');
	});
	$('#menu-3').on('click', function(){
		$('.clients-menu').find('.clients-menu__item--active').removeClass('clients-menu__item--active');
		$(this).addClass('clients-menu__item--active');
		$('.clients__items').hasClass('.clients__items--show'), $('.clients__items').removeClass('clients__items--show');
		$('#marketing').addClass('clients__items--show');
	});
});
