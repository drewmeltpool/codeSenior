import React from 'react';
import { useSelector } from 'react-redux';
import { useModal } from 'src/view/common/Modal';
import CompanyBlock from 'src/view/components/CompanyBlock';
import ProfileEditBlock from 'src/view/components/ProfileEditBlock';
import ModalEditCompany from './ModalEditCompany';

const CompanyEditBlock: React.FC = () => {
  const { recruiter } = useSelector((s) => s) as any;

  const [isOpen, setIsOpen] = useModal(false);

  const handleToggle = (state: boolean) => () => setIsOpen(state);

  return (
    <ProfileEditBlock onClick={handleToggle(true)}>
      <CompanyBlock
        companyName={recruiter.companyName}
        aboutCompany={recruiter.aboutCompany}
        companyImage={recruiter.companyImage}
        companyWebsite={recruiter.companyWebsite}
      />
      <ModalEditCompany
        data={recruiter}
        isOpen={isOpen}
        handleClose={handleToggle(false)}
      />
    </ProfileEditBlock>
  );
};

export default CompanyEditBlock;
