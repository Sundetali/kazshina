(function() {
	"use strict";
	var Core = {
		initialized: false,
		initialize: function() {
			if (this.initialized) return;
			this.initialized = true;
			this.build();
		},


		build: function() {
			
			// $('input, textarea').placeholder();		
			this.initSlider();
			this.parallax();
			this.initPagePreloader();
			this.initScrollAnimations();
			// this.initOwlCarousel();	
			this.initGoToTop();	
			this.counter();		
		},


		initPagePreloader: function(options) {
			var $preloader = $('#page-preloader'),
			$spinner = $preloader.find('.spinner-loader');
			$spinner.fadeOut();
			$preloader.delay(500).fadeOut('slow');
			window.scrollTo( 0, 0 );
		},

		initScrollAnimations: function(options) {
			var scrollingAnimations = $('body').data("scrolling-animations");
			if(scrollingAnimations){
				new WOW().init();
			}
		},
		counter: function(options) {

            $(".plus").click(function(){
                var counter = plusarseInt($("#hiddenVal").val());
                counter++;
                $("#hiddenVal").val(counter);
                $(".info").text(counter);
            });
			$(".minus").click(function(){
                var counter = parseInt($("#hiddenVal").val());
                if(counter>=1){
	                counter--;
	                $("#hiddenVal").val(counter);
	                $(".info").text(counter);
            	}
            	else counter==0
            });
        },
	
		initGoToTop: function(options) {
			// Show/Hide Button on Window Scroll event.
			$(window).on('scroll', function(){
				var fromTop = $(this).scrollTop();
				var display = 'none';
				if(fromTop > 650){
					display = 'block';
				}
				$('#to-top').css({'display': display});
			});
			$("#to-top").smoothScroll();
		},

		parallax: function(options){
			$(window).scroll(function(){
				var st = $(this).scrollTop();
				// $(".back").css({
				// 	"transform":"translate(0%, " + st + "%"
				// });

				$(".parallax .parrallax-image").css({
					"transform":"translate(0%, " + st /20+ "%"
				});
			});
		},
		initSlider: function(options){
			var slider = $('.slider').length;
			if(slider){
		        jQuery(".slider").slider({
		            min: 10	,
		            max: 500000,
		            values: [0,500000],
		            range: true,
		            slide: function(event, ui){
		                $(".ui-slider-handle span.min").text(ui.values[0]);
		                $(".ui-slider-handle span.max").text(ui.values[1]);
		            },
		            stop:function(event, ui){
		                $("input.j-min").val(ui.values[0]);
		                $("input.j-max").val(ui.values[1]);
		            }
		        });
		        $(".ui-slider-handle:first-of-type").append("<span class='min'>5000</span>");
		        $(".ui-slider-handle:last-of-type").append("<span class='max'>500000</span>");
			}
		},

		}

	Core.initialize();

})();



	   