import { Icon, Menu, MenuItem, MenuList, Link, Categories, Actions } from './styles';
import logo from './assets/logo.png';
import userIcon from './assets/usuario.svg';
import { NavigationButton } from './NavigationButton';
import { useEffect, useState } from 'react';
import SignUpModal from '../SignUpModal';
import { SignInModal } from 'components/SignInModal';
import { useGetToken, useRemoveToken } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { ICategorie } from '../../types';
import { http } from '../../http';

const Header = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [categories, setCategories] = useState<ICategorie[]>([]);
  const navigate = useNavigate();
  const removeToken = useRemoveToken();
  const getToken = useGetToken();

  const token = getToken();
  const [userLogged, setUserLogged] = useState(!!token);

  useEffect(() => {
    http.get('/categorias').then((res) => {
      setCategories(res.data);
    });
  }, []);

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
    <>
      <li>
        <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignInModal(true)}>
          Login
        </NavigationButton>
        <SignInModal open={openSignInModal} onClose={() => setOpenSignInModal(false)} onLogin={onLogin} />
      </li>
      <li>
        <NavigationButton imgSrc={userIcon} alt="Icone de um usuario" onClick={() => setOpenSignUpModal(true)}>
          Cadastro
        </NavigationButton>
        <SignUpModal open={openSignUpModal} onClose={() => setOpenSignUpModal(false)} />
      </li>
    </>
  );

  return (
    <Menu>
      <Link to="/">
        <Icon src={logo} alt="Logo da Alurabooks" />
      </Link>
      <MenuList>
        <MenuItem>Categorias</MenuItem>
        <Categories>
          {categories.map((categorie) => (
            <li key={categorie.id}>
              <Link to={`/categorias/${categorie.slug}`}>{categorie.nome}</Link>
            </li>
          ))}
        </Categories>
      </MenuList>
      <Actions>{userLogged ? loggedInActions : loggedOutActions}</Actions>
    </Menu>
  );
};
export default Header;
