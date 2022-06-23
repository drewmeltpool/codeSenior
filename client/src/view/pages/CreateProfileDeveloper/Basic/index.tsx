import { Form, Formik } from 'formik';
import React from 'react';
import { Input } from 'src/view/common/Form';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import { useStepper } from 'src/view/hooks';
import Flex from 'src/view/common/Flex';

import * as api from 'src/api';
import { useSelector } from 'react-redux';

const BasicForm: React.FC = () => {
  const { data, handlePrev, handleNext } = useStepper();
  const { id } = useSelector((s: any) => s.developer) as any;

  return (
    <Formik
      onSubmit={async (form) => {
        await api.developer.update(id, { salary: form.salary });
        handleNext({ ...data, ...form })();
      }}
      initialValues={{
        salary: data.salary || '',
        city: data.city || '',
      }}
    >
      {({ values }) => (
        <Form className="form">
          <Title title="English" variant="secondary" />

          <Input
            icon="coins"
            placeholder="Salary"
            variant="primary"
            name="salary"
          />
          <Input icon="city" placeholder="City" variant="primary" name="city" />

          <Flex gap="35px">
            <Button
              type="button"
              size="medium"
              variant="outline-primary"
              onClick={handlePrev({ ...data, ...values })}
            >
              <Icon icon="angle-left" />
              <Text tag="span" title="Prev" />
            </Button>
            <Button type="submit" size="medium" variant="primary">
              <Text tag="span" title="Next" />
              <Icon icon="angle-right" />
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default BasicForm;
