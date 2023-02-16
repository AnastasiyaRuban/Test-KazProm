import './index.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from './store/actions';
import { showAlert } from './store/actions';
import Button from './components/button/Button';
import List from './components/list/List';
import Form from './components/form/Form';
import Popup from './components/popup/Popup';
import Snackbars from './components/snackbars/Snackbars';
import Loader from './components/loader/Loader';
import Alert from './components/alert/Alert';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const loading = useSelector((state) => state.app.loading);
  const alert = useSelector((state) => state.app.alert);
  const list = useSelector((state) => state.list.list);
  const listForDelete = list.filter((item) => item.check === true);
  const dispatch = useDispatch();

  const handleDeleteItems = () => {
    dispatch(deleteItem());
    setOpenPopup(false);
  };

  const handleOpenPopup = () => {
    if (!listForDelete.length) {
      dispatch(showAlert('Нет записей для удаления'));
      return;
    }
    setOpenPopup(true);
  };

  return (
    <div className='app'>
      {alert && <Alert text={alert} />}
      {loading && <Loader />}
      <div className='app__buttons'>
        <Button
          content='Добавить'
          className='add-button'
          action={() => setOpenForm(true)}
        />
        <Button
          content='Удалить'
          className='remove-button'
          action={() => handleOpenPopup()}
        />
        <Snackbars />
      </div>

      <List />
      {openForm && <Form action={() => setOpenForm(false)} />}
      {openPopup && (
        <Popup
          onDelete={() => handleDeleteItems()}
          onCancel={() => setOpenPopup(false)}
        />
      )}
    </div>
  );
}
export default App;
