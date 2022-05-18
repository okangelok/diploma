import "./css/style.css";
import * as $ from "jquery";

$(document).ready(function() {
	$('.spoiler_title').click(function(event) {
		if ($('.spoiler_container').hasClass('one')) {
			$('.spoiler_title').not($(this)).removeClass('active');
			$('.spoiler_text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

//Меню бургер
$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header_list').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//Инициализация свайпера
let swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true, //Бесконечно листать, если нет, удали
	autoplay: {
		delay: 5000, //Скорость
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});