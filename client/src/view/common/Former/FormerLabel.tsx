import React from 'react';
import classnames from 'classnames';

interface IProps {
  className?: string;
}

const FormLabel: React.FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <label className={classnames('form-label', className)} {...rest}>
      {children}
    </label>
  );
};

export default FormLabel;
