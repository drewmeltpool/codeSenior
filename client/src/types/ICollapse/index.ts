import React from 'react';

export interface ICollapse {
  onClick?: (_state: boolean) => void;
  visible?: boolean;
  icon?: any;
  title: string | React.ReactNode;
  className?: string;
  helpers?: React.ReactNode | string;
}
