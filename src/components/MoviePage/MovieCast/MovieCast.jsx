import React from 'react';
import { useState, useEffect } from 'react';
import fetchMovies from '../../Service/Service';
import ShowCast from './MovieCast2';
import { useParams } from 'react-router-dom';

const MovieCast = ({ id }) => {
  const [castArray, setCastArray] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = () => {
      const getCast = async () => {
        const response = await fetchMovies(`/movie/${movieId}/credits`);
        setCastArray(() => response.cast);
      };
      getCast();
    };
    fetchData();
  }, []);

  return (
    <div>
      <ShowCast array={castArray} />
    </div>
  );
};
export default MovieCast;
