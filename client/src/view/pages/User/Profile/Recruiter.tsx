import React from 'react';
import CompanyBlock from 'src/view/components/CompanyBlock';

const Recruiter: React.FC<any> = ({ profile }) => {
  return (
    <>
      <CompanyBlock
        companyName={profile.companyName}
        aboutCompany={profile.aboutCompany}
        companyImage={profile.companyImage}
        companyWebsite={profile.companyWebsite}
      />
    </>
  );
};

export default Recruiter;
