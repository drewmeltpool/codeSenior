import React from 'react';

import Logo from '../Logo';
import { Container } from '../Wrapper';
import Text from 'src/view/common/Text';
import Flex from 'src/view/common/Flex';
import Title from 'src/view/common/Title';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className="footer">
      <Container>
        <Flex justify="space-between" gap="40px" wrap="wrap">
          <Flex direction="column">
            <Logo />
            <Text className="copyright">
              &copy; {currentYear} All rights reserved.
            </Text>
          </Flex>
          <Flex gap="30px" wrap="wrap">
            <Flex direction="column">
              <Title variant="medium" title="Website" />
              <Link className="link" to="/sign-in">
                <Text variant="secondary">Login</Text>
              </Link>
              <Link className="link" to="/sign-up">
                <Text variant="secondary">Register</Text>
              </Link>
            </Flex>
            <Flex direction="column">
              <Title variant="medium" title="About us" />
              <Link className="link" to="/">
                <Text variant="secondary">Company</Text>
              </Link>
              <Link className="link" to="/">
                <Text variant="secondary">Team</Text>
              </Link>
              <Link className="link" to="/">
                <Text variant="secondary">Email</Text>
              </Link>
              <Link className="link" to="/">
                <Text variant="secondary">Help us</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
