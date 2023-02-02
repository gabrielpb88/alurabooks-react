import styled from 'styled-components';
import background from './assets/fundo.png';

export const StyledBanner = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2.5rem;

  text-align: center;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  font-weight: 500;
`;
