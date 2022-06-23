import React from 'react';
import classnames from 'classnames';

interface IProps {
  className?: string;
  direction?: 'row' | 'column';
}

const FormGroup: React.FC<IProps> = ({
  children,
  className,
  direction,
  ...rest
}) => {
  return (
    <div
      className={classnames(
        'form-group',
        className,
        direction && `form-group--${direction}`
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

FormGroup.defaultProps = {
  direction: 'column',
};

export default FormGroup;
