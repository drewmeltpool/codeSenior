import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import UserEditBlock from './UserEditBlock';

const DeveloperProfile: React.FC = () => {
  return (
    <div className="content">
      <div className="profile">
        <UserEditBlock />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
};
export default DeveloperProfile;
