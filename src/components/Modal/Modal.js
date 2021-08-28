import React from 'react';
import styles from './Modal.module.css';

function Modal({open}) {
  const [isOpen, setIsOpen] = React.useState(false);

  if(open){setIsOpen(open)}
  
  return (
    <React.Fragment>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            <h1>title</h1>
            <p>контент</p>
            <button onClick={() => setIsOpen(false)}> Close modal </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default Modal;
