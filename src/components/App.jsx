import React from 'react';
import fetchMovies from './Service/Service';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviePage from './MoviePage/MoviePage';
import SearchMoviePage from './SearchMoviePage/SearchMoviePage';
import SharedLayout from './SharedLayout/SharedLayout';
import MovieCast from './MoviePage/MovieCast/MovieCast';
import MovieReviews from './MoviePage/MovieReviews/MovieReviews';
import NotFound from './NotFound/NotFound';
import styles from './App.module.css';
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
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchMoviePage />}></Route>
          <Route
            path="movies/:movieId"
            element={<MoviePage movieId={arrayMovies.id} />}
          >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
