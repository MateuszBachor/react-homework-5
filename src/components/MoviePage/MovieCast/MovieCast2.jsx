import React from 'react';
import styles from './MovieCast.module.css';

const ShowCast = ({ array }) => {
  const isFoto = elem => {
    if (elem === null) {
      return false;
    }
    return true;
  };
  return array.map(elem => {
    return (
      <div className={styles.castCard} key={elem.id}>
        {' '}
        <img
          style={{ width: '200px', height: '200px' }}
          src={
            isFoto(elem.profile_path)
              ? `https://image.tmdb.org/t/p/w500/${elem.profile_path}`
              : 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'
          }
          alt={elem.name}
        />
        <span>
          {elem.character} - {elem.name}
        </span>
      </div>
    );
  });
};
export default ShowCast;
