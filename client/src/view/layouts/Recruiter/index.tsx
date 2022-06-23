import React from 'react';
import { ILayout } from 'src/types';
import Footer from '../../components/Footer';
import RecruiterNavBar from '../../components/NavbarRecruiter';

const Recruiter: React.FC<ILayout> = ({ children, component }) => {
  return (
    <div className="page">
      <RecruiterNavBar />
      <main className="main">{component || children}</main>
      <Footer />
    </div>
  );
};

export default Recruiter;
