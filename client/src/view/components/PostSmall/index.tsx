import moment from 'moment';
import React, { useCallback } from 'react';
import { Colors } from 'src/constants';
import Budget from 'src/view/common/Budget';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import Flex from 'src/view/common/Flex';
import Button from 'src/view/common/Button';
import { useConfirm, useRequest } from 'src/view/hooks';
import { recruiterOperation } from 'src/redux/feature/recruiter';
import { useDispatch } from 'react-redux';
import { Modal, useModal } from 'src/view/common/Modal';
import CreatePost from '../CreatePost';

import * as api from 'src/api';
import FlatList from 'src/view/common/FlatList';
import { Link } from 'react-router-dom';
import Avatar from 'src/view/common/Avatar';
import Typography from 'src/view/common/Typography';
import { userName } from 'src/utils';

const PostSmall: React.FC<any> = (props) => {
  const [isOpen, setOpen] = useModal(false);
  const { handleOpen } = useConfirm();
  const dispatch = useDispatch();
  const handleDeletePost = useCallback(
    () => dispatch(recruiterOperation.deleteRecruiterPost(props.id)),
    [props.id]
  );

  const { data, loading } = useRequest(() => api.post.candidates(props.id), []);

  console.log({ data, loading });

  const toggleModal = (state: boolean) => () => setOpen(state);

  const handleSubmit = (values: any) => {
    dispatch(recruiterOperation.updateRecruiterPost(props.id, values));
    setOpen(false);
  };

  return (
    <div className="post post--small">
      <div className="post-inner">
        <Flex gap="8px">
          <Button
            onClick={() => handleOpen('Delete this post', handleDeletePost)}
          >
            <Budget variant={Colors.PINK}>
              <Icon icon="trash" />
              <Text tag="span" title="Delete" />
            </Budget>
          </Button>
          <Button onClick={toggleModal(true)}>
            <Budget variant={Colors.BLUE}>
              <Icon icon="file" />
              <Text tag="span" title="Update" />
            </Budget>
          </Button>
        </Flex>
        <Title variant="medium">{props.position}</Title>
        <Title variant="small">{props.title}</Title>
        <Flex gap="12px">
          <Budget variant={Colors.GREEN}>
            <Title variant="small">
              <Icon icon="coins" />
              <Text tag="span" title={`${props.from} - ${props.to}`} />
            </Title>
          </Budget>
          <Budget
            variant={Colors.LIGHT_BLUE}
            title={moment(props.postDate).fromNow()}
          />
        </Flex>
        <Typography variant="body1" title={props.description} />

        {!!data?.length && (
          <Typography variant="body-bold" title="Candidates" />
        )}
        {!loading && (
          <FlatList
            data={data}
            setKey={({ id }) => id}
            component={(props) => (
              <Link to={`/user/${props.id}`}>
                <Flex gap="4px" alignItems="center">
                  <Avatar size="sm" title={props.firstName} />
                  <Flex direction="column">
                    <Typography variant="caption" title={props.title} />
                    <Typography variant="caption" title={userName(props)} />
                  </Flex>
                </Flex>
              </Link>
            )}
            tag="div"
            className="list"
          />
        )}
      </div>
      <Modal size="m" isOpen={isOpen} closeModal={toggleModal(false)}>
        {() => (
          <Modal.Box>
            <Button
              onClick={toggleModal(false)}
              rounded
              className="edit-modal-btn"
              title={<Icon icon="times" size="lg" />}
            />
            <CreatePost onSubmit={handleSubmit} initialValues={props} />
          </Modal.Box>
        )}
      </Modal>
    </div>
  );
};

export default PostSmall;
