import React from 'react';

import { Navbar, NavLink, NavbarBox } from 'src/view/common/NavBar';
import Logo from '../Logo';
import NavBarMenu from 'src/view/common/NavBar/NavbarMenu';
import { Link } from 'react-router-dom';
import Avatar from 'src/view/common/Avatar';
import { useSelector } from 'react-redux';

const NavbarRecruiter: React.FC = () => {
  const { user } = useSelector((s) => s) as any;

  return (
    <Navbar>
      <Logo />

      <NavbarBox>
        <NavLink to="/create-post" title="Create" />
        <NavLink to="/post" title="Post" />
        <NavLink to="/developers" title="Developers" />
        <Link to="/profile">
          <Avatar image={user.image} title={user.firstName} size="sm" />
        </Link>
      </NavbarBox>

      <NavBarMenu></NavBarMenu>
    </Navbar>
  );
};

export default NavbarRecruiter;
