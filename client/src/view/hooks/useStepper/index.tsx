import { useContext } from 'react';
import StepperContext from 'src/view/common/Stepper/StepperContext';

const useStepper = () => useContext(StepperContext);

export default useStepper;
