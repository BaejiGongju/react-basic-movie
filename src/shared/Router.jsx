import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from '../components/MovieList';
import Movie from '../components/Movie';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/:id' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
