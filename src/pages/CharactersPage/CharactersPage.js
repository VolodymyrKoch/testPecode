import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import CharacterItem from '../../components/CharacterItem/CharacterItem.js';
import Header from '../../components/Header/Header.js';
import Loader from '../../components/Loader/Loader.js';
import Modal from '../../components/Modal/Modal.js';

import styles from './CharactersPage.module.css';
// import sprite from '../../assets/img/sprite.svg';

function CharactersPage() {
  const [characters, setCharacters] = React.useState('');
  const [currentCharacter, setCcurrentCharacter] = React.useState(null);
  const [loader, setLoader] = React.useState(true);

  // const { info, results } = characters;

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      // .then(json => console.log(json));
      .then(characters => {
        setCharacters(characters.results);
        setLoader(false);
        console.log('characters.results', characters.results);
      });
  }, []);

  // console.log('Array', Array.isArray(results));
  // console.log('characters.length', characters.length);
  // console.log('results', results);

  // const keyss = Object.keys(results);
  // console.log('keyss', keyss);
  // console.log('characters.results.length', characters.results.length);

  function currentItem(id) {
    console.log('id', id);
    setCcurrentCharacter(characters.filter(character => character.id === id));
  }
  console.log(currentItem);
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Header></Header>
      </div>
      {loader && <Loader></Loader>}

      {loader ? null : (
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
        </ul>
      )}
      <Modal open={currentCharacter}></Modal>

      <ul className={styles.characterslist}>
        {!loader && characters.length ? (
          characters.map((character, index) => {
            return (
              <CharacterItem
                character={character}
                key={character.id}
                index={index}
                openModal={currentItem}
              />
            );
          })
        ) : (
          <p className={styles.warning}>Query !</p>
        )}
      </ul>
    </React.Fragment>
  );
}
export default CharactersPage;
