import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    list-style: none;
  }
`;

export const Icon = styled.img`
  margin: 0 0.5rem;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: relative;

  :hover > li {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    color: #fff;
  }

  :hover ul {
    display: block;
  }
`;

export const MenuItem = styled.li`
  padding: 1rem;
  text-transform: uppercase;

  //:hover {
  //  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  //  color: #fff;
  //}
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
`;

export const Categories = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  background-color: #fff;

  li {
    padding: 1rem;

    :hover {
      background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
      color: #fff;
    }
  }
`;

export const Actions = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
