import React, { useEffect } from 'react';

// import { Link } from 'react-router-dom';
import CharacterItem from '../../components/CharacterItem/CharacterItem.js';
import Header from '../../components/Header/Header.js';
import Loader from '../../components/Loader/Loader.js';
import Modal from '../../components/Modal/Modal.js';
import Species from '../../components/Species/Species.js';
import Status from '../../components/Status/Status.js';
import Gender from '../../components/Gender/Gender.js';

import styles from './CharactersPage.module.css';
// import sprite from '../../assets/img/sprite.svg';

function CharactersPage() {
  const [characters, setCharacters] = React.useState('');
  const [currentCharacter, setCcurrentCharacter] = React.useState(null);
  const [loader, setLoader] = React.useState(true);
  const [pagination, setPagination] = React.useState(1);
  const [info, setInfo] = React.useState(null);
  const [filter, setfilter] = React.useState(null);
  console.log('filter', filter);

  useEffect(() => {
    !filter &&
      fetch(`https://rickandmortyapi.com/api/character/?page=${pagination}`)
        .then(response => response.json())
        // .then(json => console.log(json));
        .then(characters => {
          setCharacters(characters.results);
          setInfo(characters.info);
          setLoader(false);
          console.log('characters.results', characters.results);
        });
  }, [pagination, filter]);

  function currentItem(id) {
    console.log('id', id);
    setCcurrentCharacter(characters.filter(character => character.id === id));
  }

  function nextPage() {
    setPagination(pagination + 1);
  }
  function prevPage() {
    setPagination(pagination - 1);
  }

  return (
    <React.Fragment>
      <div className={styles.header}>
        <Header></Header>
      </div>
      {loader && <Loader></Loader>}

      {loader ? null : (
        <div className={styles.flex}>
          <ul className={styles.filter__list}>
            <li className={styles.filter__item}>
              <button
                className={styles.button}
                onClick={() => setfilter('species')}
              >
                Species
                {filter === 'species' && (
                  <Species
                    setCharacters={setCharacters}
                    pagination={pagination}
                    setfilter={setfilter}
                    setInfo={setInfo}
                    // setLoader={setLoader}
                    setPagination={setPagination}
                  ></Species>
                )}
              </button>
            </li>
            <li className={styles.filter__item}>
              <button
                className={styles.button}
                onClick={() => setfilter('status')}
              >
                Status
                {filter === 'status' && (
                  <Status
                    setCharacters={setCharacters}
                    pagination={pagination}
                    setfilter={setfilter}
                    setInfo={setInfo}
                    // setLoader={setLoader}
                    setPagination={setPagination}
                  ></Status>
                )}
              </button>
            </li>
            <li className={styles.filter__item}>
              <button
                className={styles.button}
                onClick={() => setfilter('gender')}
              >
                Gender
                {filter === 'gender' && (
                  <Gender
                    setCharacters={setCharacters}
                    pagination={pagination}
                    setfilter={setfilter}
                    setInfo={setInfo}
                    // setLoader={setLoader}
                    setPagination={setPagination}
                  ></Gender>
                )}
              </button>
            </li>
          </ul>

          <div className={styles.pagination}>
            <button
              disabled={pagination === 1}
              className={styles.prev}
              onClick={prevPage}
            >
              Prev page {pagination - 1}
            </button>
            <button
              disabled={pagination === info.pages}
              className={styles.next}
              onClick={nextPage}
            >
              Next page {pagination + 1}
            </button>
          </div>
        </div>
      )}
      <Modal openItem={currentCharacter}></Modal>

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
      {loader ? null : (
        <div className={styles.pagination}>
          <button
            disabled={pagination === 1}
            className={styles.prev}
            onClick={prevPage}
          >
            Prev page {pagination - 1}
          </button>
          <button
            disabled={pagination === info.pages}
            className={styles.next}
            onClick={nextPage}
          >
            Next page {pagination + 1}
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
export default CharactersPage;
