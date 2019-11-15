$(document).ready(function() {
	
	$('.nav__lines').on('click', function(){
		if( $(window).width() >= 1100 ) {
			if( $('.main-nav').hasClass('main-nav--active') ){
				$('.line-1').removeClass('line-1--active');
				$('.line-2').removeClass('line-2--active');
				$('.main-nav').removeClass('main-nav--active');
				$('body').removeClass('body--overflow-hidden');
			} else{
				$('.line-1').addClass('line-1--active');
				$('.line-2').addClass('line-2--active');
				$('.main-nav').addClass('main-nav--active');
				$('body').addClass('body--overflow-hidden');
			}
		} else{
			
		}
		
		
	});
	
});
