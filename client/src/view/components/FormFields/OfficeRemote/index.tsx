import React from 'react';
import Select from '../../../common/Former/FormMultiSelect';

const options = [
  { label: 'Office', value: 'Office' },
  { label: 'Remote', value: 'Remote' },
];

interface IProps {
  name: string;
  [key: string]: any;
}

const OfficeRemote: React.FC<IProps> = ({ name, ...props }) => {
  return <Select {...props} name={name} options={options} />;
};

export default OfficeRemote;
