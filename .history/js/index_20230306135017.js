co("javascript testing OK")



const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",

		effect: "cube", // delete for sideways motion, use fade
		autoplay: {
			delay: 6500,
		},
		pagination: {
			el: "#swiper-1 .swiper-pagination",
			clickable: true,
		},
		lazyloading: true,
		loop: true,
	},
});