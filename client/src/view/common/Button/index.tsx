import classnames from 'classnames';
import React from 'react';

interface IButton {
  size?: 'medium';
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline-primary'
    | 'outline-dark'
    | 'dark'
    | 'box'
    | 'box-fill';
  title?: string | React.ReactNode;
  className?: string;
  rounded?: boolean;
  onClick?: (_props: any) => void;
  fullWidth?: boolean;
  [key: string]: any;
}

const Button: React.FC<IButton> = ({
  children,
  variant,
  size,
  title,
  className,
  onClick,
  rounded,
  fullWidth,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={classnames(
        'btn',
        variant && `btn--${variant}`,
        size && `btn--${size}`,
        rounded && 'btn--rounded',
        fullWidth && 'w-100',
        className
      )}
    >
      {title || children}
    </button>
  );
};

export default Button;
