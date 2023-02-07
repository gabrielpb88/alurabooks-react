import { ButtonWrapper, CardDescription, CardEm, CardPrice, CardTitle, Footer, H4 } from './Book.styles';
import { AbButton } from 'alurabooks-ds-gb';

export interface BookProps {
  nome: string;
  descricao: string;
  autor: string;
  preco: number;
}

const Book = ({ nome, descricao, autor, preco }: BookProps) => (
  <>
    <H4>Sobre o livro:</H4>
    <CardTitle>{nome}</CardTitle>
    <CardDescription>{descricao}</CardDescription>
    <CardDescription>Por: {autor}</CardDescription>
    <Footer>
      <div>
        <CardEm>A partir de:</CardEm>
        <CardPrice>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'brl' }).format(preco)}</CardPrice>
      </div>
      <ButtonWrapper>
        <AbButton>Comprar</AbButton>
      </ButtonWrapper>
    </Footer>
  </>
);
export default Book;
