import classnames from 'classnames';
import React from 'react';

interface ITabber {
  className?: string;
}

const Tabber: React.FC<ITabber> = ({ children, className }) => {
  return <div className={classnames('tabber', className)}>{children}</div>;
};

export default Tabber;
