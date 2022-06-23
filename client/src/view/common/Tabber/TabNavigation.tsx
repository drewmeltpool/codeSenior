import React, { useContext } from 'react';
import FlatList from '../FlatList';
import TabContext from './TabContext';
import classnames from 'classnames';

const TabNavigation: React.FC = () => {
  const { navigation, setTab, tab, onChange } = useContext(TabContext);
  const handleClick = (index: number | string) => () => {
    setTab(index);
    onChange && onChange(index);
  };

  const activeClassName = (index: number) =>
    classnames(
      'tab-navigation__item',
      index === tab && 'tab-navigation__item--active'
    );

  return (
    <FlatList
      className="tab__navigation"
      data={navigation}
      setKey={({ title }, key) => title + key}
      component={({ title, index }) => {
        return (
          <div className={activeClassName(index)} onClick={handleClick(index)}>
            {title}
          </div>
        );
      }}
    />
  );
};

export default TabNavigation;
