import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UserInfoInterface } from '../interface/UserInfoInterface';

const initialState: UserInfoInterface = {
  firstname: 'Peter',
  lastname: 'Parker',
  email: 'peter.parker@email.com',
  phone: '4031234567',
  postalCode: 'T3H3C8',
  address: '123 Newyork Street SW',
  city: 'Calgary',
  // firstname: '',
  // lastname: '',
  // email: '',
  // phone: '',
  // postalCode: '',
  // address: '',
  // city: '',
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        name: string;
        value: string;
      }>
    ) => {
      const { name, value } = action.payload;
      Object.assign(state, {
        [name]: value,
      });
    },
  },
});

export const { update } = userInfoSlice.actions;

export const userInfo = (state: RootState) => state.userInfo;

export default userInfoSlice.reducer;
