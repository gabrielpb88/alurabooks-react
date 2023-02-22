import { Title } from './styles';

interface MainTitleProps {
  text: string;
}

const MainTitle = ({ text }: MainTitleProps) => {
  return <Title>{text}</Title>;
};
export default MainTitle;
