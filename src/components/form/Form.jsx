import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/listSlice';
import styles from './Form.module.scss';
import Button from '../button/Button';

export default function Form({ action }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get('item')) {
      dispatch(addItem({ formData }));
      setValue('');
    } else if (!formData.get('item')) {
      setError(true);
    }
  };

  useEffect(() => {
    return () => {
      if (value) setError(false);
    };
  }, [value]);

  return (
    <form className={styles.form} onSubmit={(e) => addTask(e)}>
      <h3 className={styles.form__title}>Добавить запись</h3>
      <input
        name='item'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.form__input}
        ref={inputRef}
      />
      {error && <p className={styles.form__error}>Введите значение</p>}
      <div className={styles.form__buttons}>
        <Button content='Ок' className={styles['form__add-button']} />
        <Button
          content='Отмена'
          action={action}
          className={styles['form__cancel-button']}
        />
      </div>
    </form>
  );
}
