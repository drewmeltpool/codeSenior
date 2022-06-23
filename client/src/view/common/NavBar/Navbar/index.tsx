import React from 'react';
import { Container } from 'src/view/components/Wrapper';
import { IContainer } from 'src/types';

interface INavbar {
  size?: IContainer['size'];
}

const NavBar: React.FC<INavbar> = ({ children, size }) => (
  <header className="navbar">
    <Container size={size}>
      <nav className="navbar__inner">{children}</nav>
    </Container>
  </header>
);

export default NavBar;
