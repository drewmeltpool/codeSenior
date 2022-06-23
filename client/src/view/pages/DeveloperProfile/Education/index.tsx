import React from 'react';
import ProfileEditBlock from 'src/view/components/ProfileEditBlock';
import ModalEditEducation from './ModalEditEducation';
import { useModal } from 'src/view/common/Modal';
import { useSelector } from 'react-redux';
import Education from 'src/view/components/Education';

const EducationEditBlock: React.FC<any> = () => {
  const { education } = useSelector((store: any) => store.developer);
  const [isOpen, toggle] = useModal(false);

  const handleModal = (state: boolean) => () => toggle(state);

  return (
    <ProfileEditBlock onClick={handleModal(true)}>
      <Education data={education} />
      <ModalEditEducation
        data={education}
        isOpen={isOpen}
        handleClose={handleModal(false)}
      />
    </ProfileEditBlock>
  );
};
export default EducationEditBlock;
