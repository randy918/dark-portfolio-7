co("javascript testing OK")

const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-paginatlkion",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});