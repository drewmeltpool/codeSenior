import React from 'react';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import { Colors } from 'src/constants';
import { IUser } from 'src/types';
import Avatar from '../../common/Avatar';
import * as Profile from '../ProfileBlock';
import Flex from 'src/view/common/Flex';
import Icon from 'src/view/common/Icon';

const User: React.FC<{ data: IUser }> = ({ data }) => {
  return (
    <Profile.Block direction="column">
      <Profile.Head>
        <Avatar image={data.image} title={data.firstName} size="lg" />
        <Flex direction="column" gap="12px">
          <Title
            className="profile-name"
            title={`${data.firstName} ${data.lastName}`}
            variant="secondary"
          />
          <Title color={Colors.LIGHT_BLUE} variant="small">
            <Icon icon="briefcase" />
            <Text tag="span" title={data.title} />
          </Title>
          <Title color={Colors.PURPLE} variant="info">
            <Icon icon="city" />
            <Text tag="span" title={data.city} />
          </Title>
          <Title color={Colors.GREEN} variant="info">
            <Icon icon="at" />
            <Text tag="span" title={data.email} />
          </Title>
        </Flex>
      </Profile.Head>
      <Flex direction="column">
        <Title variant="secondary">
          <Icon size="sm" icon="circle-info" />
          <Text tag="span" title="About" />
        </Title>
        <Text
          className="profile-about-text"
          variant="primary"
          title={data.shortDescription}
        />
      </Flex>
    </Profile.Block>
  );
};

export default User;
