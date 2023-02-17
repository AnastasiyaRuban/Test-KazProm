import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_INFO, REQUEST_INFO } from './types';
import { hideLoader, showAlert, showLoader } from './actions';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_INFO, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchInfo);
    yield put({ type: FETCH_INFO, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'));
    yield put(hideLoader());
  }
}

async function fetchInfo() {
  const response = await fetch('https://graphqlzero.almansi.me/api', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `{
        user(id: 1) {
          name
          username
          email
        }
      }`,
    }),
  });
  return await response.json();
}
