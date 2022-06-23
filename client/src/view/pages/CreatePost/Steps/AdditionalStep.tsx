import React from 'react';

import { useSelector } from 'react-redux';
import { useStepper, useToast } from 'src/view/hooks';

import { Form, Formik } from 'formik';

import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Typography from 'src/view/common/Typography';
import Flex from 'src/view/common/Flex';
import Editor from 'src/view/common/Editor';
import Notification from 'src/view/common/Notification';

import * as api from 'src/api';

export const AdditionalStep = () => {
  const { push } = useToast();
  const { user } = useSelector((s) => s) as any;

  const { data, handlePrev } = useStepper();

  return (
    <Formik
      onSubmit={async (form, { setSubmitting }) => {
        setSubmitting(true);

        const [, err] = await api.post.create({
          ...data,
          ...form,
          authorId: user.profile.id,
        });
        if (err) {
          push((id) => (
            <Notification type="error" text="Post not created" id={id} />
          ));
        } else {
          push((id) => (
            <Notification
              type="success"
              text="Post successfully created"
              id={id}
            />
          ));
        }

        setSubmitting(false);
      }}
      initialValues={{
        additional: data.additional || '',
      }}
    >
      {({ setFieldValue, values, isSubmitting }) => (
        <Form className="form--default">
          <Typography variant="h4" title="Additional" />
          <Editor
            valueHTML={values.additional}
            html={({ html, isEmpty }) =>
              setFieldValue('additional', isEmpty ? '' : html)
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
            <Button
              disabled={isSubmitting}
              type="submit"
              size="medium"
              variant="primary"
            >
              <Typography tag="span" title="Publish" />
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
