import React from 'react';
import styles from './Alert.module.scss';

export default function Alert({ text }) {
  return (
    <div className={`${styles.alert} alert alert-warning`} role='alert'>
      {text}
    </div>
  );
}
