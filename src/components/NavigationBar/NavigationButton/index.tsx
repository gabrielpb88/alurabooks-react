import { ReactNode } from 'react';
import { Button } from './styles';

interface NavigationButtonProps {
  imgSrc?: string;
  alt?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const NavigationButton = ({ imgSrc, alt, children, onClick }: NavigationButtonProps) => {
  return (
    <Button onClick={onClick}>
      {imgSrc && <img src={imgSrc} alt={alt} />}
      {children}
    </Button>
  );
};
