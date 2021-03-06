import React from 'react';

interface IHexagon {
  id: string;
}

const HexagonSvg: React.FC<IHexagon> = ({ id }) => {
  return (
    <svg id={id} viewBox="0 0 120 100">
      <path
        d="M38,2 
              L82,2 
              A12,12 0 0,1 94,10 
              L112,44 
              A12,12 0 0,1 112,56
              L94,90       
              A12,12 0 0,1 82,98
              L38,98
              A12,12 0 0,1 26,90
              L8,56
              A12,12 0 0,1 8,44
              L26,10
              A12,12 0 0,1 38,2"
      />
    </svg>
  );
};

export default HexagonSvg;
