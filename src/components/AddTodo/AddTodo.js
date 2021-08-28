import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AddTodo.module.css';

function AddTodo({ onCreate }) {
  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    console.log('event', event);
    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button type="submit" className={styles.button}>
        Add to list
      </button>
    </form>
  );
}
AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
