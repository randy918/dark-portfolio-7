co("javascript testing OK")

const swiper = new Swiper(".swiper", {
	direction: "horizontal",
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