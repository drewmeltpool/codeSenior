import React from 'react';

import { Navbar, NavbarMenu, NavbarBox } from 'src/view/common/NavBar';

import Icon from 'src/view/common/Icon';
import Button from 'src/view/common/Button';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import Flex from 'src/view/common/Flex';
import Text from 'src/view/common/Text';

const NavBarCommon: React.FC = () => {
  return (
    <Navbar>
      <Logo />
      <NavbarBox>
        <Flex gap="20px">
          <Link to="sign-up">
            <Button variant="primary">
              <Text tag="span">Sign up</Text>
              <Icon icon="angle-right" />
            </Button>
          </Link>
          <Link to="sign-in">
            <Button variant="outline-primary">
              <Text tag="span">Sign in</Text>
              <Icon icon="user" />
            </Button>
          </Link>
        </Flex>
      </NavbarBox>
      <NavbarMenu>
        <Link to="sign-up">
          <Button size="medium" variant="primary">
            <Text tag="span">Sign up</Text>
            <Icon icon="angle-right" size="lg" />
          </Button>
        </Link>
        <Link to="sign-in">
          <Button size="medium" variant="outline-primary">
            <Text tag="span">Sign in</Text>
            <Icon icon="user" size="lg" />
          </Button>
        </Link>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarCommon;
