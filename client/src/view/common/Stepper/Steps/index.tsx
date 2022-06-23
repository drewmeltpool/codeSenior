import React, { useContext, useEffect } from 'react';
import StepperContext from '../StepperContext';

import cn from 'classnames';

interface StepsProps {
  className?: string;
}

const Steps: React.FC<StepsProps> = ({ children, className }) => {
  const { setLen, activeStep } = useContext(StepperContext);

  const components =
    React.Children.map(children, (child: any, idx: number) =>
      React.cloneElement(child, { step: idx })
    ) || [];

  useEffect(() => setLen(components.length), [components.length]);

  return <div className={cn('steps', className)}>{components[activeStep]}</div>;
};

export default Steps;
