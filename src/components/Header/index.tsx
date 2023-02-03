import { Action, Icon, Menu, Actions, MenuItem, MenuList, StyledHeader } from './Header.styles';
import logo from './assets/logo.png';
import userIcon from './assets/usuario.svg';
import { NavigationButton } from './NavigationButton';

const Header = () => (
  <StyledHeader>
    <Menu>
      <Icon src={logo} alt="Logo da Alurabooks" />
      <MenuList>
        <MenuItem>Categorias</MenuItem>
      </MenuList>
    </Menu>
    <Actions>
      <Action>
        <NavigationButton imgSrc={userIcon} alt="Icone de um usuario">
          Login
        </NavigationButton>
      </Action>
    </Actions>
  </StyledHeader>
);
export default Header;
