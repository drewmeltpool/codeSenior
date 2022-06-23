import React, { createContext } from 'react';

interface IStepperContext {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  len: number;
  setLen: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleNext: (_data: any) => () => void;
  handlePrev: (_data: any) => () => void;
}

const StepperContext = createContext<IStepperContext>({} as IStepperContext);

export default StepperContext;
