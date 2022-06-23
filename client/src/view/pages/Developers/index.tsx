import React from 'react';
import Flex from 'src/view/common/Flex';
import Typography from 'src/view/common/Typography';
import { useRequest } from 'src/view/hooks';

import * as api from 'src/api';
import FlatList from 'src/view/common/FlatList';
import { Spinner } from 'src/view/common/Loader';
import { Colors } from 'src/constants';
import { Developer } from 'src/view/components/Developer';

export const Developers = () => {
  const { data, loading } = useRequest(() => api.developer.retrieve(), []);

  return (
    <Flex direction="column" flex={1} gap="24px">
      <Typography title="Developers" variant="h3" />

      {loading ? (
        <Spinner color={Colors.BLUE} className="spinner" />
      ) : (
        <FlatList
          className="developer-list"
          data={data}
          component={(props) => <Developer {...props} />}
          setKey={({ id }) => id}
        />
      )}
    </Flex>
  );
};
