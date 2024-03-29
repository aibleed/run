$(document).ready(function () {
	$('.carousel__inner').slick({
		dots: false,
		infinite: true,
		speed: 1100,
		// adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button type="button" class="slick-prev"><img src="src/images/slides/chevron left solid.png"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="src/images/slides/chevron right solid.png"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false,
				},
			},
		],
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active')
			.siblings()
			.removeClass('catalog__tab_active')
			.closest('div.container')
			.find('div.catalog__content')
			.removeClass('catalog__content_active')
			.eq($(this).index())
			.addClass('catalog__content_active');
	});
	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	}
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	// Modal

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('fast');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('fast');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('fast');
		});
	});
});

// const slider = tns({
// 	container: '.carousel__inner',
// 	items: 1,
// 	slideBy: 'page',
// 	autoplay: false,
// 	controls: false,
// 	nav: false,
// });
// document.querySelector('.prev').addEventListener('click', function () {
// 	slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
// 	slider.goTo('next');
// });
