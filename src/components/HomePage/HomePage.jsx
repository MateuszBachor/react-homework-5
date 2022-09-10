import React from 'react';
import { useState, useEffect } from 'react';
import fetchMovies from '../Service/Service';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [arrayMovies, setarrayMovies] = useState([]);

  const location = useLocation();

  const showMoviesArray = async () => {
    const response = await fetchMovies('/trending/all/day');
    console.log(response.results);
    setarrayMovies(() => response.results);
  };

  useEffect(() => {
    showMoviesArray();
  }, []);
  return arrayMovies.map(arrayMovies => {
    return (
      <li key={arrayMovies.id}>
        <Link to={`/movies/${arrayMovies.id}`} state={{ from: location }}>
          {arrayMovies.title || arrayMovies.name}
        </Link>
      </li>
    );
  });
};
export default HomePage;
