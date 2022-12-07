import React from 'react';
import { useState, useEffect } from 'react';
import fetchMovies from '../Service/Service';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import styles from './MoviePage.module.css';

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const [production, setProduction] = useState([]);
  const [isCastActive, setIsCastActive] = useState(false);
  const [isReviewsActive, setIsReviewsActive] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      let response = await fetchMovies(`/movie/${movieId}`);
      console.log(response);
      if (response === undefined) {
        response = await fetchMovies(`/trending/all/day`);
        console.log(
          response.results.find(id => id.id.toString() === movieId.toString())
        );
        const movie = response.results.find(
          id => id.id.toString() === movieId.toString()
        );
        setMovie(() => movie);
      } else {
        setMovie(() => response);
        setProduction(() => response.production_countries);
      }
    };
    getMovie();
  }, [movieId]);
  const CastActive = () => {
    setIsCastActive(() => !isCastActive);
    setIsReviewsActive(() => false);
  };
  const ReviewsActive = () => {
    setIsReviewsActive(() => !isReviewsActive);
    setIsCastActive(() => false);
  };
  console.log(movie);
  if (movie === []) {
    return <div>asd</div>;
  } else {
    return (
      <div className={styles.MoviePageContainer}>
        <div className={styles.infoCard}>
          <img
            className={styles.MoiveImg}
            src={
              `https://image.tmdb.org/t/p/w500/${
                movie.poster_path || movie.backdrop_path
              }` ||
              'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'
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
            <button className={styles.btnDetailPage} onClick={CastActive}>
              Cast
            </button>
          </Link>
          <Link to="reviews">
            <button className={styles.btnDetailPage} onClick={ReviewsActive}>
              Reviews
            </button>
          </Link>
        </div>
        {isCastActive && <MovieCast id={movieId} />}
        {isReviewsActive && <MovieReviews id={movieId} />}
      </div>
    );
  }
};
export default MoviePage;
