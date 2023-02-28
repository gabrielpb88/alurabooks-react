import styled from 'styled-components';

export const PageWrapper = styled.section`
  width: 80%;
  padding-top: 5rem;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;

  img {
    height: 500px;
  }

  section {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    article {
      margin: 0;
    }
  }
`;

export const Header = styled.h3`
  border-bottom: 1px solid #eb9b00;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 24px;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  padding: 1rem 0;
  color: rgba(0, 0, 0, 0.85);
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  label {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
`;

export const Footer = styled.div`
  padding: 1rem 0;
`;

export const Observation = styled.span`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 700;
  font-size: 14px;
  margin-top: 1rem;
  display: inline-block;
`;

export const OptionHeader = styled.p`
  font-weight: 700;
  color: #002f52;
`;
