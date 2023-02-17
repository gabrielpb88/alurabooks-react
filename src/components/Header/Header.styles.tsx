import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
  padding: 0.5rem;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.img`
  margin: 0 0.5rem;
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  text-transform: uppercase;
`;

export const Actions = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Action = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
`;
