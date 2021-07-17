import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CheckOutInterface } from '../interface/CheckOutInterface';

const initialState: CheckOutInterface = {
  firstName: '',
  lastName: '',
  phone: '',
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
        value: number | string | boolean;
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
