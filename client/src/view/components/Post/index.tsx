import React, { useCallback, useState } from 'react';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import Button from 'src/view/common/Button';
import Avatar from 'src/view/common/Avatar';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Budget from 'src/view/common/Budget';
import { Colors, EUserTypes } from 'src/constants';
import Flex from 'src/view/common/Flex';
import Icon from 'src/view/common/Icon';
import { generateHex } from 'src/utils';
import { useSelector } from 'react-redux';
import { useRequest } from 'src/view/hooks';

import * as api from 'src/api';

const Post: React.FC<any> = (props) => {
  const { id, userTableNameId } = useSelector(
    (state: any) => state.user
  ) as any;
  const [apply, setApply] = useState(false);

  const isApplied = useRequest(() => api.post.isApplied(id, props.id), [apply]);

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

  return (
    <div className="post">
      <div className="post-inner">
        <div className="post-head">
          <div className="post-company">
            <Avatar
              size="md"
              image={props.author.companyImage}
              title={props.author.companyName}
            />
            <div className="post-company-name">
              <Title variant="small" title={props.author.companyName} />
              <Link to={`post/${props.id}`} className="link">
                <Title
                  className="link--primary link"
                  variant="medium"
                  title={props.title}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-body">
          <Text
            variant="primary"
            className="post-description"
            title={props.description}
          />
        </div>
        <Flex gap="12px" wrap="wrap">
          <Budget
            variant={generateHex(props.position)}
            title={props.position}
          />
          <Budget variant={Colors.LIGHT_BLUE}>
            <Icon icon="coins" />
            <Text tag="span" title={`${props.from} - ${props.to}`} />
          </Budget>
          <Budget
            variant={Colors.PURPLE}
            title={moment(props.postDate).fromNow()}
          />
        </Flex>
        <div className="post-footer">
          <div className="post-footer-inner">
            <Avatar
              className="post-auth-image"
              size="sm"
              image={props.author.image}
              title={props.author.firstName}
            />
            <div className="post-auth-inner">
              <Title variant="small">
                <Link
                  className="link link--primary"
                  to={`/user/${props.author.id}`}
                >
                  {`${props.author.firstName} ${props.author.lastName}`}
                </Link>
              </Title>
              <Title variant="info" title={props.author.title} />
            </div>
          </div>
        </div>
      </div>

      <Flex direction="column" gap="12px">
        {userTableNameId === EUserTypes.Developer && (
          <Button
            disabled={isApplied.data || isApplied.loading}
            onClick={handleApply(props.id)}
            variant={isApplied.data ? 'box-fill' : 'box'}
          >
            <Icon icon="check" />
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default Post;
