import { Form, Formik } from 'formik';
import React from 'react';
import { Input } from 'src/view/common/Form';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import { useStepper } from 'src/view/hooks';

const Meeting: React.FC = () => {
  const { data, handleNext } = useStepper();

  return (
    <Formik
      onSubmit={(form) => handleNext({ ...data, ...form })()}
      initialValues={{
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        image: data.image || '',
      }}
    >
      <Form className="form">
        <Title title="Meeting" variant="secondary" />
        <Input
          icon="image"
          placeholder="Image"
          variant="primary"
          name="image"
        />
        <Input
          icon="user"
          placeholder="First name"
          variant="primary"
          name="firstName"
        />
        <Input
          icon="user"
          placeholder="Last name"
          variant="primary"
          name="lastName"
        />
        <Button type="submit" size="medium" variant="primary">
          <Text tag="span" title="Next" />
          <Icon icon="angle-right" />
        </Button>
      </Form>
    </Formik>
  );
};

export default Meeting;
