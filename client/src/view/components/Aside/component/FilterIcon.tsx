import React from 'react';

const FilterIcon: React.FC<any> = ({ onClick }) => {
  return (
    <button className="btn filter__icon" onClick={onClick}>
      <div className="line"></div>
      <div className="line line--medium"></div>
      <div className="line line--short"></div>
    </button>
  );
};

export default FilterIcon;
