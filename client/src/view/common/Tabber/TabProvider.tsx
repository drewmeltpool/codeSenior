import React, { useEffect, useMemo, useState } from 'react';
import TabContext from './TabContext';

interface ITabProvider {
  active: number | string;
  onChange?: void;
}

const TabProvider: React.FC<ITabProvider> = ({
  children,
  active,
  onChange,
}) => {
  const [tab, setTab] = useState<number | string>(1);
  const [navigation, setNavigation] = useState<Array<any>>([]);

  useEffect(() => {
    setTab(active);
  }, [active]);

  const contextValue = useMemo(() => {
    return {
      tab,
      setTab,
      navigation,
      setNavigation,
      onChange,
    };
  }, [navigation, onChange, tab]);

  return (
    <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
  );
};

export default TabProvider;
