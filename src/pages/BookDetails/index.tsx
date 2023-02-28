import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getAuthor, getBook } from '../../http';
import MainTitle from '../../components/MainTitle';
import {
  ContentWrapper,
  DescriptionWrapper,
  Footer,
  Header,
  Observation,
  OptionHeader,
  PageWrapper,
  Paragraph,
} from './styles';
import Loader from '../../components/Loader';
import { AbOptionsGroup, AbAmountInput, AbButton } from 'alurabooks-ds-gb';
import { useState } from 'react';

const BookDetails = () => {
  const params = useParams();
  const [amount, setAmount] = useState(0);

  const { data, isLoading } = useQuery(['getBook', params.id], () => getBook(params.id || ''));
  const { data: author } = useQuery(['', data?.autor], () => getAuthor(data?.autor));

  console.log(data);

  if (!data || isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <MainTitle text="Detalhes do livro" />
      <PageWrapper>
        <ContentWrapper>
          <img src={data.imagemCapa} alt={data.descricao} />
          <DescriptionWrapper>
            <div>
              <h2>{data.titulo}</h2>
              <h3>{data.descricao}</h3>
              <span>Por: {author && author.nome}</span>
            </div>
            <OptionHeader>Selecione o formato do seu livro: </OptionHeader>
            <div>
              <AbOptionsGroup
                options={data.opcoesCompra.map((opcao) => ({
                  id: opcao.id,
                  title: opcao.titulo,
                  body: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'brl' }).format(opcao.preco),
                  footer: opcao.formatos ? opcao.formatos + '' : '',
                }))}
              />
              <Observation>*Você terá acesso às futuras atualizações do livro.</Observation>
            </div>
            <label>Quantidade</label>
            <AbAmountInput onChange={setAmount} value={amount} />
            <div>
              <AbButton>Comprar</AbButton>
            </div>
          </DescriptionWrapper>
        </ContentWrapper>
        <Footer>
          <Header>Sobre o Autor</Header>
          {author && <Paragraph>{author.sobre}</Paragraph>}
          <Header>Sobre o Livro</Header>
          <Paragraph>{data.sobre}</Paragraph>
        </Footer>
      </PageWrapper>
    </section>
  );
};

export default BookDetails;
