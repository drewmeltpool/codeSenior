import React, { useState } from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Collapse from '../Collapse';
import FlatList from '../FlatList';
import { IAccordion } from 'src/types';

const Accordion: React.FC<IAccordion> = ({
  data,
  onlyOne,
  component,
  title,
  helpers,
  setKey,
}) => {
  const [active, setActive] = useState<number | null>();

  const handleActive = (flag: number | null) => () => setActive(flag);

  const handleClick = (index: any) =>
    onlyOne ? handleActive(index === active ? null : index) : undefined;

  const activeCollapse = (index: any) =>
    onlyOne ? active === index : undefined;

  return (
    <FlatList
      data={data}
      isWrapComponent
      className="accordion__list"
      setKey={(props, index) => setKey(props, index)}
      component={(props, index) => {
        return (
          <Collapse
            className="accordion__item"
            helpers={helpers && helpers(props)}
            icon={faChevronDown}
            title={title(props)}
            onClick={handleClick(index)}
            visible={activeCollapse(index)}
          >
            {component(props)}
          </Collapse>
        );
      }}
    />
  );
};

export default Accordion;
