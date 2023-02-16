import './index.scss';
import React, { useState } from 'react';
import { deleteItem } from './store/actions';
import { useDispatch } from 'react-redux';
import Button from './components/button/Button';
import List from './components/list/List';
import Form from './components/form/Form';
import Popup from './components/popup/Popup';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem());
    setOpenPopup(false);
  };
  return (
    <div className='app'>
      <div className='app__buttons'>
        <Button
          content='Добавить'
          className='add-button'
          action={() => setOpenForm(true)}
        />
        <Button
          content='Удалить'
          className='remove-button'
          action={() => setOpenPopup(true)}
        />
        <Button content='Тест GraphQL' className='addition-button' />
      </div>

      <List />
      {openForm && <Form action={() => setOpenForm(false)} />}
      {openPopup && (
        <Popup
          onDelete={() => handleDelete()}
          onCancel={() => setOpenPopup(false)}
        />
      )}
    </div>
  );
}
export default App;
