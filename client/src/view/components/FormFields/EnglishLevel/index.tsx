import React from 'react';
import Select from '../../../common/Former/FormSelect';

const options = [
  { label: 'Fluent', value: 'Fluent' },
  { label: 'C2 (Proficiency)', value: 'C2 (Proficiency)' },
  { label: 'C1 (Advanced)', value: 'C1 (Advanced)' },
  { label: 'B2 (Advanced)', value: 'B2 (Advanced)' },
  { label: 'B1 (Intermidiate)', value: 'B1 (Intermidiate)' },
  { label: 'A2 (Elementary)', value: 'A2 (Elementary)' },
  { label: 'A1 (Begginer)', value: 'A1 (Begginer)' },
];

interface IProps {
  name: string;
  [key: string]: any;
}

const EnglishSelect: React.FC<IProps> = ({ name, ...props }) => {
  return <Select {...props} name={name} options={options} />;
};

export default EnglishSelect;
