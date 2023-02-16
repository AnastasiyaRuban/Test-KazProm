import {
  ADD_ITEM,
  DELETE_ITEM,
  CHECK_ITEM,
  REQUEST_INFO,
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
