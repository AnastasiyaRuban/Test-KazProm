import { style } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './List.module.scss';
import ListItem from './ListItem';

export default function List() {
  const list = useSelector((state) => state.list.list);
  return (
    <div className={styles['bloсk-list']}>
      {list.length > 0 ? (
        <ol className={styles['bloсk-list__list']}>
          {list.map((item, index) => (
            <ListItem
              className={styles['bloсk-list__item']}
              {...item}
              key={index + 1}
              styles={styles}
            />
          ))}
        </ol>
      ) : (
        <p className={styles['bloсk-list__title']}>
          Список пока пуст. Добавьте первое значение
        </p>
      )}
    </div>
  );
}
