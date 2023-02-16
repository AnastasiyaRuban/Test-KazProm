import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCheck } from '../../store/actions';

export default function ListItem({ item, id, check, className, styles }) {
  const dispatch = useDispatch();

  const handleOnChange = (id) => {
    dispatch(toggleCheck(id));
  };

  useEffect(() => {
    return () => {
      console.log(check);
    };
  }, [check]);

  return (
    <li id={id} className={className}>
      <input
        id={`checkbox_${id}`}
        type='checkbox'
        checked={check}
        onChange={() => handleOnChange(id)}
        className={styles.item__checkbox}
      ></input>
      <label htmlFor={`checkbox_${id}`} className={styles.item__text}>
        {item}
      </label>
    </li>
  );
}
