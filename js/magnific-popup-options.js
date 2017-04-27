$(document).ready(function() {
  // MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};

	var magnifVideo = function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			//New addition for http problem with youtube
			type: 'iframe',
		     iframe: {
		         markup: '<div class="mfp-iframe-scaler">'+
		             '<div class="mfp-close"></div>'+
		             '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		             '<div class="mfp-title">Some caption</div>'+
		             '</div>',
		         patterns: {
		             youtube: {
		                 index: 'youtube.com/',
		                 id: 'v=',
		                 src: 'http://www.youtube.com/embed/%id%?rel=0&autoplay=0'
		             },
								 vimeo: {
										 index: 'vimeo.com/',
										 id: '/',
										 src: '//player.vimeo.com/video/%id%?autoplay=1'
									 },
								 gmaps: {
									 index: '//maps.google.',
									 src: '%id%&output=embed'
								 },
		         }
		     }
				/*disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false */
    });
	};




	// Call the functions
	magnifPopup();
	magnifVideo();

});
