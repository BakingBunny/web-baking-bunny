import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CheckOutInterface } from '../interface/CheckOutInterface';
import { OnChangeProps } from 'react-date-range';

const initialState: CheckOutInterface = {
  firstName: '',
  lastName: '',
  mobileNumber: '',
  email: '',
  cart: [],
  customCake: {
    cakeSize: 6,
    qty: 1,
    ExampleImage: '',
  },
  allergy: '',
  isDelivery: false,
  pickupDate: '',
  address: '',
  postalCode: '',
  comment: '',
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
      console.log(value);
      Object.assign(state, {
        [name]: value,
      });
    },
  },
});

export const { update } = checkoutSlice.actions;

export const checkout = (state: RootState) => state.checkout;

export default checkoutSlice.reducer;
