import React from 'react';

import classNames from 'classnames';
import { IImage } from 'src/types';

const Image: React.FC<IImage> = ({ src, className, imageClassName, alt }) => {
  const imageName = alt || src?.split('/')?.pop();

  return (
    <div className={classNames('image-wrapper', className)}>
      <img
        src={src}
        alt={imageName}
        className={classNames('image', imageClassName)}
      />
    </div>
  );
};

export default Image;
