import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.js';

import styles from './LocationPage.module.css';
// import sprite from '../../assets/img/sprite.svg';

function LocationPage() {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Header></Header>
      </div>

      <ul className={styles.filter__list}>
        <li className={styles.filter__item}>
          <button className={styles.button}>Name</button>
        </li>
        <li className={styles.filter__item}>
          <button className={styles.button}>Type</button>
        </li>
        <li className={styles.filter__item}>
          <button className={styles.button}>Dimension</button>
        </li>
        {/* <li class="filter__item">
          <button class="button" type="button">
            Дизайн
          </button>
        </li> */}
      </ul>
    </React.Fragment>
  );
}
export default LocationPage;
