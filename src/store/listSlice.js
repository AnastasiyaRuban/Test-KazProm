import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
  },
  reducers: {
    addItem(state, action) {
      const formData = action.payload.formData;
      state.list.push({
        id: '_' + Math.random().toString(36).substring(2, 9),
        item: formData.get('item'),
        check: false,
      });
    },
    toggleCheck(state, action) {
      const togleItem = state.list.find(
        (item) => item.id === action.payload.id
      );
      togleItem.check = !togleItem.check;
    },
    deleteItem(state, action) {
      state.list = state.list.filter((item) => item.check === false);
    },
  },
});

export const { addItem, toggleCheck, deleteItem } = listSlice.actions;

export default listSlice.reducer;
