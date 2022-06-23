import React from 'react';

export interface IModal {
  size?: 's' | 'm' | 'l';
  isOpen: boolean;
  isCloseOnOverlay?: boolean;
  closeModal: () => void;
  children: (_props: any) => React.ReactNode;
}
