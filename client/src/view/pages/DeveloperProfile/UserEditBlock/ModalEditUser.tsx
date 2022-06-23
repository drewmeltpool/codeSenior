import { Form, Formik } from 'formik';
import React from 'react';
import { Input, Textarea } from 'src/view/common/Form';
import Flex from 'src/view/common/Flex';
import Button from 'src/view/common/Button';
import ModalEdit, { IEditModal } from 'src/view/components/ModalEdit';
import { useDispatch } from 'react-redux';
import { userOperation } from 'src/redux/feature/user';

const ModalEditUser: React.FC<IEditModal<any>> = ({
  data,
  isOpen,
  handleClose,
}) => {
  const dispatch = useDispatch();

  return (
    <ModalEdit isOpen={isOpen} handleClose={handleClose} title="Edit user">
      <Formik
        initialValues={{
          city: data.city || '',
          firstName: data.firstName,
          lastName: data.lastName,
          title: data.title,
          shortDescription: data.shortDescription,
          image: data.image || '',
        }}
        onSubmit={async (form) => {
          dispatch(userOperation.updateUser(form));
          handleClose();
        }}
      >
        <Form className="form--default">
          <Flex gap="25px" direction="column">
            <Input variant="primary" name="image" placeholder="Image" />
            <Flex gap="24px">
              <Input
                placeholder="First name"
                variant="primary"
                name="firstName"
              />
              <Input
                placeholder="Last name"
                variant="primary"
                name="lastName"
              />
            </Flex>
            <Input variant="primary" name="city" placeholder="City" />
            <Input placeholder="Position" variant="primary" name="title" />
            <Textarea placeholder="About" name="shortDescription" />
          </Flex>
          <Flex gap="24px">
            <Button variant="primary" type="submit" title="Save" />
            <Button
              onClick={handleClose}
              variant="outline-primary"
              type="button"
              title="Close"
            />
          </Flex>
        </Form>
      </Formik>
    </ModalEdit>
  );
};

export default ModalEditUser;
