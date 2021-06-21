var swiper = new Swiper(".swiper-container", {
	spaceBetween: 40,
	centeredSlides: true,
	autoplay: {
		delay: 2200,
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

var swiper = new Swiper('#sponsor', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	autoplay: {
		delay: 2200,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('#exhibition-swiper', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

window.onscroll = function () {
	myFunction()
};

var navbar = document.getElementById("navbar");
var home = document.getElementById("home-sticky");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		home.classList.add("home-sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}