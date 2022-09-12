import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { ImHome } from 'react-icons/im';
import { ImSearch } from 'react-icons/im';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link className={styles.navLink} to="/search">
            <ImSearch />
          </Link>
          <Link className={styles.navLink} to="/">
            <ImHome />
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
