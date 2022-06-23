import React, { useState } from 'react';
import { Menu, MenuCloseButton } from 'src/view/common/Menu';
import Burger from 'src/view/components/Burger';
import Flex from 'src/view/common/Flex';

const NavBarMenu: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (flag: boolean) => () => setOpen(flag);

  return (
    <div className="navbar__menu">
      <Burger onClick={handleClick(true)} />
      <Menu isOpen={open} onClick={handleClick(false)}>
        <MenuCloseButton />
        <Flex gap="20px" direction="column" alignItems="center">
          {children}
        </Flex>
      </Menu>
    </div>
  );
};

export default NavBarMenu;
