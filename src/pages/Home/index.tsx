import Title from 'components/Title';
import HighlightBooks from 'components/HighlightBooks';
import Newsletter from 'components/Newsletter';
import CategoryGroup from 'components/CategoryGroup';
import { Input } from 'components/Input';
import { Banner } from 'components/Banner';
import React, { useState } from 'react';
import { getBestSellers, getNewReleases } from '../../http';
import { useQuery } from 'react-query';

const Home = () => {
  const { data: lancamentos } = useQuery(['getLivrosLancamentos'], () => getBestSellers());
  const { data: maisVendidos } = useQuery(['getLivrosMaisVendidos'], () => getNewReleases());

  const tags = [
    'Android',
    'Orientação a Objetos',
    'Marketing Digital',
    'Agile',
    'Startups',
    'HTML & CSS',
    'Java',
    'Python',
  ];

  const [busca, setBusca] = useState('');

  return (
    <main>
      <Banner
        titulo="Já sabe por onde começar?"
        subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!">
        <Input placeholder="Qual será sua próxima leitura?" value={busca} onChange={(e) => setBusca(e.target.value)} />
      </Banner>
      <Title>Últimos Lançamentos</Title>
      {lancamentos && <HighlightBooks books={lancamentos} />}

      <Title>Mais vendidos</Title>
      {maisVendidos && <HighlightBooks books={maisVendidos} />}
      <CategoryGroup categories={tags} />
      <Newsletter />
    </main>
  );
};
export default Home;
