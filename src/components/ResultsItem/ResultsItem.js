import React from 'react';
import PropTypes from 'prop-types';

import styles from './ResultsItem.module.css';
// import sprite from '../../assets/img/sprite.svg';

function ResultsItem({ result, openModal }) {
  return (
    <>
      <li className={styles.resultsItem}>
        <button onClick={() => openModal(result.id)}>
          <div className={styles.cardImage}>
            <img src={result.image} alt={result.name} />
            <div className={styles.floatingText}>
              <p>name: {result.name}</p>
              <p>status: {result.status}</p>
              <p>type: {result.type}</p>
              <p>gender: {result.gender}</p>
            </div>
          </div>
          <div className={styles.description}>
            <h2> {result.name}</h2>
            <p>{result.species}</p>
          </div>
        </button>
      </li>
    </>
  );
}

ResultsItem.propTypes = {
  result: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ResultsItem;
