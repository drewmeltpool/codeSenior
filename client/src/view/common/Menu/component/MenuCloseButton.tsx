import React from 'react';

const MenuCloseButton: React.FC<any> = ({ onClick }) => {
  return <button className="btn menu__close" onClick={onClick} />;
};

export default MenuCloseButton;
