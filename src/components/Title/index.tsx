import { StyledTitle } from './styles';
import { ReactNode } from 'react';

interface TitleProps {
  children?: ReactNode;
}
const Title = ({ children }: TitleProps) => <StyledTitle>{children}</StyledTitle>;

export default Title;
