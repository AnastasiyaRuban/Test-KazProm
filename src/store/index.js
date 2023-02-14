import { configureStore } from '@reduxjs/toolkit';
import listReduser from './listSlice';

export default configureStore({
  reducer: {
    list: listReduser,
  },
});
