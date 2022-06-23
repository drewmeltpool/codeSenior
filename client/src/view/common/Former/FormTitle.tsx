import React from 'react';
import classnames from 'classnames';

interface IProps {
  className?: string;
}

const FormTitle: React.FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <h4 className={classnames('form-title', className)} {...rest}>
      {children}
    </h4>
  );
};

export default FormTitle;
