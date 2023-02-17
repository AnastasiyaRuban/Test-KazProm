import React, { forwardRef, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '../button/Button';
import { fetchInfo } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TestGraphQL.module.scss';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info.fetchedInfo.data?.user);

  const handleClick = () => {
    dispatch(fetchInfo());
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button
        content='Тест GraphQL'
        className='addition-button'
        action={() => handleClick()}
      />
      {info && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            name: {info.name} <br />
            username: {info.username} <br />
            email: {info.email} <br />
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
