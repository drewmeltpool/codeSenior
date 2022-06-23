const carousel = {
  className: 'carousel__list',
  loop: true,
  effect: 'cube',
  navigation: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
};

const slide = {
  className: 'carousel__item',
};

const initial = { carousel, slide };

export default initial;
