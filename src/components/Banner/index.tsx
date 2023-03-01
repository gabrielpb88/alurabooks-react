import { ReactNode } from 'react';
import { StyledBanner, SubTitle, Title } from './styles';

export interface BannerProps {
  titulo?: string;
  subtitulo?: string;
  children?: ReactNode;
}

export const Banner = ({ titulo, subtitulo, children }: BannerProps) => {
  return (
    <StyledBanner>
      <Title>{titulo}</Title>
      <SubTitle>{subtitulo}</SubTitle>
      {children}
    </StyledBanner>
  );
};
