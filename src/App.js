import './index.scss';
import React, { useState } from 'react';
import { deleteItem } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
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
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem());
    setOpenPopup(false);
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
          action={() => setOpenPopup(true)}
        />
        <Snackbars />
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
