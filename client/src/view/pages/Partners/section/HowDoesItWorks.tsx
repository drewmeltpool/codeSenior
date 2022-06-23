import React from 'react';
import FlatList from '../../../common/FlatList';
import Section from '../../../common/Section';
import HowDoesItWork from '../components/HowDoesItWork';

const HowDoes: React.FC = () => {
  const howItWork = ['Post your offer', 'Wait for candidates', 'Hire'];

  return (
    <Section
      split={false}
      title="How does it work"
      className="section section--center"
    >
      <FlatList
        isWrapComponent
        component={(props, index) => (
          <HowDoesItWork text={props} step={++index} />
        )}
        setKey={(text, index) => text + index}
        data={howItWork}
        className="work__list"
        itemClassName="work__item"
      />
    </Section>
  );
};

export default HowDoes;
