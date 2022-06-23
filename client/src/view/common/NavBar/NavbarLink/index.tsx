import React from 'react';
import { NavLink } from 'react-router-dom';

interface INavbarLink {
  to: string;
  title?: string | React.ReactNode;
}

const NavbarLink: React.FC<INavbarLink> = ({ to, title, children }) => {
  const newLocal = title || (children as any);
  return (
    <NavLink
      to={to}
      className="navbar-link"
      activeClassName="navbar-link--active"
    >
      {newLocal}
    </NavLink>
  );
};

export default NavbarLink;
