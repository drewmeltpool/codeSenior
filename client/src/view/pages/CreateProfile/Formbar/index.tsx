import React from 'react';
import { useStepper } from 'src/view/hooks';
import { StepBar, StepBarItem } from 'src/view/common/StepBar';
import Title from 'src/view/common/Title';

const Formbar: React.FC = () => {
  const { activeStep } = useStepper();

  return (
    <StepBar currentStep={activeStep}>
      <StepBarItem
        step={0}
        label={1}
        title={<Title title="Meeting" variant="info" />}
      />
      <StepBarItem
        step={1}
        label={2}
        title={<Title title="Information" variant="info" />}
      />
    </StepBar>
  );
};

export default Formbar;
