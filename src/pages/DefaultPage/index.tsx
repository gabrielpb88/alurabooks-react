import React from 'react';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Outlet } from 'react-router-dom';

const DefaultPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default DefaultPage;
