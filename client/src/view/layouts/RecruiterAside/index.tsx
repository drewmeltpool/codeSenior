import React from 'react';
import { useDispatch } from 'react-redux';
import { userOperation } from 'src/redux/feature/user';
import Button from 'src/view/common/Button';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import { Aside, Container } from 'src/view/components/Wrapper';

const RecruiterAside: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const handleExit = () => dispatch(userOperation.exitUser());

  return (
    <Container className="content">
      <Aside.Aside>
        <Aside.Box>
          <Title variant="medium" title="Navigation" />
          <Aside.Item>
            <Aside.Link to="/profile">
              <Icon icon="user" />
              <Text tag="span" title="Profile" />
            </Aside.Link>
          </Aside.Item>
          <Aside.Item>
            <Aside.Link to="/my-posts">
              <Icon icon="box" />
              <Text tag="span" title="My posts" />
            </Aside.Link>
          </Aside.Item>
          <Aside.Item>
            <Aside.Link to="/post">
              <Icon icon="list" />
              <Text tag="span" title="Post" />
            </Aside.Link>
          </Aside.Item>
          <Aside.Item>
            <Aside.Link to="/create-post">
              <Icon icon="square-plus" />
              <Text tag="span" title="Create" />
            </Aside.Link>
          </Aside.Item>
        </Aside.Box>
        <Aside.Box>
          <Title variant="medium" title="Controll" />
          <Button
            onClick={handleExit}
            fullWidth
            size="medium"
            variant="outline-primary"
          >
            <Icon icon="door-open" />
            <Text tag="span" title="Exit" />
          </Button>
        </Aside.Box>
      </Aside.Aside>
      {children}
    </Container>
  );
};
export default RecruiterAside;
