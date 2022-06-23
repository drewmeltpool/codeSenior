import React from 'react';
import ToastProvider from './Provider';
import './toast.scss';

export const Toast: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      {({ message }) => (
        <>
          <div className="toast">
            {message.map(({ message }, idx) => (
              <React.Fragment key={idx}>{message}</React.Fragment>
            ))}
          </div>
          <>{children}</>
        </>
      )}
    </ToastProvider>
  );
};
