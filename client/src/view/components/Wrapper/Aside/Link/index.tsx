import React from 'react';
import { Link } from 'react-router-dom';

interface ILink {
  to: string;
}

export const Ref: React.FC<ILink> = ({ children, to }) => {
  return (
    <Link className="aside-link" to={to}>
      <>{children}</>
    </Link>
  );
};
