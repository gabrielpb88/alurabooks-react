import { Action, Icon, Menu, Actions, MenuItem, MenuList, StyledHeader, Link } from './Header.styles';
import logo from './assets/logo.png';
import userIcon from './assets/usuario.svg';
import { NavigationButton } from './NavigationButton';
import { useState } from 'react';
import SignUpModal from '../SignUpModal';
import { SignInModal } from 'components/SignInModal';
import { useGetToken, useRemoveToken } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const navigate = useNavigate();
  const removeToken = useRemoveToken();
  const getToken = useGetToken();

  const token = getToken();
  const [userLogged, setUserLogged] = useState(!!token);

  const onLogin = () => {
    setUserLogged(true);
  };

  const logout = () => {
    setUserLogged(false);
    removeToken();
    navigate('/');
  };

  const loggedInActions = (
    <>
      <li>
        <Link to="/minha-conta/pedidos">Minha conta</Link>
      </li>
      <li>
        <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={logout}>
          Logout
        </NavigationButton>
      </li>
    </>
  );

  const loggedOutActions = (
    <Action>
      <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignInModal(true)}>
        Login
      </NavigationButton>
      <SignInModal open={openSignInModal} onClose={() => setOpenSignInModal(false)} onLogin={onLogin} />
      <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignUpModal(true)}>
        Cadastro
      </NavigationButton>
      <SignUpModal open={openSignUpModal} onClose={() => setOpenSignUpModal(false)} />
    </Action>
  );

  return (
    <StyledHeader>
      <Menu>
        <Icon src={logo} alt="Logo da Alurabooks" />
        <MenuList>
          <MenuItem>Categorias</MenuItem>
        </MenuList>
      </Menu>
      <Actions>{userLogged ? loggedInActions : loggedOutActions}</Actions>
    </StyledHeader>
  );
};
export default Header;
