import React from 'react';
import classnames from 'classnames';
import { IContainer } from 'src/types';

const Container: React.FC<IContainer> = ({
  children,
  className,
  size = 'lg',
}) => {
  return (
    <div className={classnames('container', size, className)}>{children}</div>
  );
};

export default Container;
