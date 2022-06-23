import React from 'react';
import { Input } from 'src/view/common/Form';
import { Formik, Form } from 'formik';

const FindPostForm: React.FC = () => {
  return (
    <Formik initialValues={{ search: '' }} onSubmit={console.log}>
      {({ submitForm }) => (
        <Form className="search-form">
          <Input
            name="search"
            icon="magnifying-glass"
            variant="primary"
            valid
            onChange={submitForm}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FindPostForm;
