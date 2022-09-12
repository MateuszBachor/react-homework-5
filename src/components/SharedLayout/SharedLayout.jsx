import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { ImHome } from 'react-icons/im';
import { ImSearch } from 'react-icons/im';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link className={styles.navLink} to="/movies">
            <ImSearch />
          </Link>
          <Link className={styles.navLink} to="/">
            <ImHome />
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
