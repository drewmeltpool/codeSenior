import React from 'react';
import { typographyVariant } from './variants';

import cn from 'classnames';

interface ITypography {
  variant?: keyof typeof typographyVariant;
  className?: string;
  tag?: 'span';
  title?: string | React.ReactNode;
  color?: string;
}

const Typography: React.FC<ITypography> = ({
  tag,
  variant,
  className,
  title,
  children,
  color,
}) => {
  const Tag = (tag || (variant && typographyVariant[variant]) || 'p') as any;

  return (
    <Tag style={{ color }} className={cn('typography', variant, className)}>
      {title ?? children}
    </Tag>
  );
};

export default Typography;
