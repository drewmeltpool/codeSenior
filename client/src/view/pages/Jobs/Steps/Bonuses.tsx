import { Form, Formik } from 'formik';
import React from 'react';
import Button from '../../../common/Button';
import Former from '../../../common/Former';
import Editor from '../../../common/Editor';
import * as yup from 'yup';
import { useStepper } from 'src/view/hooks';

const Bonuses: React.FC = () => {
  const { handlePrev, data, setData } = useStepper();

  const onSubmit = (props: any) => {
    setData((prev: any) => ({ ...prev, ...props }));
    alert(JSON.stringify({ ...data, ...props }, null, 2));
  };

  return (
    <Formik
      initialValues={{
        requirement: data.requirement || '',
        bonuses: data.bonuses || '',
      }}
      validationSchema={yup.object({
        requirement: yup.string(),
        bonuses: yup.string(),
      })}
      onSubmit={(v) => onSubmit(v)}
    >
      {({ setFieldValue, values }) => (
        <Form className="jobs-form">
          <Former.Group>
            <Former.Box>
              <Former.Title>Requirement</Former.Title>
              <Editor
                valueHTML={values.requirement}
                html={({ html, isEmpty }: any) =>
                  setFieldValue('requirement', isEmpty ? '' : html)
                }
              />
              <Former.Input hidden name="requirement" />
              {/* <ErrorMessage name="requirement" component={Former.Error} /> */}
            </Former.Box>
          </Former.Group>

          <Former.Group>
            <Former.Box>
              <Former.Title>Bonuses</Former.Title>
              <Editor
                valueHTML={values.bonuses}
                html={({ html, isEmpty }: any) =>
                  setFieldValue('bonuses', isEmpty ? '' : html)
                }
              />
              <Former.Input hidden name="bonuses" />
              {/* <ErrorMessage name="bonuses" component={Former.Error} /> */}
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
                title="Finish"
              />
            </Former.Box>
          </Former.Group>
        </Form>
      )}
    </Formik>
  );
};

export default Bonuses;
