const carousel = {
  className: 'developer-carousel__list',
  slidesPerView: 2,
  loop: true,
  effect: 'cube',
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 40,
  pagination: {
    clickable: true,
    bulletClass: `swiper-pagination-bullet swiper-pagination-developer`,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
};

const slide = {
  className: 'developer-carousel__item',
};

const developer = { carousel, slide };

export default developer;
