import { ADD_ITEM } from './types';
import { showAlert } from './actions';

const forbidden = ['fuck', 'spam', 'angular'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === ADD_ITEM) {
        const found = forbidden.filter((w) =>
          action.payload.item.toLowerCase().includes(w)
        );
        if (found.length) {
          return dispatch(showAlert('React лучше :)'));
        }
      }
      return next(action);
    };
  };
}
