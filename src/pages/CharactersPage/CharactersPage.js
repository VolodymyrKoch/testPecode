import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.js';

import styles from './CharactersPage.module.css';
// import sprite from '../../assets/img/sprite.svg';

function CharactersPage() {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Header></Header>
      </div>

      <ul className={styles.filter__list}>
        <li className={styles.filter__item}>
          <button className={styles.button}>Species</button>
        </li>
        <li className={styles.filter__item}>
          <button className={styles.button}>Status</button>
        </li>
        <li className={styles.filter__item}>
          <button className={styles.button}>Gender</button>
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
export default CharactersPage;
