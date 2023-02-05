import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--branco);

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    padding: 2em 0;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
`;

export const List = styled.ul`
  display: none;
  list-style: none;
  color: #858585;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
