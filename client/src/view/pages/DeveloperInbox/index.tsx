import React, { useEffect, useState } from 'react';
import { useRequest } from 'src/view/hooks';
import { useSelector } from 'react-redux';
import { Spinner } from 'src/view/common/Loader';
import { Colors } from 'src/constants';
import Icon from 'src/view/common/Icon';
import FlatList from 'src/view/common/FlatList';
import PostInbox from 'src/view/components/PostInbox';
import Typography from 'src/view/common/Typography';

import { Empty } from 'src/view/components/Empty';

import * as api from 'src/api';
import Flex from 'src/view/common/Flex';

const DeveloperInbox: React.FC = () => {
  const [inboxes, setInboxes] = useState([]);
  const { id } = useSelector((store: any) => store.user) as any;
  const { data, loading } = useRequest(() => api.post.applied(id), []);

  useEffect(() => {
    setInboxes(data);
  }, [data]);

  const handleDelete = (idx: number) => () =>
    setInboxes((d) => d.filter(({ id }) => idx !== id));

  return (
    <Flex direction="column" gap="12px" flex={1}>
      <Typography variant="h3">
        <Icon icon="inbox" />
        <Typography tag="span" title="Inbox" />
      </Typography>
      {loading ? (
        <Spinner color={Colors.BLUE} />
      ) : (
        <FlatList
          className="post-list"
          data={inboxes}
          component={(props) => (
            <PostInbox {...props} handleDelete={handleDelete(props.id)} />
          )}
          setKey={(props) => props.id}
          empty={() => (
            <Empty title={<Typography variant="h4" title="Empty inbox" />} />
          )}
        />
      )}
    </Flex>
  );
};

export default DeveloperInbox;
