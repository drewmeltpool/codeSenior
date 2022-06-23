import React from 'react';

import { Field } from 'formik';

interface ICheckbox {
  name: string;
  placeholder?: string | React.ReactNode;
}

const Checkbox: React.FC<ICheckbox> = ({ name, placeholder }) => {
  return (
    <Field name={name}>
      {() => (
        <div className="checkbox-wrapper">
          <Field
            autoComplete="on"
            type="checkbox"
            className="checkbox"
            id={name}
            name={name}
          />
          <label htmlFor={name}>{placeholder}</label>
        </div>
      )}
    </Field>
  );
};

export default Checkbox;
