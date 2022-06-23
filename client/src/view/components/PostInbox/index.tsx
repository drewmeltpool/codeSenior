import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';
import Budget from 'src/view/common/Budget';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import Flex from 'src/view/common/Flex';
import Avatar from 'src/view/common/Avatar';

import moment from 'moment';

import store from 'src/redux/store';

import { Colors } from 'src/constants';
import * as api from 'src/api';
import Typography from 'src/view/common/Typography';

const PostInbox: React.FC<any> = (props) => {
  const { id } = store.getState().user as any;
  const handleDelete = useCallback(() => {
    api.post.deleteApply(id, props.id);
    props.handleDelete();
  }, [props.handleDelete]);

  return (
    <div className="post post--small">
      <div className="post-inner">
        <Flex gap="8px">
          <Budget hovered onClick={handleDelete} variant={Colors.PINK}>
            <Icon icon="trash" />
            <Text tag="span" title="Delete" />
          </Budget>
        </Flex>

        <Flex gap="12px">
          <Avatar
            image={props.author.companyImage}
            title={props.author.companyName}
            size="md"
          />
          <Flex direction="column" gap="6px" justify="center">
            <Title variant="medium" title={props.position} />
            <Title variant="small">
              <Link to={`/post/${props.id}`} className="link link--primary">
                {props.title}
              </Link>
            </Title>
          </Flex>
        </Flex>

        <Text variant="secondary">{props.description}</Text>
        <Flex alignItems="center">
          <Avatar
            className="post-auth-image"
            size="sm"
            image={props.author.image}
            title={props.author.firstName}
          />
          <div className="post-auth-inner">
            <Typography variant="body-bold">
              <Link
                className="link link--primary"
                to={`/user/${props.author.id}`}
              >
                {`${props.author.firstName} ${props.author.lastName}`}
              </Link>
            </Typography>
            <Typography variant="body1" title={props.author.title} />
          </div>
        </Flex>
        <Flex gap="12px">
          <Budget
            variant={Colors.LIGHT_BLUE}
            title={moment(props.date).fromNow()}
          />
          <Budget variant={Colors.GREEN}>
            <Title variant="small">
              <Icon icon="coins" />
              <Text tag="span" title={`${props.from} - ${props.to}`} />
            </Title>
          </Budget>
        </Flex>
      </div>
    </div>
  );
};

export default PostInbox;
