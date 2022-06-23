import React from 'react';
import classnames from 'classnames';

interface IProps {
  className?: string;
  direction?: 'row' | 'column';
}

const FormBox: React.FC<IProps> = ({
  children,
  className,
  direction,
  ...rest
}) => {
  return (
    <div
      className={classnames(
        'form-box',
        className,
        direction && `form-box--${direction}`
      )}
      {...rest}
    >
      <>{children}</>
    </div>
  );
};

FormBox.defaultProps = {
  direction: 'column',
};

export default FormBox;
