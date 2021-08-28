import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Context from '../../context.js';
import AddTodo from '../../components/AddTodo/AddTodo.js';
import Header from '../../components/Header/Header.js';
import TodoItem from '../../components/TodoItem/TodoItem.js';

import styles from './MyWatchListPage.module.css';
// import sprite from '../../assets/img/sprite.svg';

function MyWatchListPage() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'series, Rick is reading the boock' },
    { id: 2, completed: true, title: 'series, Morty is watching  TV' },
    { id: 3, completed: false, title: 'series, Rick and Morty is fighting' },
    { id: 4, completed: false, title: 'Rick and Morty is the best freands' },
  ]);
  console.log('todos', todos);

  function onToggle(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          completed: false,
          title,
        },
      ]),
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <React.Fragment>
        <div className={styles.header}>
          <Header></Header>
        </div>
        <AddTodo onCreate={addTodo}></AddTodo>
        <ol className={styles.todolist}>
          {todos.length ? (
            todos.map((todo, index) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  index={index}
                  onChange={onToggle}
                />
              );
            })
          ) : (
            <p className={styles.warning}>Your watch list is empty!</p>
          )}
        </ol>
      </React.Fragment>
    </Context.Provider>
  );
}

// MyWatchListPage.propTypes = {};

export default MyWatchListPage;
