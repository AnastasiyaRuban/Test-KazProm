import React from 'react';
import styles from './Popup.module.scss';
import Button from '../button/Button';

export default function Popup({ onDelete, onCancel }) {
  return (
    <div className={styles.popup}>
      <h2 className={styles.popup__title}>
        Вы уверены, что хотите удалить записи?
      </h2>
      <div className={styles.popup__buttons}>
        <Button
          className={styles.popup__button}
          action={onDelete}
          content='Да'
        />
        <Button
          className={styles.popup__button}
          action={onCancel}
          content='Нет'
        />
      </div>
    </div>
  );
}
