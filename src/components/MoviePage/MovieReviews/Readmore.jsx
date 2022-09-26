import React from 'react';
import { useState } from 'react';
import styles from './Readmore.module.css';

const Readmore = ({ children }) => {
  const [isReadMoreShow, setReadMoreShow] = useState(false);
  const toggleBtn = () => {
    setReadMoreShow(prevState => !prevState);
  };

  return (
    <div className={styles.readmore}>
      {isReadMoreShow ? children : children.substring(0, 150)}
      <button className={styles.btnReadMore} onClick={toggleBtn}>
        {isReadMoreShow ? 'Read less' : '...Read More'}{' '}
      </button>
    </div>
  );
};
export default Readmore;
