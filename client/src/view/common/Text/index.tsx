import classNames from 'classnames';
import React from 'react';

interface IText {
  className?: string;
  variant?: 'primary' | 'secondary';
  title?: string | React.ReactNode;
  tag?: 'p' | 'span';
  color?: string;
}

const Text: React.FC<IText> = ({
  tag: Tag = 'p',
  title,
  className,
  children,
  variant,
  color,
}) => {
  return (
    <Tag
      style={{ color }}
      className={classNames('text', variant && `text--${variant}`, className)}
    >
      {title || children || ''}
    </Tag>
  );
};

export default Text;
