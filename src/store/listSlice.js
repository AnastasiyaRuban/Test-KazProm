import { ADD_ITEM, DELETE_ITEM, CHECK_ITEM } from './types';

const initialState = {
  list: [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: state.list.concat([action.payload]) };
    case CHECK_ITEM:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return {
            ...item,
            check: !item.check,
          };
        }),
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.check !== true),
      };
    default:
      return state;
  }
};
