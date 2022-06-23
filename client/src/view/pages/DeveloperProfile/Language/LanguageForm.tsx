import { Form, Formik } from 'formik';
import React from 'react';
import { Input } from 'src/view/common/Form';
import Button from 'src/view/common/Button';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import Flex from 'src/view/common/Flex';

const LanguageForm: React.FC<any> = ({ data, onSubmit }) => {
  return (
    <Formik initialValues={{ language: data.language }} onSubmit={onSubmit}>
      <Form className="form--default experience-form-box">
        <Flex gap="24px" alignItems="center">
          <Input placeholder="Language" variant="primary" name="language" />
          <Button variant="primary" type="submit">
            <Text title="Save" tag="span" />
            <Icon icon="angle-right" />
          </Button>
        </Flex>
      </Form>
    </Formik>
  );
};

export default LanguageForm;
