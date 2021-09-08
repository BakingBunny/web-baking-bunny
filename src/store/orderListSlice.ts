import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { OrderListInterface } from '../interface/OrderListInterface';
import { OnChangeProps } from 'react-date-range';

const initialState: OrderListInterface = {
  subtotal: 0,
  deliveryFee: 0,
  total: 0,
  // isDelivery: undefined,
  isDelivery: true, //delete
  pickupDeliveryDate: undefined,
  // allergy: '',
  // inquiry: '',
  allergy: 'Milk, Peanut, Cheese, Egg',
  inquiry: 'Although I have the allergies, can I eat cake?',
};

export const orderListSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        name: string;
        value: number | boolean | string | Date | OnChangeProps | undefined;
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
