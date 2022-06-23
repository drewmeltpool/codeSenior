import React from 'react';
import { Field, useField } from 'formik';
import Icon from '../../Icon';
import classNames from 'classnames';

interface IProps {
  className?: string;
  name: string;
  placeholder?: string;
  icon?: any;
  [key: string]: any;
}

const FormTextArea: React.FC<IProps> = ({
  className,
  name,
  icon,
  placeholder,
  ...rest
}) => {
  const [field, meta] = useField(name);

  return (
    <label
      className={classNames(
        'textarea',
        className,
        meta.error && 'error',
        !meta.error && meta.touched && 'success'
      )}
    >
      {(icon || placeholder) && (
        <div className="textarea-header">
          {icon && <Icon className="textarea-icon" icon={icon} />}
          {placeholder && (
            <h4
              className={classNames(
                'textarea-placeholder',
                !!field.value && 'touched'
              )}
            >
              {placeholder}
            </h4>
          )}
        </div>
      )}

      <Field className="textarea-value" as="textarea" name={name} {...rest} />
    </label>
  );
};

export default FormTextArea;
