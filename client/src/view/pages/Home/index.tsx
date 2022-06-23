import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/view/common/Button';
import Flex from 'src/view/common/Flex';
import Icon from 'src/view/common/Icon';
import { Container } from 'src/view/components/Wrapper';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import { GetStartSvg } from 'src/view/common/Svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Flex gap="40px" className="hero">
        <GetStartSvg />
        <Flex direction="column" gap="20px" flex={1} justify="center">
          <Title variant="secondary">
            <Icon icon="rocket" />
            <Text tag="span">Get started</Text>
          </Title>
          <Text variant="primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            impedit laudantium nulla officiis, aliquid architecto corporis quam,
            expedita quae sit quisquam nobis mollitia possimus doloribus
            officia. Minima quas quos nam?
          </Text>
          <Flex gap="20px" wrap="wrap">
            <Link to="sign-up">
              <Button size="medium" variant="primary">
                <span>Get started</span>
                <Icon icon="angle-right" size="lg" />
              </Button>
            </Link>
            <Link to="sign-in">
              <Button size="medium" variant="outline-primary">
                <span>I already have account</span>
                <Icon icon="user" size="lg" />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
