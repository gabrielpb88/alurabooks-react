import { ButtonWrapper, CardDescription, CardEm, CardPrice, CardTitle, Footer, H4 } from './styles';
import { AbButton } from 'alurabooks-ds-gb';
import { IBook } from '../../../types';

export interface BookProps {
  book: IBook;
}

const Book = ({ book }: BookProps) => (
  <>
    <H4>Sobre o livro:</H4>
    <CardTitle>{book.titulo}</CardTitle>
    <CardDescription>{book.descricao}</CardDescription>
    <CardDescription>Por: {book.autor}</CardDescription>
    <Footer>
      <div>
        <CardEm>A partir de:</CardEm>
        <CardPrice>
          {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'brl' }).format(book.opcoesCompra[0].preco)}
        </CardPrice>
      </div>
      <ButtonWrapper>
        <AbButton>Comprar</AbButton>
      </ButtonWrapper>
    </Footer>
  </>
);
export default Book;
