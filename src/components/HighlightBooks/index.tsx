import { Section, Image, Books } from './HighlightBooks.styles';
import { IBook } from '../../types';
import { useState } from 'react';
import { AbCard } from 'alurabooks-ds-gb';
import Book from './Book';

export interface HighlightBooksProps {
  books: IBook[];
}

const HighlightBooks = ({ books }: HighlightBooksProps) => {
  const [selectedBook, setSelectedBook] = useState(books[0]);
  return (
    <Section>
      <Books>
        {books.map((book) => (
          <Image
            key={book.nome}
            src={book.imagem}
            alt={`Capa do livro ${book.nome} escrito por ${book.autor}`}
            selected={selectedBook.nome === book.nome}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </Books>
      <AbCard>
        <Book {...selectedBook} />
      </AbCard>
    </Section>
  );
};
export default HighlightBooks;
