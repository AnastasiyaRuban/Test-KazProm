import React from 'react';
import styles from './Loader.module.scss';

export default function Loader({ className }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles[className]} spinner-border text-secondary`}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
