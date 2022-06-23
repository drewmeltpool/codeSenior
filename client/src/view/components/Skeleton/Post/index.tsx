import React from 'react';
import FlatList from 'src/view/common/FlatList';

import Flex from 'src/view/common/Flex';
import { Skeleton } from 'src/view/common/Skeleton';

export const PostSkeleton: React.FC<any> = ({ len }) => {
  return (
    <FlatList
      className="skeleton-list"
      tag="div"
      setKey={(_, idx) => idx}
      data={Array(len).fill(1)}
      component={() => (
        <Skeleton>
          <Flex gap="12px">
            <Skeleton.Avatar />
            <Flex flex={1} direction="column" gap="8px">
              <Flex gap="12px">
                <Skeleton.Line />
                <Skeleton.Line />
              </Flex>
              <Skeleton.Line />
            </Flex>
          </Flex>
          <Skeleton.Line />
          <Skeleton.Line />
        </Skeleton>
      )}
    />
  );
};
