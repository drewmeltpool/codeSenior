import React from 'react';
import { Field, useField } from 'formik';
import classnames from 'classnames';

interface IProps {
  className?: string;
  name: string;
  value: string;
  hidden?: boolean;
  [key: string]: any;
}

const FormRadio: React.FC<IProps> = ({
  value,
  className,
  name,
  hidden,
  ...rest
}) => {
  const [field] = useField(name);

  return (
    <Field
      type="radio"
      value={value}
      checked={field.value === value}
      className={classnames(className, hidden && 'hidden')}
      name={name}
      {...rest}
    />
  );
};

export default FormRadio;
