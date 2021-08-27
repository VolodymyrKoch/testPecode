import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Context from './context';
import Main from './pages/Main/Main.js';
import Characters from './pages/CharactersPage/CharactersPage.js';
import Episodes from './pages/EpisodesPage/EpisodesPage.js';
import Location from './pages/LocationPage/LocationPage.js';
import MyWatchList from './pages/MyWatchListPage/MyWatchListPage.js';

import './App.css';

function App() {
  return (
    // <Context.Provider>
    <Fragment>
      {/* <Main></Main> */}
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/characters" component={Characters}></Route>
        <Route exact path="/episodes" component={Episodes}></Route>
        <Route exact path="/location" component={Location}></Route>
        <Route exact path="/my_list" component={MyWatchList}></Route>
      </Switch>
    </Fragment>
    // </Context.Provider>
  );
}

export default App;
