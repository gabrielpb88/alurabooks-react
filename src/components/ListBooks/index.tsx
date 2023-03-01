import { ICategorie } from 'types';
import { useQuery } from 'react-query';
import { getBooksByCategory } from '../../http';
import CardBook from '../CardBook';
import { BooksWrapper } from './styles';

interface ListBooksProps {
  categorie: ICategorie;
}

const ListBooks = ({ categorie }: ListBooksProps) => {
  const { data: products } = useQuery(['getBooksByCategory', categorie.slug], () => getBooksByCategory(categorie));
  return (
    <BooksWrapper>
      {products?.map((product) => (
        <CardBook book={product} key={product.id} />
      ))}
    </BooksWrapper>
  );
};
export default ListBooks;
