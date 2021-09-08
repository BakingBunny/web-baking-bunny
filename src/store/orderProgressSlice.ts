import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

enum RegualrOrderEnum {
  cart = 1,
  checkout = 2,
  review = 3,
  confirm = 4,
}

enum CustomOrderEnum {
  checkout = 1,
  review = 2,
  confirm = 3,
}

interface orderProgressInterface {
  regularOrder: RegualrOrderEnum;
  customOrder: CustomOrderEnum;
}

// check if savedCart exists, or return empty list.
const initialState: orderProgressInterface = {
  regularOrder: RegualrOrderEnum.cart,
  customOrder: CustomOrderEnum.checkout,
};

export const orderProgressSlice = createSlice({
  name: 'orderProgress',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        type: string;
        value: number;
      }>
    ) => {
      const { type, value } = action.payload;
      Object.assign(state, {
        [type]: value,
      });
    },
  },
});

export const { update } = orderProgressSlice.actions;

export const orderProgress = (state: RootState) => state.orderProgress;

export default orderProgressSlice.reducer;
