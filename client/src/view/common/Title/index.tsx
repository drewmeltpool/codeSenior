import React from 'react';
import classNames from 'classnames';

interface ITitle {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  variant?: 'primary' | 'secondary' | 'info' | 'small' | 'medium';
  title?: string | number;
  color?: string;
  [key: string]: any;
}

const Title: React.FC<ITitle> = ({
  tag: Tag = 'h4',
  children,
  title,
  className,
  variant,
  color,
  ...rest
}) => {
  return (
    <Tag
      style={{ color: color }}
      className={classNames('title', variant && `title--${variant}`, className)}
      {...rest}
    >
      {title || children || ''}
    </Tag>
  );
};

export default Title;
