import React, { useEffect } from 'react';

import styles from './Status.module.css';

function Status({
  setCharacters,
  pagination = 1,
  setfilter,
  setInfo,
  setPagination,
}) {
  const [statusForm, setStatusForm] = React.useState(null);

  useEffect(() => {
    statusForm &&
      fetch(
        `https://rickandmortyapi.com/api/character/?page=${pagination}&status=${statusForm}`,
      )
        .then(response => response.json())
        // .then(json => console.log('status', json));
        .then(characters => {
          setCharacters(characters.results);
          setInfo(characters.info);
          // setLoader(false);
        });
  }, [pagination, statusForm]);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('statusForm in func:', statusForm);
  }

  function handleChange(event) {
    event.target.value === 'All Status'
      ? setfilter(null)
      : setStatusForm(event.target.value);
    setPagination(1);
  }

  return (
    <div className={styles.status}>
      <form action="selectStatus" onSubmit={handleSubmit}>
        <p>
          <select name="status" value={statusForm} onChange={handleChange}>
            <option value="All Status">All Status </option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
          </select>
        </p>
      </form>
    </div>
  );
}
export default Status;
