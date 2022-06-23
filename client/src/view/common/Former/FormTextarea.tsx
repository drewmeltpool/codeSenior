import React from 'react';
import { Field, useField } from 'formik';
import classnames from 'classnames';
import Former from '.';
import Icon from '../Icon';

interface IProps {
  className?: string;
  name: string;
  hidden?: boolean;
  placeholder?: string;
  [key: string]: any;
}

const FormTextArea: React.FC<IProps> = ({
  className,
  name,
  hidden,
  placeholder,
  ...rest
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="form-textarea-wrapper">
      <Field
        className={classnames(
          'textarea',
          className,
          hidden && 'hidden',
          meta.error && 'error',
          !meta.error && meta.touched && 'success'
        )}
        as="textarea"
        name={name}
        {...rest}
      />
      {placeholder && (
        <h4
          className={classnames(
            'form-textarea-placeholder',
            !!field.value && 'touched'
          )}
        >
          {placeholder}
        </h4>
      )}
      {!meta.error && meta.touched && (
        <Icon
          icon="check-circle"
          fill="success"
          className="form-success-icon"
        />
      )}
      {meta.error && <Former.Error>{meta.error}</Former.Error>}
    </div>
  );
};

export default FormTextArea;
