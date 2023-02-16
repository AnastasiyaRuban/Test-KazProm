import {
  ADD_ITEM,
  DELETE_ITEM,
  CHECK_ITEM,
  REQUEST_INFO,
  FETCH_INFO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from './types';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}

export function toggleCheck(id) {
  return {
    type: CHECK_ITEM,
    payload: id,
  };
}

export function deleteItem() {
  return {
    type: DELETE_ITEM,
  };
}

export function fetchInfo() {
  return {
    type: REQUEST_INFO,
  };
}
export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
