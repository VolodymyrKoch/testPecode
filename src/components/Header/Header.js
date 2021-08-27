import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
// import sprite from '../../assets/img/sprite.svg';

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" alt=" " className={styles.logoLink}>
        <h1> Rick and Morty TV series</h1>
      </Link>
      <nav>
        <ul className={styles.list}>
          <Link to="/characters" alt=" " className={styles.item}>
            <li>Characters</li>
          </Link>
          <Link to="/episodes" alt=" " className={styles.item}>
            <li>Episodes</li>
          </Link>
          <Link to="/location" alt=" " className={styles.item}>
            <li>Location</li>
          </Link>
          <Link to="/my_list" alt=" " className={styles.item}>
            <li>MyWatchList</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
