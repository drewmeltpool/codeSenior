import React from 'react';

interface ILoader {
  flag: boolean;
  spinner: React.ReactNode;
}

const Loader: React.FC<ILoader> = ({ flag, spinner, children }) => {
  if (flag) {
    document.body.classList.add('loader-overflow');
  } else {
    document.body.classList.remove('loader-overflow');
  }

  return flag ? <div className="loader">{spinner}</div> : <>{children}</>;
};

export default Loader;
