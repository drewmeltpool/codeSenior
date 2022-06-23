import React from 'react';
import { Field, Form, Formik } from 'formik';
import Button from '../../../common/Button';
import Former from '../../../common/Former';
import * as yup from 'yup';
import { useStepper } from 'src/view/hooks';

const SecondStep: React.FC = () => {
  const { data, handleNext, handlePrev } = useStepper();

  const onSubmit = (props: any) =>
    handleNext((prev: any) => ({ ...prev, ...props }))();

  return (
    <Formik
      initialValues={{
        workType: data.workType || [],
        isRemote: data.isRemote || [],
        salaryFrom: data.salaryFrom || '',
        salaryTo: data.salaryTo || '',
        itExperience: data.itExperience || '',
        englishLevel: data.englishLevel || '',
      }}
      validationSchema={yup.object({
        workType: yup.array().min(1).required(),
        isRemote: yup.array().min(1).required(),
        salaryFrom: yup.string().required(),
        salaryTo: yup.string().required(),
        itExperience: yup.string().required(),
        englishLevel: yup.string().required(),
      })}
      onSubmit={(v) => onSubmit(v)}
    >
      {({ values }) => (
        <Form className="jobs-form">
          <Former.Group direction="row">
            <Former.Box>
              <Former.Title>Work type</Former.Title>
              {/* <WorkType name="workType" /> */}
              {/* <ErrorMessage name="workType" component={Former.Error} /> */}
            </Former.Box>

            <Former.Box>
              <Former.Title>Office / Remote</Former.Title>
              {/* <OfficeRemote name="isRemote" /> */}
              {/* <ErrorMessage name="isRemote" component={Former.Error} /> */}
            </Former.Box>
          </Former.Group>

          <Former.Group direction="row">
            <Former.Box>
              <Former.Title>Salary from</Former.Title>
              <Field className="form__input" name="salaryFrom" />
              {/* <ErrorMessage name="salaryFrom" component={Former.Error} /> */}
            </Former.Box>

            <Former.Box>
              <Former.Title>Salary to</Former.Title>
              <Field className="form__input" name="salaryTo" />
              {/* <ErrorMessage name="salaryTo" component={Former.Error} /> */}
            </Former.Box>
          </Former.Group>

          <Former.Group direction="row">
            <Former.Box>
              <Former.Title>Experience</Former.Title>
              {/* <Experience name="itExperience" /> */}
              {/* <ErrorMessage name="itExperience" component={Former.Error} /> */}
            </Former.Box>

            <Former.Box>
              <Former.Title>English level</Former.Title>
              {/* <EnglishLevel name="englishLevel" /> */}
              {/* <ErrorMessage name="englishLevel" component={Former.Error} /> */}
            </Former.Box>
          </Former.Group>

          <Former.Group>
            <Former.Box direction="row" className="jobs-form-navigation">
              <Button
                onClick={handlePrev({ ...data, ...values })}
                type="button"
                variant="outline-primary"
                size="medium"
                title="Prev"
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

export default SecondStep;
