import styled from 'styled-components';

export const NewsletterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #002f52;

  h5 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }

  input::placeholder {
    color: #002f52;
    padding-left: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  display: inline;
  max-width: 40%;
  margin-right: 3rem;
`;
