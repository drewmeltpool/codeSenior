import React from 'react';

import { useRequest } from 'src/view/hooks';

import { Link } from 'react-router-dom';
import Avatar from 'src/view/common/Avatar';
import Flex from 'src/view/common/Flex';
import Typography from 'src/view/common/Typography';
import { DevelopersSkills } from '../DeveloperSkills';

import { userName } from 'src/utils';

import * as api from 'src/api';
import { Colors } from 'src/constants';
import Budget from 'src/view/common/Budget';

export const Developer: React.FC<any> = (props) => {
  const { data } = useRequest(() => api.developer.technology.get(props.id));

  return (
    <div className="developer">
      <Flex gap="12px">
        <Avatar title={props.firstName} size="md" />
        <Flex gap="6px" justify="center" direction="column">
          <Link to={`/user/${props.userId}`} className="link link--primary">
            <Typography variant="h5" title={userName(props)} />
          </Link>
          <Typography variant="body-bold" title={props.title} />
        </Flex>
      </Flex>

      {props.description && (
        <Flex direction="column" gap="8px">
          <Typography title="About:" variant="h4" />
          <Typography title={props.description} variant="body1" />
        </Flex>
      )}

      <Flex gap="8px" wrap="wrap">
        <Budget
          variant={Colors.GREEN}
          title={props.english || 'B1 (Intermidiate)'}
        />
        <Budget variant={Colors.BLUE} title={props.salary || 2500} />
      </Flex>

      <DevelopersSkills data={data} />
    </div>
  );
};
