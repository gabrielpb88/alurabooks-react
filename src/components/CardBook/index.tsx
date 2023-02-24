import { AbButton } from 'alurabooks-ds-gb';
import { BookWrapper, Title } from './styles';
import { IBook } from '../../types';

interface CardBookProps {
  book: IBook;
}

const CardBook = ({ book }: CardBookProps) => {
  return (
    <BookWrapper>
      <img src={book.imagemCapa} alt={book.descricao} />
      <Title>{book.titulo}</Title>
      <p>A partir de:</p>
      <strong>
        {Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'brl',
        }).format(book.opcoesCompra[0].preco)}
      </strong>
      <AbButton>Comprar</AbButton>
    </BookWrapper>
  );
};
export default CardBook;
