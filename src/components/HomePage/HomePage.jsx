import React from 'react';
import { useState, useEffect } from 'react';
import fetchMovies from '../Service/Service';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
const HomePage = () => {
  const [arrayMovies, setarrayMovies] = useState([]);

  const showMoviesArray = async () => {
    const response = await fetchMovies('/trending/all/day');
    setarrayMovies(() => response.results);
  };

  useEffect(() => {
    showMoviesArray();
  }, []);
  return (
    <div className={styles.HomePage}>
      <span className={styles.HomePageTitle}>The most popular movies</span>
      <div className={styles.HomePageMovies}>
        {arrayMovies.map(movie => {
          return (
            <Link to={`/movies/${movie.id}`}>
              <div className={styles.MovieCard} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    movie.poster_path || movie.backdrop_path
                  }`}
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
