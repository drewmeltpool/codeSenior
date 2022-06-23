import React from 'react';

import Section from 'src/view/common/Section';
import Image from 'src/view/common/Image';
import HexagonSvg from '../components/HexagonSvg';
import Button from 'src/view/common/Button';

import arrow from 'src/assets/images/arrow.png';
import { bottomScroll } from 'src/utils';

const Remote: React.FC = () => {
  return (
    <Section
      title="Remote Work"
      className="section section--center"
      description="Anonymous job search and dev community"
      split={false}
    >
      <Button
        title="FIND A DREAM JOB"
        variant="primary"
        className="section__btn"
      />
      <Button onClick={bottomScroll} className="scrollDown">
        <HexagonSvg id="hex4" />
        <Image imageClassName="firstArrow" src={arrow} />
        <Image imageClassName="secondArrow" src={arrow} />
      </Button>
    </Section>
  );
};

export default Remote;
