import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import classnames from 'classnames';

interface IProps {
  fill?: 'dark' | 'success' | 'danger';
  className?: string;
}

library.add(fas, far, fab);

const Icon: React.FC<IProps & FontAwesomeIconProps> = ({
  icon,
  className,
  fill,
  ...rest
}) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={classnames('icon', className, fill && `fill--${fill}`)}
      {...rest}
    />
  );
};

export default Icon;
