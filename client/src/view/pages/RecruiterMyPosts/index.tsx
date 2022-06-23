import React from 'react';
import { useSelector } from 'react-redux';
import FlatList from 'src/view/common/FlatList';
import Icon from 'src/view/common/Icon';
import PostSmall from 'src/view/components/PostSmall';
import { Empty } from 'src/view/components/Empty';
import Typography from 'src/view/common/Typography';
import Flex from 'src/view/common/Flex';
import { Link } from 'react-router-dom';
import Button from 'src/view/common/Button';

const MyPosts: React.FC = () => {
  const { posts } = useSelector((state: any) => state.recruiter);

  return (
    <Flex gap="24px" direction="column" flex={1}>
      <Typography variant="h3">
        <Icon icon="box" />
        <Typography tag="span" title="My posts" />
      </Typography>
      <FlatList
        data={posts}
        className="post-list"
        component={(props) => <PostSmall {...props} />}
        setKey={(p) => p.id}
        empty={() => (
          <Flex direction="column" alignItems="center">
            <Empty title={<Typography variant="h4" title="Empty list" />} />
            <Link to="/create-post">
              <Button variant="primary" title="Create a new post" />
            </Link>
          </Flex>
        )}
      />
    </Flex>
  );
};

export default MyPosts;
