import React from 'react';
import { ILayout } from 'src/types';
import NavbarDeveloper from 'src/view/components/NavbarDeveloper';
import Footer from '../../components/Footer';

const Common: React.FC<ILayout> = ({ children, component }) => {
  return (
    <div className="page">
      <NavbarDeveloper />
      <main className="main">{component || children}</main>
      <Footer />
    </div>
  );
};

export default Common;
