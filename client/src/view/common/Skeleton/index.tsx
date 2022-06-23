import React from 'react';

const Skeleton = ({ children }: any) => {
  return <div className="skeleton">{children}</div>;
};

const Avatar = () => {
  return <div className="skeleton-avatar" />;
};

const Line = () => {
  return <div className="skeleton-line" />;
};

Skeleton.Line = Line;
Skeleton.Avatar = Avatar;

export { Skeleton };
