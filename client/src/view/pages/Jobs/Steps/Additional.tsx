import { Form, Formik } from 'formik';
import React from 'react';
import Button from 'src/view/common/Button';
import Former from 'src/view/common/Former';
import Editor from 'src/view/common/Editor';
import * as yup from 'yup';
import { useStepper } from 'src/view/hooks';

const Additional: React.FC = () => {
  const { data, handleNext, handlePrev } = useStepper();

  const onSubmit = (props: any) =>
    handleNext((prev: any) => ({ ...prev, ...props }))();

  return (
    <Formik
      initialValues={{
        additional: data.additional || '',
        project: data.project || '',
      }}
      validationSchema={yup.object({
        additional: yup.string(),
        project: yup.string(),
      })}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="jobs-form">
          <Former.Group direction="column">
            <Former.Box direction="column">
              <Former.Title>Project</Former.Title>
              <Editor
                valueHTML={values.project}
                html={({ html, isEmpty }: any) => {
                  setFieldValue('project', isEmpty ? '' : html);
                }}
              />
              <Former.Input hidden name="project" />
              {/* <ErrorMessage name="project" component={Former.Error} /> */}
            </Former.Box>
          </Former.Group>

          <Former.Group direction="column">
            <Former.Box direction="column">
              <Former.Title>Additional</Former.Title>
              <Editor
                valueHTML={values.additional}
                html={({ html, isEmpty }: any) => {
                  setFieldValue('additional', isEmpty ? '' : html);
                }}
              />
              <Former.Input hidden name="additional" />
              {/* <ErrorMessage name="additional" component={Former.Error} /> */}
            </Former.Box>
          </Former.Group>

          <Former.Group>
            <Former.Box direction="row" className="jobs-form-navigation">
              <Button
                type="button"
                variant="outline-primary"
                size="medium"
                title="Prev"
                onClick={handlePrev({ ...data, ...values })}
              />
              <Button
                type="submit"
                variant="primary"
                size="medium"
                title="Next"
              />
            </Former.Box>
          </Former.Group>
        </Form>
      )}
    </Formik>
  );
};

export default Additional;
