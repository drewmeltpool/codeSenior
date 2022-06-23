import classnames from 'classnames';
import React, { useMemo, useState } from 'react';
import StepperContext from '../StepperContext';

interface IProps {
  initialValue?: any;
  children: React.ReactNode;
  className?: string;
}

const StepperProvider: React.FC<IProps> = ({
  children,
  initialValue,
  className,
}) => {
  const [data, setData] = useState(initialValue);
  const [len, setLen] = useState<number>(0);
  const [activeStep, setStep] = useState<number>(0);

  const handlePrev = (data: any) => () => {
    setStep((prev) => prev - 1);
    if (data) setData(data);
    else setData((p: any) => p);
  };
  const handleNext = (data: any) => () => {
    setStep((prev) => prev + 1);
    if (data) setData(data);
    else setData((p: any) => p);
  };

  const contextValue = useMemo(() => {
    return {
      data,
      setData,
      len,
      setLen,
      activeStep,
      setStep,
      handleNext,
      handlePrev,
    };
  }, [activeStep, data, len]);

  return (
    <StepperContext.Provider value={contextValue}>
      <div className={classnames('stepper', className)}>{children}</div>
    </StepperContext.Provider>
  );
};

export default StepperProvider;
