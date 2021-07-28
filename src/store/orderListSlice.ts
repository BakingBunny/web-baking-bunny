import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { OrderListInterface } from '../interface/OrderListInterface';
import { OnChangeProps } from 'react-date-range';

let minDate = new Date();
minDate.setDate(minDate.getDate() + 7);

const initialState: OrderListInterface = {
  deliveryFee: 0,
  isDelivery: false,
  pickupDeliveryDate: minDate,
};

export const orderListSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        name: string;
        value: number | Date | boolean | OnChangeProps;
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
