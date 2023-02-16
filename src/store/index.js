import { configureStore } from '@reduxjs/toolkit';
// import { forbiddenWordsMiddleware } from './redux/middleware';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './sagas';
import thunk from 'redux-thunk';
import { listReducer } from './listSlice';
import { infoReducer } from './infoSlice';
import { appReducer } from './appSlice';

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    list: listReducer,
    info: infoReducer,
    app: appReducer,
  },
  middleware: [saga, thunk],
});
saga.run(sagaWatcher);
