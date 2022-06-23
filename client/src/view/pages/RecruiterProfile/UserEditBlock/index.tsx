import React from 'react';
import { useSelector } from 'react-redux';
import { useModal } from 'src/view/common/Modal';
import ProfileEditBlock from 'src/view/components/ProfileEditBlock';
import User from 'src/view/components/User';
import ModalEditUser from './ModalEditUser';

const UserEditBlock: React.FC = () => {
  const { user } = useSelector((s) => s) as any;

  const [isOpen, setIsOpen] = useModal(false);

  const handleToggle = (state: boolean) => () => setIsOpen(state);

  return (
    <ProfileEditBlock onClick={handleToggle(true)}>
      <User data={user} />
      <ModalEditUser
        data={user}
        isOpen={isOpen}
        handleClose={handleToggle(false)}
      />
    </ProfileEditBlock>
  );
};

export default UserEditBlock;
