import { Section, Image, Books } from './styles';
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
            key={book.titulo}
            src={book.imagemCapa}
            alt={`Capa do livro ${book.titulo} escrito por ${book.autor}`}
            selected={selectedBook.titulo === book.titulo}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </Books>
      <AbCard>
        <Book book={selectedBook} />
      </AbCard>
    </Section>
  );
};
export default HighlightBooks;
