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
			
			$('input, textarea').placeholder();		
			this.initSlider();
			this.initOwlCarousel();	
			this.initGoToTop();
			
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

		initOwlCarousel: function(options) {
			$(".enable-owl-carousel").each(function(i) {
				var $owl = $(this);
				
				var itemsData = $owl.data('items');
				var autoPlayData = $owl.data('auto-play');
				var navigationData = $owl.data('navigation');
				var stopOnHoverData = $owl.data('stop-on-hover');
				var itemsDesktopData = $owl.data('items-desktop');
				var itemsDesktopSmallData = $owl.data('items-desktop-small');
				var itemsTabletData = $owl.data('items-tablet');
				var itemsTabletSmallData = $owl.data('items-tablet-small');
				
				$owl.owlCarousel({
					items: itemsData,
					pagination: false,
					navigation: navigationData,
					autoPlay: autoPlayData,
					stopOnHover: stopOnHoverData,
					navigationText: ["",""],
					itemsCustom:[
						[0, 1],
						[500, itemsTabletSmallData],
						[710, itemsTabletData],
						[992, itemsDesktopSmallData],
						[1199, itemsDesktopData]
					],
				});
			});
		}
		

			}

	Core.initialize();

})();