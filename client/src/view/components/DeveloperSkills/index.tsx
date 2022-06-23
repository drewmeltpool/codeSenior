import React from 'react';

import Icon from 'src/view/common/Icon';
import FlatList from 'src/view/common/FlatList';
import Budget from 'src/view/common/Budget';
import Typography from 'src/view/common/Typography';

import Button from 'src/view/common/Button';
import { Colors } from 'src/constants';

export const DevelopersSkills: React.FC<any> = ({ data, del, size }) => {
  return (
    <FlatList
      className="list"
      data={data}
      component={({ name, year, icon, id }) => (
        <Budget size={size || 'md'} rounded variant={Colors.BLUE}>
          <Icon
            size="lg"
            color={Colors.BLUE}
            icon={icon ? ['fab', icon] : 'tag'}
          />
          <Typography
            tag="span"
            variant="body-bold"
            color={Colors.BLUE}
            title={name}
          />
          <Typography
            variant="h5"
            tag="span"
            color={Colors.BLUE}
            title={year}
          />
          {del && (
            <Button
              rounded
              variant="box-fill"
              onClick={() => del(id)}
              title={<Icon icon="times" />}
            />
          )}
        </Budget>
      )}
      setKey={({ id }) => id}
    />
  );
};
