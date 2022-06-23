import React from 'react';
import { ILayout } from 'src/types';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavbarCommon';

const Common: React.FC<ILayout> = ({ children, component }) => {
  return (
    <div className="page">
      <NavBar />
      <main className="main">{component || children}</main>
      <Footer />
    </div>
  );
};

export default Common;
