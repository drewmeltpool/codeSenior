import React from 'react';

import { useStepper } from 'src/view/hooks';

import { Form, Formik } from 'formik';
import { Input, Select, Textarea } from 'src/view/common/Form';

import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Typography from 'src/view/common/Typography';
import Flex from 'src/view/common/Flex';

export const MainStep = () => {
  const { data, handleNext } = useStepper();

  return (
    <Formik
      onSubmit={(form) => handleNext({ ...data, ...form })()}
      initialValues={{
        title: data.title || '',
        from: data.from || '',
        to: data.to || '',
        position: data.position || '',
        description: data.description || '',
      }}
    >
      <Form className="form--default">
        <Typography title="Main" variant="h4" />
        <Input name="title" variant="primary" placeholder="Title" />

        <Flex gap="24px">
          <Input
            name="from"
            type="number"
            variant="primary"
            placeholder="From"
          />
          <Input name="to" type="number" variant="primary" placeholder="To" />
          <Select
            name="position"
            placeholder="Position"
            options={[
              {
                value: 'Trainee',
                label: 'Trainee',
              },
              {
                value: 'Junior',
                label: 'Junior',
              },
              {
                value: 'Middle',
                label: 'Middle',
              },
              {
                value: 'Senior',
                label: 'Senior',
              },
              {
                value: 'CTO',
                label: 'CTO',
              },
            ]}
          />
        </Flex>
        <Textarea name="description" placeholder="Short description" />

        <Button type="submit" size="medium" variant="primary">
          <Typography tag="span" title="Next" />
          <Icon icon="angle-right" />
        </Button>
      </Form>
    </Formik>
  );
};
