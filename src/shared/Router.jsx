import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<MainPage />} />
        <Route path='/movie/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
