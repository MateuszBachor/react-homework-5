import React from 'react';
import { useState, useEffect } from 'react';
import fetchMovies from '../../Service/Service';
import { useParams } from 'react-router-dom';
import styles from './MovieReviews.module.css';
import Readmore from './Readmore';

const MovieReviews = id => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = () => {
      const getReviews = async () => {
        const response = await fetchMovies(`/movie/${movieId}/reviews`);
        console.log(response);
        setReviews(() => response.results);
      };
      getReviews();
    };
    fetchData();
  });
  if (reviews.length >= 1) {
    return reviews.map(review => {
      return (
        <div className={styles.reviewCard}>
          <span className={styles.author}>{review.author} -</span>
          <Readmore>{review.content}</Readmore>
        </div>
      );
    });
  } else {
    return <div style={(color: 'white')}>No reviews available</div>;
  }
};

export default MovieReviews;
