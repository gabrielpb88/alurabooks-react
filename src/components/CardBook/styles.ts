import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

export const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 200px;
  }

  h2 {
    font-size: 18px;
    margin-top: 1rem;
  }

  p {
    font-size: 24px;
  }

  strong {
    font-size: 24px;
    font-weight: 700;
  }

  button {
    margin-top: 1rem;
    width: 100%;
  }
`;
