import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { OrderListInterface } from '../interface/OrderListInterface';
import { OnChangeProps } from 'react-date-range';

let minDate = new Date();
minDate.setDate(minDate.getDate() + 7);

const initialState: OrderListInterface = {
  subtotal: 0,
  deliveryFee: null,
  total: 0,
  isDelivery: false,
  pickupDeliveryDate: null,
  pickupHour: 14,
  pickupMinute: 0,
};

export const orderListSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        name: string;
        value: number | boolean | Date | OnChangeProps | null;
      }>
    ) => {
      const { name, value } = action.payload;
      Object.assign(state, {
        [name]: value,
      });
    },
  },
});

export const { update } = orderListSlice.actions;

export const orderList = (state: RootState) => state.orderList;

export default orderListSlice.reducer;
