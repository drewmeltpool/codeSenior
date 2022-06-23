import React from 'react';
import { useStepper } from 'src/view/hooks';
import { StepBar, StepBarItem } from 'src/view/common/StepBar';
import Typography from 'src/view/common/Typography';

const Formbar: React.FC<any> = ({ className }) => {
  const { activeStep } = useStepper();

  return (
    <StepBar currentStep={activeStep} className={className}>
      <StepBarItem
        step={0}
        label={1}
        title={<Typography title="Main" variant="body1" />}
      />
      <StepBarItem
        step={1}
        label={2}
        title={<Typography title="Requirements" variant="body1" />}
      />
      <StepBarItem
        step={2}
        label={3}
        title={<Typography title="Bonuses" variant="body1" />}
      />
      <StepBarItem
        step={3}
        label={4}
        title={<Typography title="Additional" variant="body1" />}
      />
    </StepBar>
  );
};

export default Formbar;
