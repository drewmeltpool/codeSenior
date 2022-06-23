import React from 'react';

import Section from 'src/view/common/Section';
import Image from 'src/view/common/Image';
import Button from 'src/view/common/Button';

import FlatList from 'src/view/common/FlatList';
import technologyImages from 'src/data/technologiesImages';

const Technologies: React.FC = () => {
  return (
    <Section
      title="Technologies"
      description="Most popular stack"
      className="section section--center"
    >
      <Button
        title="FIND A DREAM JOB"
        variant="primary"
        className="section__btn"
      />
      <FlatList
        isWrapComponent
        className="logo__list"
        itemClassName="logo__item"
        data={technologyImages}
        setKey={(key) => key}
        component={(url) => (
          <Image
            src={url}
            className="logo__image-wrapper"
            imageClassName="logo__image"
          />
        )}
      />
    </Section>
  );
};

export default Technologies;
