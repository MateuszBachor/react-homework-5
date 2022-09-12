import React from 'react';
import { useState, useEffect } from 'react';
import fetchMovies from '../Service/Service';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import styles from './MoviePage.module.css';

const MoviePage = id => {
  const [movie, setMovie] = useState([]);
  const [production, setProduction] = useState([]);
  const [isCastActive, setIsCastActive] = useState(false);
  const [isReviewsActive, setIsReviewsActive] = useState(false);

  const { movieId } = useParams();
  const getMovie = async () => {
    const response = await fetchMovies(`/movie/${movieId}`);
    setMovie(() => response);
    setProduction(() => response.production_countries);
  };

  useEffect(() => {
    getMovie();
  });
  const CastActive = () => {
    setIsCastActive(() => !isCastActive);
    setIsReviewsActive(() => false);
  };
  const ReviewsActive = () => {
    setIsReviewsActive(() => !isReviewsActive);
    setIsCastActive(() => false);
  };
  return (
    <div className={styles.MoviePageContainer}>
      <div className={styles.infoCard}>
        <img
          className={styles.MoiveImg}
          src={
            `https://image.tmdb.org/t/p/w500/${
              movie.poster_path || movie.backdrop_path
            }` || '#'
          }
          alt={movie.title || movie.name}
        />
        <div className={styles.info}>
          <span>{movie.title || movie.name}</span>
          {production.map(p => {
            return <span>{p.name}</span>;
          })}
          <span>User Score: {(movie.vote_average * 10).toFixed(1)}%</span>
          <span>{movie.overview}</span>
        </div>
      </div>
      <div className={styles.LinkContainer}>
        <Link to="cast">
          <button onClick={CastActive}>Cast</button>
        </Link>
        <Link to="reviews">
          <button onClick={ReviewsActive}>Reviews</button>
        </Link>
      </div>
      {isCastActive && <MovieCast id={movieId} />}
      {isReviewsActive && <MovieReviews id={movieId} />}
    </div>
  );
};
export default MoviePage;
