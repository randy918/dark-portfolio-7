co("javascript testing OK")


    var swiper = new Swiper(".wwiper", {
		spaceBetween: 30,
		effect: "fade",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});