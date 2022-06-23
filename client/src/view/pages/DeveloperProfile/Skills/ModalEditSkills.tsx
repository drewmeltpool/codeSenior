import React from 'react';
import Button from 'src/view/common/Button';
import ModalEdit, { IEditModal } from 'src/view/components/ModalEdit';
import Title from 'src/view/common/Title';
import { IKey } from 'src/types';

import { developerOperation } from 'src/redux/feature/developer';
import Collapse from 'src/view/common/Collapse';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { Input, Select } from 'src/view/common/Form';

import * as api from 'src/api';
import { useRequest } from 'src/view/hooks';
import { DevelopersSkills } from 'src/view/components/DeveloperSkills';

const ModalEditUser: React.FC<IEditModal<any>> = ({
  data,
  isOpen,
  handleClose,
}) => {
  const dispatch = useDispatch();

  const del = (id: IKey) => {
    dispatch(developerOperation.deleteTechnology(id));
  };

  const { data: technologies } = useRequest(
    () => api.technology.retrieve(),
    []
  );

  return (
    <ModalEdit
      isOpen={isOpen}
      handleClose={handleClose}
      title="Edit experience"
    >
      <DevelopersSkills size="sm" data={data} del={del} />
      <Collapse title={<Title variant="info" title="Add new" />} icon="plus">
        <Formik
          initialValues={{ technologyId: '', year: '' }}
          onSubmit={({ year, technologyId }) => {
            const { id } = technologies.find(
              ({ name }: any) => name === technologyId
            );
            console.log({ technologyId: id, year });

            dispatch(
              developerOperation.createTechnology({ technologyId: id, year })
            );
          }}
        >
          <Form className="form--default">
            <Select
              defaultValue={data.map(({ name, id }: any) => ({
                value: id,
                label: name,
              }))}
              name="technologyId"
              options={
                technologies?.map(({ name }: any) => ({
                  value: name,
                  label: name,
                })) || []
              }
            />
            <Input
              icon="clock"
              placeholder="Year"
              variant="primary"
              name="year"
            />
            <Button type="submit" title="Create" variant="primary" />
          </Form>
        </Formik>
      </Collapse>
      <Button onClick={handleClose} title="Close" variant="outline-primary" />
    </ModalEdit>
  );
};

export default ModalEditUser;
