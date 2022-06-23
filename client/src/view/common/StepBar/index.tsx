import classNames from 'classnames';
import React, { createContext, useContext, useMemo } from 'react';
import Text from 'src/view/common/Text';
import Icon from '../Icon';

import cn from 'classnames';
interface IStepBar {
  currentStep: number;
  className?: string;
}

const StepBarContext = createContext<{
  currentStep: number;
}>({ currentStep: 0 });

const StepBar: React.FC<IStepBar> = ({ children, currentStep, className }) => {
  const value = useMemo(() => ({ currentStep }), [currentStep]);

  return (
    <StepBarContext.Provider value={value}>
      <div className={cn('stepbar', className)}>{children}</div>
    </StepBarContext.Provider>
  );
};

interface IStep {
  label: string | React.ReactNode;
  title?: string | React.ReactNode;
  step: number;
}

const StepBarItem: React.FC<IStep> = ({ label, title, step }) => {
  const { currentStep } = useContext(StepBarContext);

  return (
    <div
      className={classNames('stepbar-item', currentStep >= step && 'active')}
    >
      <div className="stepbar-label">
        <Text
          className="stepbar-label-value"
          tag="span"
          title={step < currentStep ? <Icon icon="check" /> : label}
        />
      </div>
      {title && <div className="stepbar-title">{title}</div>}
    </div>
  );
};

export { StepBar, StepBarItem };
