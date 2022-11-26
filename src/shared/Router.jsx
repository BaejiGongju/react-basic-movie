import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from '../components/MovieList';
import Detail from '../components/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
