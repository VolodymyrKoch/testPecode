import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './CharacterItem.module.css';
// import sprite from '../../assets/img/sprite.svg';

function CharacterItem({ character, index, curentItem }) {
  return (
    <>
      <li className={styles.characterItem}>
        <button
        // onClick={() => curentItem(character.id)}
        >
          <div className={styles.cardImage}>
            <img src={character.image} alt={character.name} />
            <div className={styles.floatingText}>
              <p>name: {character.name}</p>
              <p>status: {character.status}</p>
              <p>type: {character.type}</p>
              <p>gender: {character.gender}</p>
            </div>
          </div>
          <div className={styles.description}>
            <h2> {character.name}</h2>
            <p>{character.species}</p>
          </div>
        </button>
      </li>
    </>
  );
}

// CharacterItem.propTypes = {
//   todo: PropTypes.object.isRequired,
//   index: PropTypes.number,
//   onChange: PropTypes.func.isRequired,
// };

export default CharacterItem;
