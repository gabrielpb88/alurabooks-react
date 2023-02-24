import { useParams } from 'react-router-dom';
import MainTitle from '../MainTitle';
import { useQuery } from 'react-query';
import { getCategoryBySlug } from '../../http';
import Loader from '../Loader';
import { LoaderWrapper } from './styles';
import ListBooks from '../ListBooks';

const Category = () => {
  const params = useParams();
  const { data, isLoading } = useQuery(['categoriaPorSlug', params.slug], () => getCategoryBySlug(params.slug || ''));

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <section>
      <MainTitle text={data.nome} />
      <ListBooks categorie={data} />
    </section>
  );
};
export default Category;
