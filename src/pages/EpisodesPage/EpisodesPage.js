import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.js';

import styles from './EpisodesPage.module.css';
// import sprite from '../../assets/img/sprite.svg';

function EpisodesPage() {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Header></Header>
      </div>
    </React.Fragment>
  );
}
export default EpisodesPage;
