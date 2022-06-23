import React from 'react';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import * as Profile from '../ProfileBlock';
import Icon from 'src/view/common/Icon';
import { DevelopersSkills } from '../DeveloperSkills';

const Skills: React.FC<any> = ({ data }) => {
  return (
    <Profile.Block direction="column">
      <Profile.Head>
        <Title variant="secondary">
          <Icon icon="layer-group" />
          <Text title="Skills" tag="span" />
        </Title>
      </Profile.Head>
      <DevelopersSkills data={data} />
    </Profile.Block>
  );
};

export default Skills;
