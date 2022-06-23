import React from 'react';

import Button from 'src/view/common/Button';
import Section from 'src/view/common/Section';
import { Carousel } from 'src/view/common/Carousel';

import Image from 'src/view/common/Image';
import initial from 'src/view/common/Carousel/config/initial';

import partnersImage from 'src/data/partnersImage';

const Partners: React.FC = () => {
  return (
    <Section
      title="Partners"
      className="section section--center"
      description="Found developers via our platform"
    >
      <Carousel
        carouselConfig={initial.carousel}
        slideConfig={initial.slide}
        data={partnersImage}
        item={(url) => (
          <Image
            src={url}
            className="logo__image-wrapper"
            imageClassName="logo__image"
          />
        )}
      />
      <Button
        title="BECOME A PARTNER"
        variant="primary"
        className="section__btn"
      />
    </Section>
  );
};

export default Partners;
