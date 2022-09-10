import React from 'react';
import fetchMovies from './Service/Service';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviePage from './MoviePage/MoviePage';
import NotFound from './NotFound/NotFound';

export const App = () => {
  const [arrayMovies, setarrayMovies] = useState([]);
  const showMoviesArray = async () => {
    const response = await fetchMovies('/trending/all/day');
    setarrayMovies(() => response.results);
  };
  useEffect(() => {
    showMoviesArray();
  }, []);
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="movies/:movieId"
          element={<MoviePage movieId={arrayMovies.id} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
