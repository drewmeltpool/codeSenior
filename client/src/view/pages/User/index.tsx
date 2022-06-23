import React from 'react';
import { useParams } from 'react-router-dom';
import UserBlock from 'src/view/components/User';
import Profile from './Profile';

import { useRequest } from 'src/view/hooks';

import * as api from 'src/api';
import Flex from 'src/view/common/Flex';

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading } = useRequest(() => api.user.get(id));

  if (loading) return null;

  return (
    <Flex flex={1} direction="column" className="user-page">
      <UserBlock data={data} />
      <Profile userTableNameId={data.userTableNameId} profile={data.profile} />
    </Flex>
  );
};

export default User;
