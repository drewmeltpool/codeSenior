import React from 'react';

import ProfileEditBlock from 'src/view/components/ProfileEditBlock';
import { useSelector } from 'react-redux';
import { useModal } from 'src/view/common/Modal';
import Skills from 'src/view/components/Skills';
import ModalEditSkills from './ModalEditSkills';

const SkillsBlock: React.FC<any> = () => {
  const { technology } = useSelector((store: any) => store.developer);

  const [isOpen, toggle] = useModal(false);

  const handleModal = (state: boolean) => () => toggle(state);

  return (
    <ProfileEditBlock onClick={handleModal(true)}>
      <Skills data={technology} />
      <ModalEditSkills
        data={technology}
        isOpen={isOpen}
        handleClose={handleModal(false)}
      />
    </ProfileEditBlock>
  );
};
export default SkillsBlock;
