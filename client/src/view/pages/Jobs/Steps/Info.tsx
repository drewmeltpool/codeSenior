import React from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../common/Button';
import Former from '../../../common/Former';
import * as yup from 'yup';
import { useStepper } from 'src/view/hooks';

const MainInfo: React.FC = () => {
  const { handleNext, data } = useStepper();

  const onSubmit = (props: any) =>
    handleNext((prev: any) => ({ ...prev, ...props }));

  return (
    <Formik
      initialValues={{
        position: data.position || [],
        skills: data.skills || [],
        level: data.level || [],
        city: data.city || [],
      }}
      validationSchema={yup.object({
        level: yup.array().min(1).required(),
        position: yup.array().min(1).required(),
        skills: yup.array().min(1).required(),
        city: yup.array().min(1).required(),
      })}
      onSubmit={(v) => onSubmit(v)()}
    >
      <Form className="jobs-form">
        <Former.Group direction="row">
          <Former.Box>
            <Former.Title>Level</Former.Title>
            {/* <LevelSelect name="level" /> */}
            {/* <ErrorMessage name="level" component={Former.Error} /> */}
          </Former.Box>

          <Former.Box>
            <Former.Title>Position</Former.Title>
            {/* <PositionSelect name="position" /> */}
            {/* <ErrorMessage name="position" component={Former.Error} /> */}
          </Former.Box>
        </Former.Group>

        <Former.Group>
          <Former.Box>
            <Former.Title>Skills</Former.Title>
            {/* <SkillsSelect name="skills" /> */}
            {/* <ErrorMessage name="skills" component={Former.Error} /> */}
          </Former.Box>
        </Former.Group>

        <Former.Group>
          <Former.Box>
            <Former.Title>City</Former.Title>
            {/* <CitySelect name="city" /> */}
            {/* <ErrorMessage name="city" component={Former.Error} /> */}
          </Former.Box>
        </Former.Group>

        <Former.Group>
          <Former.Box direction="row">
            <Button
              type="submit"
              variant="primary"
              size="medium"
              title="Next"
            />
          </Former.Box>
        </Former.Group>
      </Form>
    </Formik>
  );
};

export default MainInfo;
