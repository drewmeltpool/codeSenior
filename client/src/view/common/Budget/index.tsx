import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

interface IBudget {
  variant: string;
  title?: React.ReactNode;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  hovered?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const StyledBudget = styled.div<{
  variant: string;
}>`
  background-color: ${(props) => `#${props.variant.substring(1)}22`};
  color: ${(props) => props.variant};
`;

const Budget: React.FC<IBudget> = ({
  variant,
  rounded,
  className,
  children,
  title,
  size,
  onClick,
  hovered,
  active,
}) => {
  return (
    <StyledBudget
      onClick={onClick}
      className={classNames(
        'budget',
        rounded && 'budget--rounded',
        hovered && 'budget--hovered',
        active && 'budget--active',
        size && `budget--${size}`,
        className
      )}
      variant={variant}
    >
      {title || children}
    </StyledBudget>
  );
};

export default Budget;
