import { useParams } from 'react-router-dom';
import MainTitle from '../MainTitle';
import { useQuery } from 'react-query';
import { getCategoryBySlug } from '../../http';
import Loader from '../Loader';
import { LoaderWrapper } from './styles';

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
    </section>
  );
};
export default Category;
