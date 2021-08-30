import React, { useEffect } from 'react';

import styles from './Gender.module.css';

function Gender({
  setCharacters,
  pagination = 1,
  setfilter,
  setInfo,
  setPagination,
}) {
  const [genderForm, setGenderForm] = React.useState(null);

  useEffect(() => {
    genderForm &&
      fetch(
        `https://rickandmortyapi.com/api/character/?page=${pagination}&gender=${genderForm}`,
      )
        .then(response => response.json())
        // .then(json => console.log('gender', json));
        .then(characters => {
          setCharacters(characters.results);
          setInfo(characters.info);
          // setLoader(false);
        });
  }, [pagination, genderForm]);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('genderForm in func:', genderForm);
  }

  function handleChange(event) {
    event.target.value === 'All Gender'
      ? setfilter(null)
      : setGenderForm(event.target.value);
    setPagination(1);
  }

  return (
    <div className={styles.gender}>
      <form action="selectGender" onSubmit={handleSubmit}>
        <p>
          <select name="gender" value={genderForm} onChange={handleChange}>
            <option value="All Gender">All Gender </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">unknown</option>

            <option value="Genderless">Genderless</option>
          </select>
        </p>
      </form>
    </div>
  );
}
export default Gender;
