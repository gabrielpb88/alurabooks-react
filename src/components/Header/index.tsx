import { Action, Icon, Menu, Actions, MenuItem, MenuList, StyledHeader } from './Header.styles';
import logo from './assets/logo.png';
import userIcon from './assets/usuario.svg';
import { NavigationButton } from './NavigationButton';
import { useState } from 'react';
import SignUpModal from '../SignUpModal';
import { SignInModal } from 'components/SignInModal';

const Header = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);

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
          <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignInModal(true)}>
            Login
          </NavigationButton>
          <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignUpModal(true)}>
            Cadastro
          </NavigationButton>
        </Action>
      </Actions>
      <SignUpModal open={openSignUpModal} onClose={() => setOpenSignUpModal(false)} />
      <SignInModal open={openSignInModal} onClose={() => setOpenSignInModal(false)} />
    </StyledHeader>
  );
};
export default Header;
