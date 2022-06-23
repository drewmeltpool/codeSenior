import React from 'react';
import Button from 'src/view/common/Button';
import ModalEdit, { IEditModal } from 'src/view/components/ModalEdit';
import Title from 'src/view/common/Title';
import Icon from 'src/view/common/Icon';
import LanguageForm from './LanguageForm';
import Accordion from 'src/view/common/Accordion';
import { useConfirm } from 'src/view/hooks';
import { IKey } from 'src/types';

import * as api from 'src/api';
import Collapse from 'src/view/common/Collapse';

const ModalEditLanguage: React.FC<IEditModal<any>> = ({
  data,
  isOpen,
  handleClose,
}) => {
  const { handleOpen } = useConfirm();

  const del = (devId: IKey, id: IKey) =>
    handleOpen('You will delete with item. Are you sure?', () =>
      api.developer.language.del(devId, id)
    );

  return (
    <ModalEdit isOpen={isOpen} handleClose={handleClose} title="Edit language">
      <Accordion
        onlyOne
        data={data}
        component={(data) => (
          <LanguageForm
            data={data}
            onSubmit={(form: any) => {
              api.developer.language.update(data.developerId, data.id, form);
            }}
          />
        )}
        title={({ language }) => <Title variant="info" title={language} />}
        helpers={({ developerId, id }) => (
          <Button
            variant="box"
            title={<Icon icon="trash" />}
            onClick={() => del(developerId, id)}
          />
        )}
        setKey={({ id }) => id}
      />
      <Collapse title={<Title variant="info" title="Add new" />} icon="plus">
        <LanguageForm
          data={{ language: '' }}
          onSubmit={() => {
            // api.developer.language.create(developerId, form);
          }}
        />
      </Collapse>
      <Button onClick={handleClose} title="Close" variant="outline-primary" />
    </ModalEdit>
  );
};

export default ModalEditLanguage;
