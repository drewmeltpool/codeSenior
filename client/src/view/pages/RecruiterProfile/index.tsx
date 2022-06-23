import React from 'react';
import CompanyEditBlock from './CompanyEditBlock';
import UserEditBlock from './UserEditBlock';

const RecruiterProfile: React.FC = () => {
  return (
    <div className="profile">
      <UserEditBlock />
      <CompanyEditBlock />
    </div>
  );
};
export default RecruiterProfile;
