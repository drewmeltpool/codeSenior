import React from 'react';
import ProfileEditBlock from 'src/view/components/ProfileEditBlock';
import ModalEditExperience from './ModalEditExperience';
import { useModal } from 'src/view/common/Modal';
import { useSelector } from 'react-redux';
import Experience from 'src/view/components/Experience';

const ExperienceEditBlock: React.FC<any> = () => {
  const { experience } = useSelector((store: any) => store.developer);

  const [isOpen, toggle] = useModal(false);

  const handleModal = (state: boolean) => () => toggle(state);

  return (
    <ProfileEditBlock onClick={handleModal(true)}>
      <Experience data={experience} />
      <ModalEditExperience
        data={experience}
        isOpen={isOpen}
        handleClose={handleModal(false)}
      />
    </ProfileEditBlock>
  );
};
export default ExperienceEditBlock;
