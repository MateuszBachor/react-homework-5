import React from 'react';
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

const MoviesGallery = ({ arrayMovie }) => {
  const link = movieId => `/movies/${movieId}`;
  const isFoto = elem => {
    if (elem === null) {
      return false;
    }
    return true;
  };
  return arrayMovie.map(movie => {
    return (
      <Link key={movie.id} to={link(movie.id)}>
        <div className={styles.MovieCard}>
          <img
            src={
              isFoto(movie.backdrop_path || movie.poster_path)
                ? `https://image.tmdb.org/t/p/w500/${
                    movie.poster_path || movie.backdrop_path
                  }`
                : 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'
            }
            alt=""
          />
        </div>
      </Link>
    );
  });
};
export default MoviesGallery;
