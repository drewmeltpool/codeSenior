import classNames from 'classnames';
import React from 'react';

interface IBlock {
  direction?: 'column' | 'row';
}

export const Block: React.FC<IBlock> = ({ children, direction }) => {
  return (
    <div
      className={classNames(
        'profile-block',
        direction && `profile-block--${direction}`
      )}
    >
      {children}
    </div>
  );
};

export const Head: React.FC<IBlock> = ({ children, direction }) => {
  return (
    <div
      className={classNames(
        'profile-head',
        direction && `profile-head--${direction}`
      )}
    >
      {children}
    </div>
  );
};
