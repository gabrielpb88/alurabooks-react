import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Request from './pages/Request';
import Category from './components/Category';
import BookDetails from './pages/BookDetails';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="" element={<Home />} />
          <Route path="/minha-conta" element={<MyAccount />}>
            <Route path="pedidos" element={<Request />} />
          </Route>
          <Route path="/categorias/:slug" element={<Category />} />
          <Route path="/livros/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
