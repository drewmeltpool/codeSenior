import React, { useState } from 'react';
import { Field, useField } from 'formik';
import Select from 'react-select';

import Error from './FormError';
import classnames from 'classnames';

interface IOptions {
  value: string;
  label: string;
}

interface IProps {
  name: string;
  options: Array<IOptions>;
  [key: string]: any;
}

const FormSelectComponent: React.FC<IProps> = ({ name, options, ...rest }) => {
  const [touched, setTouched] = useState(false);
  const [, meta, helpers] = useField(name);
  const handleChange = ({ value }: any) => {
    helpers.setValue(value);
    if (!touched) setTouched(true);
  };

  return (
    <Field name={name} placeholder="kek">
      {() => (
        <>
          <Select
            className={classnames(
              'react-select-container',
              meta.error && 'error',
              !meta.error && touched && 'success'
            )}
            classNamePrefix="react-select"
            {...meta}
            {...rest}
            value={meta.value && { label: meta.value, value: meta.value }}
            options={options}
            name={name}
            onChange={handleChange}
          />
          {meta.error && <Error>{meta.error}</Error>}
        </>
      )}
    </Field>
  );
};

export default FormSelectComponent;
