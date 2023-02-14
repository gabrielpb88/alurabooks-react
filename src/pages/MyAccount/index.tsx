import { Link, NavLink, Outlet } from 'react-router-dom';
import { AccountWrapper, Head, List, Section } from './MyAccount.styles';

const MyAccount = () => {
  return (
    <AccountWrapper>
      <Head>Minha Conta</Head>
      <Section>
        <List>
          <li>
            <NavLink to="pedidos" style={({ isActive }) => (isActive ? { fontWeight: 700 } : undefined)}>
              Pedidos
            </NavLink>
          </li>
          <li>
            <NavLink to="trocas" style={({ isActive }) => (isActive ? { fontWeight: 700 } : undefined)}>
              Trocas
            </NavLink>
          </li>
          <li>
            <NavLink to="cupons" style={({ isActive }) => (isActive ? { fontWeight: 700 } : undefined)}>
              Cupons
            </NavLink>
          </li>
          <li>
            <NavLink to="seus-dados" style={({ isActive }) => (isActive ? { fontWeight: 700 } : undefined)}>
              Seus dados
            </NavLink>
          </li>
        </List>
        <Outlet />
      </Section>
    </AccountWrapper>
  );
};

export default MyAccount;
