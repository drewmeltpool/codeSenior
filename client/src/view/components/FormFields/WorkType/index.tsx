import React from 'react';
import Select from '../../../common/Former/FormMultiSelect';

const options = [
  { label: 'Full time', value: 'Full time' },
  { label: 'Part time', value: 'Part time' },
  { label: 'Temporary', value: 'Temporary' },
];

interface IProps {
  name: string;
  [key: string]: any;
}

const WorkTypeSelect: React.FC<IProps> = ({ name, ...props }) => {
  return <Select {...props} name={name} options={options} />;
};

export default WorkTypeSelect;
