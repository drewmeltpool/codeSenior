import React from 'react';

import Group from './FormGroup';
import Box from './FormBox';
import Title from './FormTitle';
import Error from './FormError';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import FormMultiSelect from './FormMultiSelect';
import FormerRadio from './FormerRadio';
import FormerLabel from './FormerLabel';
import FormerCheckbox from './FormerCheckbox';

// import './style.scss';

const Former = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Former.Box = Box;
Former.Group = Group;
Former.Title = Title;
Former.Error = Error;
Former.Input = FormInput;
Former.Textarea = FormTextarea;
Former.Select = FormSelect;
Former.MultiSelect = FormMultiSelect;
Former.Radio = FormerRadio;
Former.Checkbox = FormerCheckbox;
Former.Label = FormerLabel;

export default Former;
