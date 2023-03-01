import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 80%;
  margin: 4rem auto;
`;

export const List = styled.ul`
  list-style: none;

  li {
    border-bottom: 1px solid #c4c4c4;
    padding: 0.5rem 2rem;
    text-align: center;

    a {
      text-decoration: none;
      color: #002f52;
    }
  }
`;

export const Head = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  text-align: center;
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  color: #fff;
  padding: 2rem;
`;

export const AccountWrapper = styled.section`
  margin: 2rem 0 12rem 0;
`;
