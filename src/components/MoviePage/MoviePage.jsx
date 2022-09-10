import React from 'react';
import { useState, useEffect } from 'react';
import fetchMovies from '../Service/Service';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MovieCast from './MovieCast/MovieCast';

const MoviePage = id => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  const getMovie = async () => {
    const response = await fetchMovies(`/movie/${movieId}`);
    console.log(response);
    setMovie(() => response);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <Link to="/">Go to home</Link>
      <img
        style={{ width: '200px', height: '200px' }}
        src={
          `https://image.tmdb.org/t/p/w500/${
            movie.backdrop_path || movie.poster_path
          }` || '#'
        }
        alt={movie.title || movie.name}
      />
      <span>{movie.title || movie.name}</span>
      <span>User Score: {movie.vote_average * 10}%</span>
      <MovieCast id={616037}></MovieCast>
    </div>
  );
};
export default MoviePage;
