import React from 'react';

import { Field } from 'formik';
import classNames from 'classnames';

import Icon from 'src/view/common/Icon';

type InputVariant = 'primary';

interface IInput {
  name: string;
  icon?: any;
  variant?: InputVariant;
  placeholder?: string;
  className?: string;
  valid?: boolean;
  onChange?: (_v: string) => void;
  [key: string]: any;
}

const Input: React.FC<IInput> = ({
  name,
  variant = 'primary',
  placeholder,
  icon,
  valid,
  onChange,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <div
          className={classNames(
            'input',
            placeholder && 'input-with-placeholder',
            variant && `input--${variant}`,
            meta.error && meta.touched && !valid && 'input--error',
            !meta.error && meta.touched && !valid && 'input--success'
          )}
        >
          {icon && <Icon className="input-icon" icon={icon} />}

          <Field
            autoComplete="on"
            className="input-value"
            name={name}
            placeholder={variant ? '' : placeholder}
            onChange={(v: any) => {
              onChange?.(v.target.value);
              field.onChange(v);
            }}
            {...rest}
          />
          {placeholder && (
            <p
              className={classNames(
                'input-placeholder',
                icon && 'input-placeholder-with-icon',
                meta.value && 'input-placeholder--active'
              )}
            >
              {placeholder}
            </p>
          )}
        </div>
      )}
    </Field>
  );
};

export default Input;
