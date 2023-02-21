import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import { Footer } from '../../components/Footer';
import { Outlet } from 'react-router-dom';

const DefaultPage = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default DefaultPage;
