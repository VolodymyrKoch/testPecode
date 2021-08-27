import React from 'react';

import Header from '../../components/Header/Header.js';
// import Header from '../../components/Header';
// import styles from './Main.module.css';
import styles from './Main.module.css';

function Main() {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <Header className={styles.header} />
        </div>
      </header>
    </React.Fragment>
  );
}

export default Main;
