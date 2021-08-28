import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Context from '../../context';
// import Header from '../../components/Header/Header.js';

import styles from './TodoItem.module.css';
import './item.css';
// import sprite from '../../assets/img/sprite.svg';

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push('done');
  }

  return (
    <>
      <li className={styles.todoItem}>
        <span className={classes.join(' ')}>
          <input
            type="checkbox"
            checked={todo.completed}
            className={styles.todoInput}
            onChange={() => onChange(todo.id)}
          />
          <strong>{index + 1}</strong>
          &nbsp;
          {todo.title}
        </span>
        <button
          className={styles.strikeOut}
          // onClick={() => removeTodo(todo.id)}
          onClick={removeTodo.bind(null, todo.id)}
        >
          &times;
        </button>
      </li>
    </>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
