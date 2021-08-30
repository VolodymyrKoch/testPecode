import React from 'react';
import PropTypes from 'prop-types';

import styles from './Episode.module.css';
// import sprite from '../../assets/img/sprite.svg';

function Episode({ episode, openModal }) {
  console.log('episode', episode);
  return (
    <>
      <li className={styles.episodesItem}>
        <button
        // onClick={() => openModal(episode.id)}
        >
          <div className={styles.cardImage}>
            <img src="" alt="" />
            {/* <div className={styles.floatingText}>
            <p>name: {episode.name}</p>
            <p>status: {episode.air_date}</p>
            <p>type: {episode.episode}</p>
          </div> */}
          </div>
          <div className={styles.description}>
            <p>name: {episode.name}</p>
            <p>status: {episode.air_date}</p>
            <p>type: {episode.episode}</p>
          </div>
        </button>
      </li>
    </>
  );
}

Episode.propTypes = {
  result: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Episode;
