import { configureStore } from '@reduxjs/toolkit';
// import { forbiddenWordsMiddleware } from './redux/middleware';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './sagas';
import { listReducer } from './listSlice';

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    list: listReducer,
  },
  middleware: [saga],
});
saga.run(sagaWatcher);
