import React, { useState } from 'react';
import { Field, useField } from 'formik';
import Select from 'react-select';
import Error from './FormError';
import classnames from 'classnames';

interface IProps {
  options: Array<any>;
  name: string;
  onChange?: (_props: any) => void;
  [key: string]: any;
}

const FormMultiSelect: React.FC<IProps> = ({ options, name, ...rest }) => {
  const [touched, setTouched] = useState<boolean>(false);
  const [field, meta, helpers] = useField(name);

  return (
    <Field name={name}>
      {() => {
        return (
          <>
            <Select
              className={classnames(
                'react-select-container',
                meta.error && 'error',
                !meta.error && touched && 'success'
              )}
              classNamePrefix="react-select"
              {...meta}
              value={field.value.map((v: any) => ({ value: v, label: v }))}
              isMulti
              options={options}
              name={name}
              onChange={(option: any) =>
                helpers.setValue(option.map((option: any) => option.value))
              }
              onFocus={() => !touched && setTouched(true)}
              {...rest}
            />
            {typeof meta.error === 'string' && meta.error && (
              <Error>{meta.error}</Error>
            )}
          </>
        );
      }}
    </Field>
  );
};

export default FormMultiSelect;
