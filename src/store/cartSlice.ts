import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CartInterface } from '../interface/CartInterface';

const initialState: CartInterface[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartInterface>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    removeAll: (state) => {
      state.splice(0, state.length);
    },
    update: (
      state,
      action: PayloadAction<{
        id: string;
        option: string;
        value: number | string;
      }>
    ) => {
      const { id, option, value } = action.payload;

      const index = state.findIndex((item) => item.id === id);

      if (index !== -1) {
        Object.assign(state[index], {
          [option]: value,
        });
      }
    },
  },
});

export const { add, remove, removeAll, update } = cartSlice.actions;

export const products = (state: RootState) => state.cart;

export default cartSlice.reducer;
