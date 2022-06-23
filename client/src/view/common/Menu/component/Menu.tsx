import React, { useEffect } from 'react';

interface IMenuProps {
  isOpen: boolean;
  onClick: () => void;
  rest?: any;
}

const Menu: React.FC<IMenuProps> = ({ children, isOpen, onClick, ...rest }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('open__menu');
    } else {
      document.body.classList.remove('open__menu');
    }
  });

  return (
    <>
      <div
        className={
          isOpen ? 'menu__overlay menu__overlay--active' : 'menu__overlay'
        }
        onClick={onClick}
      ></div>
      <div
        {...rest}
        onClick={onClick}
        className={isOpen ? 'menu menu--active' : 'menu'}
      >
        {children}
      </div>
    </>
  );
};

export default Menu;
