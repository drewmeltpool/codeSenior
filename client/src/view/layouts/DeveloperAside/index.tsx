import React from 'react';
import { useDispatch } from 'react-redux';
import { userOperation } from 'src/redux/feature/user';
import Button from 'src/view/common/Button';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import { Aside, Container } from 'src/view/components/Wrapper';

const DeveloperAside: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const handleExit = () => dispatch(userOperation.exitUser());

  return (
    <Container className="content">
      <Aside.Aside>
        <Aside.Box>
          <Title variant="medium" title="Navigation" />
          <Aside.Item>
            <Aside.Link to="/">
              <Icon icon="home" />
              <Text tag="span" title="Home" />
            </Aside.Link>
          </Aside.Item>
          <Aside.Item>
            <Aside.Link to="/post">
              <Icon icon="list" />
              <Text tag="span" title="Post" />
            </Aside.Link>
          </Aside.Item>
          <Aside.Item>
            <Aside.Link to="/inbox">
              <Icon icon="inbox" />
              <Text tag="span" title="Inbox" />
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
export default DeveloperAside;
