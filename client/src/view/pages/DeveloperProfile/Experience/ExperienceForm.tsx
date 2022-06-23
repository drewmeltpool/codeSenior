import { Form, Formik } from 'formik';
import React from 'react';
import { Input, Textarea } from 'src/view/common/Form';
import Flex from 'src/view/common/Flex';
import Button from 'src/view/common/Button';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import { inputFormatDate } from 'src/utils';

const ExperienceForm: React.FC<any> = ({ data, onSubmit }) => {
  return (
    <Formik
      initialValues={{
        title: data.title,
        position: data.position,
        description: data.description,
        start: inputFormatDate(data.start),
        end: inputFormatDate(data.end),
      }}
      onSubmit={onSubmit}
    >
      <Form className="form--default experience-form-box">
        <Input placeholder="Title" variant="primary" name="title" />
        <Flex gap="12px" wrap="wrap">
          <Input
            placeholder="Start date"
            variant="primary"
            type="date"
            name="start"
          />
          <Input
            placeholder="End date"
            variant="primary"
            type="date"
            name="end"
          />
        </Flex>
        <Input placeholder="Position" variant="primary" name="position" />
        <Textarea placeholder="About project" name="description" />
        <Button variant="primary" type="submit">
          <Text title="Save" tag="span" />
          <Icon icon="angle-right" />
        </Button>
      </Form>
    </Formik>
  );
};

export default ExperienceForm;
