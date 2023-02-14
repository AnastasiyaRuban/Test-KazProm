import React from 'react';
import styles from './Button.module.scss';

export default function Button({ content, className = '', action }) {
  return (
    <button className={`button-reset ${className}`} onClick={action}>
      {content}
    </button>
  );
}
