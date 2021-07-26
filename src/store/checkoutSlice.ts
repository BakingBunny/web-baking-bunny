import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CheckOutInterface } from '../interface/CheckOutInterface';
import { OnChangeProps } from 'react-date-range';

const initialState: CheckOutInterface = {
  user: {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    postalCode: '',
    phone: '',
    city: '',
  },
  cart: [],
  customCake: {
    cakeSize: 6,
    qty: 1,
    ExampleImage: '',
  },
  orderList: {
    deliveryFee: 0,
    isDelivery: false,
    pickupDeliveryDate: '',
  },
};
export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        name: string;
        value: number | string | boolean | OnChangeProps;
      }>
    ) => {
      const { name, value } = action.payload;
      Object.assign(state, {
        [name]: value,
      });
    },
  },
});

export const { update } = checkoutSlice.actions;

export const checkout = (state: RootState) => state.checkout;

export default checkoutSlice.reducer;