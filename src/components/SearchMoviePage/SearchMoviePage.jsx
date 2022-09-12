import React from 'react';
import axios from 'axios';
import styles from './SearchMoviePage.module.css';
import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import MoviesGallery from './SearchGallery';

const SearchMoviePage = () => {
  const [query, setQuery] = useState([]);
  const [arrayMovies, setArrayMovies] = useState([]);
  useEffect(() => {
    showMoviesArray();
  }, [query]);
  const showMoviesArray = async () => {
    const fetchMovies = async query => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=168c87e340b321f808dc48486f6cc30b&query=${query}`
        );

        return response.data;
      } catch (error) {
        console.log('Error: ' + error);
      }
    };
    const response = await fetchMovies(query);
    console.log(response.results);
    setArrayMovies(() => response.results);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    let queryhandleSubmit = form.elements.query.value;
    console.log(queryhandleSubmit);
    setQuery(() => queryhandleSubmit);
    form.reset();
  };

  return (
    <div>
      <Searchbar submitForm={handleSubmit} />
      <div className={styles.MoviesGallery}>
        <MoviesGallery arrayMovie={arrayMovies} />
      </div>
    </div>
  );
};
export default SearchMoviePage;
