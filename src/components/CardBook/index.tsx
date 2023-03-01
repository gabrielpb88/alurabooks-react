import { AbButton } from 'alurabooks-ds-gb';
import { BookWrapper, Title } from './styles';
import { IBook } from '../../types';
import { formatPrice, getLowestPrice } from '../../utils';
import { useNavigate } from 'react-router-dom';

interface CardBookProps {
  book: IBook;
}

const CardBook = ({ book }: CardBookProps) => {
  const navigate = useNavigate();

  return (
    <BookWrapper>
      <img src={book.imagemCapa} alt={book.descricao} />
      <Title>{book.titulo}</Title>
      <p>A partir de:</p>
      <strong>{formatPrice(getLowestPrice(book))}</strong>
      <AbButton onClick={() => navigate(`/livros/${book.id}`)}>Comprar</AbButton>
    </BookWrapper>
  );
};
export default CardBook;
