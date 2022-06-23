import React from 'react';

import { Stepper, Step, Steps } from 'src/view/common/Stepper';
import { Container } from 'src/view/components/Wrapper';

import Title from 'src/view/common/Title';

import Formbar from './Formbar';
import MeetingForm from './MeetingForm';
import InforamtionForm from './InforamtionForm';
import EnglishForm from './English';
import BasicForm from './Basic';

import { Colors } from 'src/constants';

const CreateDeveloperProfileForm: React.FC = () => {
  return (
    <Container size="md">
      <Stepper initialValue={{}} className="create-profile-stepper">
        <Title variant="primary" color={Colors.DARK} title="Create profile" />
        <Formbar />
        <Steps>
          <Step>
            <MeetingForm />
          </Step>
          <Step>
            <EnglishForm />
          </Step>
          <Step>
            <BasicForm />
          </Step>
          <Step>
            <InforamtionForm />
          </Step>
        </Steps>
      </Stepper>
    </Container>
  );
};

export default CreateDeveloperProfileForm;
