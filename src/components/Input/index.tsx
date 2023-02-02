import styled from 'styled-components';
import search from 'assets/search.svg';

export const Input = styled.input`
  background-color: transparent;
  color: #fff;
  width: 37rem;
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1.5rem;
  outline: none;
  border: 1px solid #fff;
  border-radius: 1.3rem;
  text-align: center;

  ::placeholder {
    background: url(${search}) no-repeat;
    background-position-x: 8.5rem;
    color: #fff;
  }
`;
