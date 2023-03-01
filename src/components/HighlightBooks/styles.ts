import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ebecee;
  padding: 2rem 0 4rem 0;
`;

interface ImageProps {
  selected: boolean;
}

export const Books = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Image = styled.img<ImageProps>`
  height: ${(props: ImageProps) => (props.selected ? '240px' : '180px')};
  margin: 0.5rem;
  transition: 0.3s;
`;
