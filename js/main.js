$(document).ready(function() {
		/*change img in products for hover*/
			/*$(".wheels .wheel").hover(function() {
				if( $(this).find('img').attr('src') == 'img/'+$(this).attr('id')+'.png'){
					$(this).find('img').attr('src', 'img/'+$(this).attr('id')+'-active.png');
				}
				else  
					$(this).find('img').attr('src', 'img/'+$(this).attr('id')+'.png');
			}
			);*/
			$(".wheels .wheel").click(function() {
				var thiss = $(this);
				$(".wheels .wheel").removeClass("active");
				thiss.addClass("active");
				var length =  $('.wheels .wheel').length;

			/*$(".wheels .active").find('img').attr('src', 'img/'+$(this).attr('id')+'-active.png');
				*/

			/*show neccessary block*/
				var num = parseInt(thiss.attr('id').replace(/\D+/g,""));
				$('.choise .choise-in').css({'display': 'none'});	
				$('#choise-'+num).css({'display': 'flex'});		
				console.log(num);

				if( $(this).find('img').attr('src') == 'img/'+$(this).attr('id')+'.png'){
					$(this).find('img').attr('src', 'img/'+$(this).attr('id')+'-active.png');
				}
				for(var i=1; i<=length; i++) {
					if(i != num) {
						$('.wheels #wheel-'+i).find('img').attr('src', 'img/'+'wheel-'+i+'.png');
					}
				}
				
			}
			);

			/*reviews*/
			$(".reviews .nav-item").click(function() {
				
				$(".reviews .nav-item").removeClass("active");
				$(this).addClass("active");
				
			});


			/*owl corusel*/
			$(".owl-carousel").each(function() {
				  var $this = $(this);
				  $this.owlCarousel({
				    items : 4,
				    responsiveClass:true,
				    responsive:{
				        0:{
				            items:1,
				            nav:true
				        },
				        500:{
				            items:2,
				            nav:true
				        },
				        800:{
				            items:3,
				            nav:false
				        },
				        1000:{
				            items:4,
				            nav:true,
				            loop:false
				        }
				    },
				    dots: false,
				    nav: true,
				    smartSpeed: 900,
				    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
				  });
			});

			/* scroll */

			/*scroll to product-top*/
			$(".section-slider .down").click(function() {
				$("html, body").animate({ scrollTop: $(".products .product-top").offset().top }, 1000);
			});

			/*scroll in products list*/
			$(".products .active-1").click(function() {
				$("html, body").animate({ scrollTop: $("#wheel-corusel-1").offset().top }, 1000);
			});
			$(".products .active-2").click(function() {
				$("html, body").animate({ scrollTop: $("#wheel-corusel-2").offset().top }, 1000);
			});
			$(".products .active-3").click(function() {
				$("html, body").animate({ scrollTop: $("#wheel-corusel-3").offset().top }, 1000);
			});
});