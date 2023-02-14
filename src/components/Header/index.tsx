import { Action, Icon, Menu, Actions, MenuItem, MenuList, StyledHeader, Link } from './Header.styles';
import logo from './assets/logo.png';
import userIcon from './assets/usuario.svg';
import { NavigationButton } from './NavigationButton';
import { useState } from 'react';
import SignUpModal from '../SignUpModal';
import { SignInModal } from 'components/SignInModal';
import { useGetToken } from '../../hooks';

const Header = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);

  const token = useGetToken();
  const [userLogged, setUserLogged] = useState(!!token);

  const onLogin = () => {
    setUserLogged(true);
  };

  return (
    <StyledHeader>
      <Menu>
        <Icon src={logo} alt="Logo da Alurabooks" />
        <MenuList>
          <MenuItem>Categorias</MenuItem>
        </MenuList>
      </Menu>
      <Actions>
        {!userLogged && (
          <Action>
            <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignInModal(true)}>
              Login
            </NavigationButton>
            <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignUpModal(true)}>
              Cadastro
            </NavigationButton>
          </Action>
        )}
        {userLogged && (
          <>
            <li>
              <Link to="/minha-conta/pedidos">Minha conta</Link>
            </li>
          </>
        )}
      </Actions>
      <SignUpModal open={openSignUpModal} onClose={() => setOpenSignUpModal(false)} />
      <SignInModal open={openSignInModal} onClose={() => setOpenSignInModal(false)} onLogin={onLogin} />
    </StyledHeader>
  );
};
export default Header;
