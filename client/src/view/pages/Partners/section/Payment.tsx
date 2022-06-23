import React from 'react';
import Button from '../../../common/Button';
import Section from '../../../common/Section';

const HowDoes: React.FC = () => {
  return (
    <Section
      split={false}
      title="Payment"
      description="Our commission is 25% of the candidates salary."
      className="section section--center"
    >
      <Button
        title="Post new offer"
        variant="primary"
        className="section__btn"
      />
    </Section>
  );
};

export default HowDoes;
