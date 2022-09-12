import React from 'react';
import { lazy } from 'react';
import fetchMovies from './Service/Service';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviePage = lazy(() => import('./MoviePage/MoviePage'));
const SearchMoviePage = lazy(() => import('./SearchMoviePage/SearchMoviePage'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MovieCast = lazy(() => import('./MoviePage/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./MoviePage/MovieReviews/MovieReviews')
);
const NotFound = lazy(() => import('./NotFound/NotFound'));

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
          <Route path="movies" element={<SearchMoviePage />} />
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
