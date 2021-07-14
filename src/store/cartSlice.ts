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
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) state.splice(index, 1);
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
      }
    },
  },
});

export const { add, remove, update } = cartSlice.actions;

export const products = (state: RootState) => state.cart;

export default cartSlice.reducer;
