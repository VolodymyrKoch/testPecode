import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Loader from '../../components/Loader/Loader';
import Episode from '../../components/Episode/Episode';

import styles from './EpisodesPage.module.css';
// import sprite from '../../assets/img/sprite.svg';

function EpisodesPage() {
  const [info, setInfo] = React.useState(null);
  const [episode, setEpisode] = React.useState(null);
  const [loader, setLoader] = React.useState(true);
  const [filter, setfilter] = React.useState(null);
  const [pagination, setPagination] = React.useState(1);

  useEffect(() => {
    // !filter &&
    fetch(`https://rickandmortyapi.com/api/episode/?page=${pagination}`)
      // `https://rickandmortyapi.com/api/episode/?name=${nameForm}`

      .then(response => response.json())
      // .then(json => console.log(json));
      .then(episode => {
        setEpisode(episode.results);
        setInfo(episode.info);
        setLoader(false);
        console.log('episode.results', episode.results);
      });
  }, [pagination, filter]);

  // resultsItem

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
      {/* <Episode episode={episode}></Episode> */}

      <ul className={styles.episodeslist}>
        {!loader && episode.length ? (
          episode.map((episodeItem, index) => {
            return (
              <Episode
                episode={episodeItem}
                key={episodeItem.id}
                index={index}
                // openModal={currentItem}
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
export default EpisodesPage;
