import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import { Navbar, NavbarMenu, NavbarBox, NavLink } from 'src/view/common/NavBar';
import Icon from 'src/view/common/Icon';
import Button from 'src/view/common/Button';
import Text from 'src/view/common/Text';
import Avatar from 'src/view/common/Avatar';
import { Dropdown, DropdownOption } from 'src/view/common/Dropdown';
import Flex from 'src/view/common/Flex';
import Typography from 'src/view/common/Typography';
import { Colors } from 'src/constants';

const NavBarCommon: React.FC = () => {
  const { user } = useSelector((s) => s) as any;

  return (
    <Navbar>
      <Logo />

      <NavbarBox>
        <NavLink to="/post">
          <Icon icon="list" size="lg" />
          <Text tag="span" title="Post" />
        </NavLink>

        <Dropdown
          controller={
            <Flex gap="8px" alignItems="center">
              <Avatar image={user.image} title={user.firstName} size="sm" />
              <Flex direction="column" alignItems="flex-start">
                <Typography variant="caption" title={user.firstName} />
                <Typography
                  color={Colors.BLUE}
                  variant="body1"
                  title={user.email}
                />
              </Flex>
            </Flex>
          }
        >
          <DropdownOption>
            <Link to="/profile">
              <Typography variant="body-bold" title="Profile" />
            </Link>
          </DropdownOption>
          <DropdownOption>
            <Link to="/post">
              <Typography variant="body-bold" title="Posts" />
            </Link>
          </DropdownOption>
          <DropdownOption>
            <Link to="/inbox">
              <Typography variant="body-bold" title="Inbox" />
            </Link>
          </DropdownOption>
        </Dropdown>
      </NavbarBox>
      <NavbarMenu>
        <Link to="/profile">
          <Button variant="box">
            <Icon icon="angle-right" size="lg" />
          </Button>
        </Link>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarCommon;
