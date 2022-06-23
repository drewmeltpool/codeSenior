import React from 'react';
import { IFeature } from 'src/types';
import Image from '../../../../common/Image';

const Feature: React.FC<IFeature> = ({ image, title, description }) => {
  return (
    <>
      <Image
        src={image}
        className="feature__image-wrapper"
        imageClassName="feature__image"
      />
      <h4 className="feature__title">{title}</h4>
      <p className="feature__description">{description}</p>
    </>
  );
};

export default Feature;
