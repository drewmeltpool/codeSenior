import React from 'react';
import { Stepper, Step, Steps } from 'src/view/common/Stepper';
import Title from 'src/view/common/Title';
import { Colors } from 'src/constants';
import MeetingForm from './MeetingForm';
import Formbar from './Formbar';
import InforamtionForm from './InforamtionForm';
import { Container } from 'src/view/components/Wrapper';

const ProfileForm: React.FC = () => {
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
            <InforamtionForm />
          </Step>
        </Steps>
      </Stepper>
    </Container>
  );
};

export default ProfileForm;
