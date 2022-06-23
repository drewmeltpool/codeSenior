import React from 'react';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import FlatList from 'src/view/common/FlatList';
import ProfileEditBlock from 'src/view/components/ProfileEditBlock';
import ModalEditLanguage from './ModalEditLanguage';
import { useModal } from 'src/view/common/Modal';

const Language: React.FC<any> = ({ data }) => {
  const [isOpen, toggle] = useModal(false);

  const handleModal = (state: boolean) => () => toggle(state);

  return (
    <ProfileEditBlock onClick={handleModal(true)}>
      <Title variant="primary">
        <Icon icon="globe" />
        <Text title="Language" tag="span" />
      </Title>
      <FlatList
        className="profile-content"
        data={data}
        component={({ language }) => (
          <Title variant="medium" title={language} />
        )}
        setKey={({ id }) => id}
      />
      <Button
        onClick={handleModal(true)}
        className="profile-btn"
        title="Edit"
        size="medium"
        variant="primary"
      />
      <ModalEditLanguage
        data={data}
        isOpen={isOpen}
        handleClose={handleModal(false)}
      />
    </ProfileEditBlock>
  );
};
export default Language;
