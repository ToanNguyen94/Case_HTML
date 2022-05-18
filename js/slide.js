jQuery( function ( $ ) {
	let slickSlide = () => {
		$( '.banner' ).slick( {
			slidesToShow: 1,
			// dots: true,
			arrows: false,
			autoplay: true,
			rows: 0,
			autoplaySpeed: 2500,
		} );
		$( '.brand__wrap' ).slick( {
			slidesToShow: 4,
			dots: false,
			arrows: false,
			autoplay: true,
			rows: 0,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						dots: false,
						slidesToShow: 2
					}
				}
			]
		} );
	};
	function counter_number() {
		var a = 0;
		$( window ).scroll( function () {
			var oTop = $( '.about' ).offset().top - window.innerHeight;
			if ( a == 0 && $( window ).scrollTop() > oTop ) {
				$( '.count' ).each( function () {
					$( this ).prop( 'Counter', 0 ).animate( {
						Counter: $( this ).text()
					}, {
						duration: 3000,
						easing: 'swing',
						step: function ( now ) {
							$( this ).text( Math.ceil( now ) );
						}
					} );
				} );
				a = 1;
			}
		} );
	};
	function scrollDown() {
		$( '.scrooldow a' ).each( function () {
			var id = $( this ).attr( 'href' );
			if ( id.includes( 'tel' ) ) {
				return;
			}
			$( this ).click( function ( e ) {
				e.preventDefault();

				if ( !id || '#' === id ) {
					return false;
				}

				$( 'html, body' ).animate( {
					scrollTop: $( id ).offset().top - 100
				}, 1000 );
				return false;
			} );
		} );
	}
	function slideMenu() {
		$( '.mobile' ).click( function ( e ) {
			e.stopPropagation();
			$( '.menu' ).css( 'right', '-5vw' );
		} );
		$( 'body' ).click( function ( event ) {
			event.stopPropagation();
			$( '.menu' ).css( 'right', '-105vw' );
		} );
	}
	slideMenu();
	slickSlide();
	counter_number();
	scrollDown();
} );