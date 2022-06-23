import React from 'react';

interface IHowDoesItWork {
  text: string;
  step: number | string;
}

const HowDoesItWork: React.FC<IHowDoesItWork> = ({ step, text }) => {
  return (
    <>
      <div className="work__number">{step}</div>
      <p className="work__text">{text}</p>
    </>
  );
};

export default HowDoesItWork;
