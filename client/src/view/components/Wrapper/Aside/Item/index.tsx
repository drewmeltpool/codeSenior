import React from 'react';
import Budget from 'src/view/common/Budget';

interface IItem {
  variant?: string;
}

export const Item: React.FC<IItem> = ({ children, variant }) => {
  return (
    <Budget variant={variant || '#333'} className="aside-item">
      {children}
    </Budget>
  );
};
