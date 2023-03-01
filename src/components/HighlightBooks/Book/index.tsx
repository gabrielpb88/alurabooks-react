import { ButtonWrapper, CardDescription, CardEm, CardPrice, CardTitle, Footer, H4 } from './styles';
import { AbButton } from 'alurabooks-ds-gb';
import { IBook } from '../../../types';
import { formatPrice, getLowestPrice } from 'utils';
import { useQuery } from 'react-query';
import { getAuthor } from '../../../http';
import { useNavigate } from 'react-router-dom';

export interface BookProps {
  book: IBook;
}

const Book = ({ book }: BookProps) => {
  const { data: author } = useQuery(['getAuthor', book.autor], () => getAuthor(book.autor));
  const navigate = useNavigate();

  return (
    <>
      <H4>Sobre o livro:</H4>
      <CardTitle>{book.titulo}</CardTitle>
      <CardDescription>{book.descricao}</CardDescription>
      <CardDescription>Por: {author && author.nome}</CardDescription>
      <Footer>
        <div>
          <CardEm>A partir de:</CardEm>
          <CardPrice>{formatPrice(getLowestPrice(book))}</CardPrice>
        </div>
        <ButtonWrapper>
          <AbButton onClick={() => navigate(`/livros/${book.id}`)}>Comprar</AbButton>
        </ButtonWrapper>
      </Footer>
    </>
  );
};
export default Book;
