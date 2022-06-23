import React from 'react';
import TabProvider from './TabProvider';
import Tabber from './Tabber';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';

interface ITabWrapper {
  active: string | number;
  onChange?: void;
  className?: string;
}

const TabWrapper: React.FC<ITabWrapper> = ({
  children,
  active,
  onChange,
  className,
}) => {
  return (
    <TabProvider active={active} onChange={onChange}>
      <Tabber className={className}>
        <TabNavigation />
        <TabContent>{children}</TabContent>
      </Tabber>
    </TabProvider>
  );
};

export default TabWrapper;
