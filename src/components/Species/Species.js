import React, { useEffect } from 'react';

import styles from './Species.module.css';

function Species({
  setCharacters,
  pagination = 1,
  setfilter,
  setInfo,
  setPagination,
}) {
  const [speciesForm, setspeciesForm] = React.useState(null);

  useEffect(() => {
    speciesForm &&
      fetch(
        `https://rickandmortyapi.com/api/character/?page=${pagination}&species=${speciesForm}`,
      )
        .then(response => response.json())
        // .then(json => console.log('species', json));
        .then(characters => {
          setCharacters(characters.results);
          setInfo(characters.info);
          // setLoader(false);
        });
  }, [pagination, speciesForm]);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('speciesForm in func:', speciesForm);
  }

  function handleChange(event) {
    event.target.value === 'All Species'
      ? setfilter(null)
      : setspeciesForm(event.target.value);
    setPagination(1);
  }

  return (
    <div className={styles.species}>
      <form action="selectSpecies" onSubmit={handleSubmit}>
        <p>
          <select name="species" value={speciesForm} onChange={handleChange}>
            <option value="All Species">All Species </option>
            <option value="Human">Human</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Alien">Alien</option>
            <option value="Mythological Creature">Mythological Creature</option>
            <option value="Robot">Robot</option>
            <option value="Disease">Disease</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="unknown">unknown</option>
            <option value="Animal">Animal</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Planet">Planet</option>
          </select>
        </p>
      </form>
    </div>
  );
}
export default Species;
