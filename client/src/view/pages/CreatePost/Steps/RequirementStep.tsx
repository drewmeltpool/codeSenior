import React from 'react';

import { useStepper } from 'src/view/hooks';

import { Form, Formik } from 'formik';

import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Typography from 'src/view/common/Typography';
import Flex from 'src/view/common/Flex';
import Editor from 'src/view/common/Editor';

export const RequirementStep = () => {
  const { data, handleNext, handlePrev } = useStepper();

  return (
    <Formik
      onSubmit={(form) => handleNext({ ...data, ...form })()}
      initialValues={{
        requirement: data.requirement || '',
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="form--default">
          <Typography variant="h4" title="Requirement" />
          <Editor
            valueHTML={values.requirement}
            html={({ html, isEmpty }) =>
              setFieldValue('requirement', isEmpty ? '' : html)
            }
          />
          <Flex gap="16px" justify="space-between">
            <Button
              onClick={handlePrev({ ...data, ...values })}
              size="medium"
              variant="outline-primary"
            >
              <Icon icon="angle-left" />
              <Typography tag="span" title="Prev" />
            </Button>
            <Button type="submit" size="medium" variant="primary">
              <Typography tag="span" title="Next" />
              <Icon icon="angle-right" />
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
