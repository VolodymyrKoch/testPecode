import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import { Link } from 'react-router-dom';

function Modal({ openItem }) {
  const [isOpenItem, setIsOpen] = React.useState(null);

  useEffect(() => {
    if (openItem) {
      setIsOpen(...openItem);
    }
  }, [openItem]);

  console.log('isOpenItem', isOpenItem);

  return (
    <React.Fragment>
      {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>  */}

      {!!isOpenItem && (
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.strikeOut}
            >
              &times;
            </button>

            <div className={styles.flex}>
              <div className={styles.cardImage}>
                <img src={isOpenItem.image} alt={isOpenItem.name} />
              </div>

              <div className={styles.description}>
                <p>
                  name: <strong>{isOpenItem.name}</strong>{' '}
                </p>
                <p>status: {isOpenItem.status}</p>
                <p>type: {isOpenItem.type}</p>
                <p>gender: {isOpenItem.gender}</p>
                <p>species: {isOpenItem.species}</p>
              </div>

              <div className={styles.additional}>
                <p>location: {isOpenItem.location.name}</p>
                <p>origin: {isOpenItem.origin.name}</p>

                {/* <p>
                  episode:
                  {isOpenItem.episode.map((el, ind) => {
                    //    <Link to="/" alt=" " className={styles.logoLink}>
                    //    <h1> Rick and Morty TV series</h1>
                    //  </Link>
                    return (
                      <a className={styles.link} href={`${el}`}>
                        <p>{ind + 1}episode</p>
                      </a>
                    );
                  })}
                </p> */}
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className={styles.close}>
              Close modal
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default Modal;
