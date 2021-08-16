import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CartInterface } from '../interface/CartInterface';

// load saved cart items from local storage.
const getsavedCart = (): CartInterface[] => {
  const savedCartItems = localStorage.getItem('cartList');
  return savedCartItems && JSON.parse(savedCartItems);
};
const savedCart: CartInterface[] = getsavedCart();

// check if savedCart exists, or return empty list.
const initialState: CartInterface[] = savedCart || [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartInterface>) => {
      const { product, sizeId, tasteId, qty } = action.payload;
      const index = state.findIndex(
        (item) =>
          item.product.productId === product.productId &&
          item.sizeId === sizeId &&
          item.tasteId === tasteId
      );
      if (index !== -1 && state[index].qty + qty < 10) {
        // if it found and total qty is less than 10
        state[index].qty = state[index].qty + qty;
      } else state.push(action.payload);

      localStorage.setItem('cartList', JSON.stringify(state));
      // update()
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) state.splice(index, 1);
      localStorage.setItem('cartList', JSON.stringify(state));
    },
    removeAll: (state) => {
      state.splice(0, state.length);
      localStorage.setItem('cartList', JSON.stringify(state));
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
      localStorage.setItem('cartList', JSON.stringify(state));
    },
  },
});

export const { add, remove, removeAll, update } = cartSlice.actions;

export const products = (state: RootState) => state.cart;

export default cartSlice.reducer;
