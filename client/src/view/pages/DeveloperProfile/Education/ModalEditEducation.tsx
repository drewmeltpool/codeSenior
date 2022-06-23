import React from 'react';
import Flex from 'src/view/common/Flex';
import Button from 'src/view/common/Button';
import ModalEdit, { IEditModal } from 'src/view/components/ModalEdit';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import ExperienceForm from './EducationForm';
import Accordion from 'src/view/common/Accordion';
import { useConfirm } from 'src/view/hooks';
import { IKey } from 'src/types';

import { developerOperation } from 'src/redux/feature/developer';
import Collapse from 'src/view/common/Collapse';
import { useDispatch } from 'react-redux';
import { sortByDate } from 'src/utils';

const ModalEditUser: React.FC<IEditModal<any>> = ({
  data,
  isOpen,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const { handleOpen } = useConfirm();

  const del = (id: IKey) =>
    handleOpen('You will delete with item. Are you sure?', () => {
      dispatch(developerOperation.deleteEducation(id));
    });

  return (
    <ModalEdit
      isOpen={isOpen}
      handleClose={handleClose}
      title="Edit experience"
    >
      <Accordion
        onlyOne
        data={sortByDate(data)}
        component={(data) => (
          <ExperienceForm
            data={data}
            onSubmit={(form: any) => {
              dispatch(developerOperation.updateEducation(data.id, form));
            }}
          />
        )}
        title={({ title, position }) => (
          <Flex direction="column">
            <Title variant="info" title={title} />
            <Text variant="secondary" title={position} />
          </Flex>
        )}
        helpers={({ id }) => (
          <Button
            variant="box"
            title={<Icon icon="trash" />}
            onClick={() => del(id)}
          />
        )}
        setKey={({ id }) => id}
      />
      <Collapse title={<Title variant="info" title="Add new" />} icon="plus">
        <ExperienceForm
          data={{
            title: '',
            position: '',
            description: '',
            start: '',
            end: '',
          }}
          onSubmit={(form: any) => {
            dispatch(developerOperation.createEducation(form));
          }}
        />
      </Collapse>
      <Button onClick={handleClose} title="Close" variant="outline-primary" />
    </ModalEdit>
  );
};

export default ModalEditUser;
