import { AbButton } from 'alurabooks-ds-gb';
import { BookWrapper, Title } from './styles';
import { IBook } from '../../types';
import { formatPrice, getLowestPrice } from '../../utils';

interface CardBookProps {
  book: IBook;
  onClick?: () => void;
}

const CardBook = ({ book, onClick }: CardBookProps) => {
  return (
    <BookWrapper>
      <img src={book.imagemCapa} alt={book.descricao} />
      <Title>{book.titulo}</Title>
      <p>A partir de:</p>
      <strong>{formatPrice(getLowestPrice(book))}</strong>
      <AbButton onClick={onClick}>Comprar</AbButton>
    </BookWrapper>
  );
};
export default CardBook;
