import { FETCH_INFO } from './types';

const initialState = {
  fetchedInfo: [],
};

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFO:
      return { ...state, fetchedInfo: action.payload };
    default:
      return state;
  }
};
