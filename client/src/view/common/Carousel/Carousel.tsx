import React, { useMemo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Thumbs,
  Controller,
} from 'swiper';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay, Controller]);

interface ICarousel {
  data: Array<any>;
  item: (_props: any) => React.ReactElement;
  slideConfig: object;
  carouselConfig: object;
}

const Carousel: React.FC<ICarousel> = ({
  data,
  item,
  slideConfig,
  carouselConfig,
}: ICarousel) => {
  const slides = useMemo(
    () =>
      data.map((props, key: number) => (
        <SwiperSlide {...slideConfig} key={key}>
          {item(props)}
        </SwiperSlide>
      )),
    [data, item, slideConfig]
  );

  return <Swiper {...carouselConfig}>{slides}</Swiper>;
};

export default Carousel;
