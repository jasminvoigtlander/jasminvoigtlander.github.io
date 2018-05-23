
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// change navbar background after scroll
    $(document).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').removeClass('navbar-custom').addClass('navbar-scroll');
            $('.navbar-brand').addClass('navbar-brand-scroll').removeClass('navbar-brand');
            $('.navbar-brand-img').addClass('navbar-brand-img-scroll').removeClass('navbar-brand-img');
        } else {
            $('.navbar').removeClass('navbar-scroll').addClass('navbar-custom');
            $('.navbar-brand-scroll').addClass('navbar-brand').removeClass('navbar-brand-scroll');
            $('.navbar-brand-img-scroll').addClass('navbar-brand-img').removeClass('navbar-brand-img-scroll');
        }
        
    });

  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();

function sendMessage() {
    window.location.href = 'mailto:jasminnvoigt@gmail.com';
}