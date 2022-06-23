import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { useQueryParams, useRequest } from 'src/view/hooks';

import FindPostForm from 'src/view/components/FindPostForm';
import Post from 'src/view/components/Post';

import FlatList from 'src/view/common/FlatList';
import Text from 'src/view/common/Text';
import Flex from 'src/view/common/Flex';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';

import * as api from 'src/api';
import { PostSkeleton } from 'src/view/components/Skeleton';

const Posts: React.FC = () => {
  const queryParams = useQueryParams();
  const history = useHistory();
  const currentPage = Number(queryParams.get('page')) || 1;

  const { data, loading } = useRequest(
    () => api.post.retrieve(currentPage),
    [currentPage]
  );

  const { pagination, data: posts } = data || {};

  const handleChangePage = useCallback((page) => {
    history.push({
      search: `?page=${page}`,
    });
  }, []);

  const handlePrev = useCallback(
    () => handleChangePage(currentPage - 1),
    [currentPage]
  );

  const handleNext = useCallback(
    () => handleChangePage(currentPage + 1),
    [currentPage]
  );

  return (
    <Flex direction="column" flex={1}>
      <FindPostForm />
      {loading ? (
        <PostSkeleton len={6} />
      ) : (
        <FlatList
          data={posts}
          className="post-list"
          setKey={(_, idx) => idx}
          component={(props) => <Post {...props} />}
        />
      )}
      {data && (
        <Flex gap="24px">
          {currentPage !== 1 && (
            <Button onClick={handlePrev} variant="outline-dark" size="medium">
              <Icon icon="angle-left" />
              <Text tag="span" title="Prev" />
            </Button>
          )}
          {pagination.total > pagination.to && (
            <Button onClick={handleNext} variant="dark" size="medium">
              <Text tag="span" title="Next" />
              <Icon icon="angle-right" />
            </Button>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Posts;
