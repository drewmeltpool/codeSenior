import React from 'react';
import { IBurger } from 'src/types';
import Button from 'src/view/common/Button';

const Burger: React.FC<IBurger> = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="burger">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </Button>
  );
};

export default Burger;
