import styled from 'styled-components';

export const RequestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const RequestWrapper = styled.div`
  margin: 0 0.5rem;
  position: relative;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 5rem;
`;

export const Hr = styled.hr`
  margin: 2rem 0;
  border: 1px solid #002f52;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    padding: 0.5rem 2rem;
    font-weight: 700;
  }
`;
