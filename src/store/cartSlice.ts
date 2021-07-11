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
    remove: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    update: (
      state,
      action: PayloadAction<{
        index: number;
        option: string;
        value: number | string;
      }>
    ) => {
      const { index, option, value } = action.payload;

      switch (option) {
        case 'tastes':
          state[index].tastes = value.toString();
          break;
        case 'cakeSize':
          state[index].cakeSize = Number(value);
          break;
        case 'qty':
          state[index].qty = Number(value);
          break;
      }

      // const CartItem = state.find(
      //   (item) => item.index === action.payload.index
      // );
      // console.log(CartItem);
    },
  },
});

export const { add, remove, update } = cartSlice.actions;

export const products = (state: RootState) => state.cart;

export default cartSlice.reducer;
