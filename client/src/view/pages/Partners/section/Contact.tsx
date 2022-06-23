import React from 'react';
import Section from '../../../common/Section';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Former from '../../../common/Former';
import Button from '../../../common/Button';

const Contact: React.FC = () => {
  const handleSubmit = (data: any, { resetForm }: any) => {
    resetForm();
  };

  return (
    <Section
      split={false}
      title="Need developers right now?"
      description="You can hire our team."
      className="section section--center"
    >
      <Formik
        initialValues={{
          fullname: '',
          contact: '',
          subject: '',
          message: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={yup.object({
          fullname: yup.string().required(),
          contact: yup.string().required(),
          subject: yup.string().required(),
          message: yup.string().required(),
        })}
      >
        {() => (
          <Form className="contact__form">
            <Former.Group>
              <Former.Box>
                <Former.Title className="contact-form__title">
                  Contact us
                </Former.Title>
              </Former.Box>
              <Former.Box>
                <Former.Input placeholder="Full name" name="fullname" />
              </Former.Box>
              <Former.Box>
                <Former.Input placeholder="Contact" name="contact" />
              </Former.Box>
              <Former.Box>
                <Former.Input placeholder="Subject" name="subject" />
              </Former.Box>
              <Former.Box>
                <Former.Textarea placeholder="Message" name="message" />
              </Former.Box>
              <Former.Box direction="row">
                <Button
                  type="submit"
                  variant="primary"
                  title="Send"
                  size="medium"
                />
              </Former.Box>
            </Former.Group>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Contact;
