import React from 'react';

import Section from 'src/view/common/Section';
import FlatList from 'src/view/common/FlatList';
import Feature from '../components/Feature';

import { featuresList } from 'src/data/featuresList';

const Features: React.FC = () => {
  return (
    <Section title="Key Features" className="section section--center">
      <FlatList
        isWrapComponent
        className="feature__list"
        itemClassName="feature__item"
        data={featuresList}
        component={(props) => <Feature {...props} />}
        setKey={(_, index) => index}
      />
    </Section>
  );
};

export default Features;
