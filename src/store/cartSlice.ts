import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CartState } from '../interface/CartState';

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartState>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // update:
  },
});

export const { add, remove } = cartSlice.actions;

export const products = (state: RootState) => state.cart;

export default cartSlice.reducer;
