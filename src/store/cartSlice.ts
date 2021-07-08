import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CartState } from '../interface/CartState';

// export interface CartState {
//   type: string;
//   item_name: string;
//   tastes: string;
//   qty: number;
//   special?: string;
// }

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartState>) => {
      // state.value += 1;
    },
    remove: (state, action: PayloadAction<number>) => {
      // state.value -= 1;
    },
    // update:
  },
});

export const { add, remove } = cartSlice.actions;

export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
