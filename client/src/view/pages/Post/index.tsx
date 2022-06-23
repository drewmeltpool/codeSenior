import React, { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from 'src/view/common/Title';

import { useRequest } from 'src/view/hooks';
import Text from 'src/view/common/Text';
import { Colors, EUserTypes } from 'src/constants';
import Avatar from 'src/view/common/Avatar';
import Flex from 'src/view/common/Flex';
import moment from 'moment';
import Budget from 'src/view/common/Budget';
import Icon from 'src/view/common/Icon';
import Button from 'src/view/common/Button';

import * as api from 'src/api';
import { useSelector } from 'react-redux';
import { userName } from 'src/utils';
import { Spinner } from 'src/view/common/Loader';

const Post: React.FC = () => {
  const [apply, setApply] = useState(false);

  const { id, userTableNameId } = useSelector(
    (state: any) => state.user
  ) as any;
  const { id: postId } = useParams<{ id: string }>();

  const { data, loading } = useRequest(() => api.post.get(postId), []);
  const isApplied = useRequest(() => api.post.isApplied(id, postId), [apply]);

  const handleApply = useCallback(
    (postId) => async () => {
      if (apply) return;

      const [, err] = await api.post.apply({
        userId: id,
        postId,
        date: new Date(),
      });

      if (err) return;

      setApply(true);
    },
    []
  );

  if (loading) return <Spinner color={Colors.BLUE} />;

  return (
    <Flex direction="column" flex={1}>
      <Title
        color={Colors.BLUE}
        title={`${data.position} ${data.title}`}
        variant="primary"
      />
      <Flex gap="16px" alignItems="center" className="post-author">
        <Avatar
          size="md"
          image={data.author.image}
          title={data.author.firstName}
        />
        <Flex direction="column" gap="4px">
          <Title variant="medium">
            <Link to={`/user/${data.author.id}`} className="link link--primary">
              {userName(data.author)}
            </Link>
          </Title>
          <Title variant="info" title={data.author.title} />
        </Flex>

        {userTableNameId === EUserTypes.Developer && !isApplied.loading && (
          <Flex flex={1} justify="flex-end">
            <Button
              disabled={isApplied.data}
              size="medium"
              onClick={handleApply(postId)}
              variant={isApplied.data ? 'outline-primary' : 'primary'}
              title={isApplied.data ? 'Applied' : 'Apply'}
            />
          </Flex>
        )}
      </Flex>
      <div className="post-page-content">
        <Flex gap="16px" wrap="wrap">
          <Budget
            variant={Colors.LIGHT_BLUE}
            title={moment(data.postDate).fromNow()}
          />
          <Budget variant={Colors.PINK}>
            <Title variant="small">{data.position}</Title>
          </Budget>
          <Budget variant={Colors.PURPLE}>
            <Title variant="small">
              <Icon icon="coins" />
              <Text tag="span" title={`${data.from} - ${data.to}`} />
            </Title>
          </Budget>
        </Flex>
        <Flex gap="12px" alignItems="center">
          <Avatar
            size="md"
            image={data.author.companyImage}
            title={data.author.companyName}
          />
          <Flex direction="column" gap="4px">
            <Title variant="medium">{data.author.companyName}</Title>
          </Flex>
        </Flex>
        <Text variant="secondary">{data.author.aboutCompany}</Text>

        {data.description && (
          <Flex direction="column">
            <Title variant="secondary" title="Description" />
            <div
              className="post-details"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </Flex>
        )}
        {data.bonuses && (
          <Flex direction="column">
            <Title variant="secondary" title="Bonuses" />
            <div
              className="post-details"
              dangerouslySetInnerHTML={{ __html: data.bonuses }}
            />
          </Flex>
        )}
        {data.requirement && (
          <Flex direction="column">
            <Title variant="secondary" title="Requirements" />
            <div
              className="post-details"
              dangerouslySetInnerHTML={{ __html: data.requirement }}
            />
          </Flex>
        )}
        {data.additional && (
          <Flex direction="column">
            <Title variant="secondary" title="Additionals" />
            <div
              className="post-details"
              dangerouslySetInnerHTML={{ __html: data.additional }}
            />
          </Flex>
        )}
      </div>
    </Flex>
  );
};

export default Post;
