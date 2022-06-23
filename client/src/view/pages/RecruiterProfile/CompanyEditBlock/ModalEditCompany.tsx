import { Form, Formik } from 'formik';
import React from 'react';
import { Input, Textarea } from 'src/view/common/Form';
import Button from 'src/view/common/Button';
import ModalEdit, { IEditModal } from 'src/view/components/ModalEdit';
import { recruiterOperation } from 'src/redux/feature/recruiter';
import { useDispatch } from 'react-redux';

const ModalEditCompany: React.FC<IEditModal<any>> = ({
  data,
  isOpen,
  handleClose,
}) => {
  const dispatch = useDispatch();

  return (
    <ModalEdit isOpen={isOpen} handleClose={handleClose} title="Update company">
      <Formik
        initialValues={{
          companyName: data.companyName,
          aboutCompany: data.aboutCompany,
          companyImage: data.companyImage,
          companyWebsite: data.companyWebsite,
        }}
        onSubmit={(form) => {
          dispatch(recruiterOperation.updateRecruiter(form));
          handleClose();
        }}
      >
        <Form className="form--default">
          <Input placeholder="Image" name="companyImage" variant="primary" />
          <Input placeholder="Name" variant="primary" name="companyName" />
          <Input
            placeholder="Website"
            variant="primary"
            name="companyWebsite"
          />
          <Textarea placeholder="About" name="aboutCompany" />
          <Button variant="primary" type="submit" title="Save" />
        </Form>
      </Formik>
    </ModalEdit>
  );
};

export default ModalEditCompany;
