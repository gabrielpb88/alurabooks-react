import { IBook } from '../types';

export const getLowestPrice = (book: IBook): number => {
  return book.opcoesCompra.reduce(
    (previous, current) => (current.preco < previous ? current.preco : previous),
    book.opcoesCompra[0].preco,
  );
};
