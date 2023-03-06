co("javascript testing OK")

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>


    var swiper = new Swiper(".swiper", {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 6500,
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