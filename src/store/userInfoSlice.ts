import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UserInfoInterface } from '../interface/UserInfoInterface';

const initialState: UserInfoInterface = {
  firstname: 'firstname',
  lastname: 'lastname',
  email: 'email@email.com',
  phone: '1234567889',
  allergy: 'allergy',
  inquiry: 'inquiry',
  postalCode: 'postalCode',
  address: 'address',
  // firstname: '',
  // lastname: '',
  // email: '',
  // phone: '',
  // allergy: '',
  // inquiry: '',
  // postalCode: '',
  // address: '',
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
