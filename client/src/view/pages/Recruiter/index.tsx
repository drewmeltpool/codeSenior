import React from 'react';
import { Link } from 'react-router-dom';

const Recruiter: React.FC = () => {
  return (
    <div className="container">
      <Link to="/recruiter/company">company</Link>
    </div>
  );
};

/* 
  <Formik
        initialValues={{
          firstName: '',
          kek: [],
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {(props) => {
          return (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="First Name" />
              <Select
                isMulti
                name="kek"
                // onChange={(option: any): void => helpers.setValue(option)}
                // onBlur={field.onBlur}
                options={[
                  { label: 'one', value: '' },
                  { label: 'two', value: '' },
                  { label: 'three', value: '' },
                  { label: 'four', value: ' ' },
                ]}
                className="form__multi-select"
              />
              <FieldArray name="qwe">
                {(props) => {
                  const pro = Object.entries(props.form.values.kek);

                  return (
                    <div className="wrapper">
                      {pro.map(([key, item]: any, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Field name={`${props.name}.${key}`} value={item} />
                          </React.Fragment>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => props.handleReset()}>
                Reset
              </button>
            </Form>
          );
        }}
      </Formik>    

*/

export default Recruiter;
