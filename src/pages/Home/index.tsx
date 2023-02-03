import { Banner } from '../../components/Banner';
import React, { useState } from 'react';
import { Input } from '../../components/Input';
import Header from '../../components/Header';

const Home = () => {
  const [busca, setBusca] = useState('');
  return (
    <>
      <Header />
      <Banner
        titulo="Já sabe por onde começar?"
        subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!">
        <Input placeholder="Qual será sua próxima leitura?" value={busca} onChange={(e) => setBusca(e.target.value)} />
      </Banner>
    </>
  );
};
export default Home;
