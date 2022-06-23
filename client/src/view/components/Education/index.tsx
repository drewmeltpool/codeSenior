import React from 'react';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import * as Profile from '../ProfileBlock';
import Icon from 'src/view/common/Icon';
import Work from 'src/view/common/Work';
import FlatList from 'src/view/common/FlatList';
import { sortByDate } from 'src/utils';

const Education: React.FC<any> = ({ data }) => {
  return (
    <Profile.Block direction="column">
      <Profile.Head>
        <Title variant="secondary">
          <Icon icon="book" />
          <Text title="Education" tag="span" />
        </Title>
      </Profile.Head>
      <FlatList
        className="profile-content"
        data={sortByDate(data)}
        component={({ title, position, start, end, description }) => (
          <Work
            name={title}
            position={position}
            start={start}
            end={end}
            description={description}
          />
        )}
        setKey={({ id }) => id}
      />
    </Profile.Block>
  );
};

export default Education;
