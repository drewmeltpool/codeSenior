import React from 'react';
import classnames from 'classnames';
import { IMain } from 'src/types';

const Main: React.FC<IMain> = ({ children, className }) => {
  return <main className={classnames('main', className)}>{children}</main>;
};

export default Main;
