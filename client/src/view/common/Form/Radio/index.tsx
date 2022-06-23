import React from 'react';

import { Field } from 'formik';
import classnames from 'classnames';

interface IRadio {
  name: string;
  variant?: 'primary';
  className?: string;
  onChange?: (_v: string) => void;
  title?: string | React.ReactNode;
  [key: string]: any;
}

const Radio: React.FC<IRadio> = ({
  name,
  value,
  title,
  className,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({ field }: any) => (
        <label
          className={classnames(
            'radio',
            className,
            field.value === value && 'checked'
          )}
        >
          <Field
            autoComplete="on"
            type="radio"
            className="radio-input"
            name={name}
            value={value}
            {...rest}
          />
          <div className="radio-inner" />
          {title}
        </label>
      )}
    </Field>
  );
};

export default Radio;
