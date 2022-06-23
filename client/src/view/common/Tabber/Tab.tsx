// import classnames from 'classnames';
import React, { useContext, useEffect } from 'react';
import TabContext from './TabContext';

interface ITab {
  title: string | React.ReactElement;
  index: number | string;
  icon?: any;
}

const Tab: React.FC<ITab> = ({ children, index, icon, title }) => {
  const { setNavigation, tab } = useContext(TabContext);

  useEffect(() => {
    setNavigation((prev: any) => [
      ...prev.filter(({ index: k }: any) => k !== index),
      { index, icon, title },
    ]);
  }, [icon, index, setNavigation, title]);

  return tab === index ? <>{children}</> : <></>;
};

export default Tab;
