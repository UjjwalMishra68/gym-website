function testimonialSwiper() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 32,
        // grabCursor: true,
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
testimonialSwiper()
export default testimonialSwiper;