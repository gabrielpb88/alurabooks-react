import { Action, Icon, Menu, Actions, MenuItem, MenuList, StyledHeader } from './Header.styles';
import logo from './assets/logo.png';
import userIcon from './assets/usuario.svg';
import { NavigationButton } from './NavigationButton';
import { useState } from 'react';
import SignUpModal from '../SignUpModal';

const Header = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  return (
    <StyledHeader>
      <Menu>
        <Icon src={logo} alt="Logo da Alurabooks" />
        <MenuList>
          <MenuItem>Categorias</MenuItem>
        </MenuList>
      </Menu>
      <Actions>
        <Action>
          <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignUpModal(true)}>
            Login
          </NavigationButton>
          <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignUpModal(true)}>
            Cadastro
          </NavigationButton>
        </Action>
      </Actions>
      <SignUpModal open={openSignUpModal} onClose={() => setOpenSignUpModal(false)} />
    </StyledHeader>
  );
};
export default Header;
