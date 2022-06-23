import React from 'react';

interface ISpinner {
  color?: string;
  className?: string;
}

const Spinner: React.FC<ISpinner> = ({ color, className }) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className={className}>
      <div className="lds-ellipsis">
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
      </div>
    </div>
  );
};

export default Spinner;
