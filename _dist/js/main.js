/*Magnific Pop UP*/
$(document).ready(function () {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

/*Owl Carousel*/
$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
	items: 1,
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 2500,
});

/*Menu desplegable responive*/
$('.cbp-spmenu a').click(function () {
	$('.navbar-toggle:visible').click();
});


/*Push Menu responive*/
		var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
			showRightPush = document.getElementById( 'showRightPush' ),
				body = document.body;

				
			showRightPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toleft' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
				disableOther( 'showRightPush' );
			};

			function disableOther( button ) {

				if( button !== 'showRightPush' ) {
					classie.toggle( showRightPush, 'disabled' );
				}
			};

/*Google Analytics*/
(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-93052176-1', 'auto');
ga('send', 'pageview');