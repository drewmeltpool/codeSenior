import React from 'react';
import { Field, useField } from 'formik';
import classnames from 'classnames';

interface IProps {
  className?: string;
  name: string;
  hidden?: boolean;
  [key: string]: any;
}

const FormCheckbox: React.FC<IProps> = ({
  className,
  name,
  hidden,
  ...rest
}) => {
  const [field] = useField(name);

  return (
    <Field
      type="checkbox"
      checked={field.value || ''}
      className={classnames(className, hidden && 'hidden')}
      name={name}
      {...rest}
    />
  );
};

export default FormCheckbox;
