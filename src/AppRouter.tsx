import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
