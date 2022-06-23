import React from 'react';
import { Container } from '../../components/Wrapper';
import { Stepper, Steps, Step } from 'src/view/common/Stepper';
import Info from './Steps/Info';
import About from './Steps/About';
import Bonuses from './Steps/Bonuses';
import Additional from './Steps/Additional';

const Jobs: React.FC = () => {
  return (
    <Container className="center">
      <Stepper initialValue={{}} className="create-offer-stepper">
        <Steps>
          <Step>
            <Info />
          </Step>
          <Step>
            <About />
          </Step>
          <Step>
            <Additional />
          </Step>
          <Step>
            <Bonuses />
          </Step>
        </Steps>
      </Stepper>
    </Container>
  );
};

export default Jobs;
