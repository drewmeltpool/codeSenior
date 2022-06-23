import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

interface IProps {
  className?: string;
}

const FormGroup: React.FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <h4 className={classnames('form-error', className)} {...rest}>
      <Icon icon="exclamation-circle" className="form-error-icon" />
      <>{children}</>
    </h4>
  );
};

export default FormGroup;
