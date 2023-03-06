co("javascript testing OK")

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// import function to register Swiper custom elements// register Swiper custom elements
register();

    new Swiper("#swiper-1", {
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
	});