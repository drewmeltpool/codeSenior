import React from 'react';

import Text from 'src/view/common/Text';
import Image from 'src/view/common/Image';

import classNames from 'classnames';
import { generateHex } from 'src/utils';

interface IUserAvatar {
  size: 'sm' | 'md' | 'lg';
  image?: string;
  title?: string;
  className?: string;
}

const UserAvatar: React.FC<IUserAvatar> = ({
  title,
  image,
  size,
  className,
}) => {
  return (
    <div
      style={{ backgroundColor: title ? generateHex(title) : '' }}
      className={classNames('avatar', `avatar--${size}`, className)}
    >
      {image ? (
        <Image src={image} />
      ) : (
        <Text title={title?.substring(0, 2).toUpperCase()} />
      )}
    </div>
  );
};

export default UserAvatar;
