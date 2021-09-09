import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  OrderProgressInterface,
  CustomOrderEnum,
  RegualrOrderEnum,
} from '../interface/OrderProgressInterface';
import { RootState } from './store';

// check if savedCart exists, or return empty list.
const initialState: OrderProgressInterface = {
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
