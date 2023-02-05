import { Banner } from '../../components/Banner';
import React, { useState } from 'react';
import { Input } from '../../components/Input';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Outlet } from 'react-router-dom';

const DefaultPage = () => {
  const [busca, setBusca] = useState('');
  return (
    <>
      <Header />
      <Banner
        titulo="Já sabe por onde começar?"
        subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!">
        <Input placeholder="Qual será sua próxima leitura?" value={busca} onChange={(e) => setBusca(e.target.value)} />
      </Banner>
      <Outlet />
      <Footer />
    </>
  );
};
export default DefaultPage;
