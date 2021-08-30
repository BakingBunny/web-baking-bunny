import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CustomCakeInterface } from '../interface/CustomCakeInterface';
import { OnChangeProps } from 'react-date-range';
import { ProductInterface } from '../interface/ProductInterface';

const initialProduct: ProductInterface = {
  productId: 0,
  productName: '',
  price: 0,
  description: '',
  productImage: '',
  comment: '',
  tasteList: [],
  cakeTypeList: [],
  sizeList: [],
  categoryList: [],
};

const initialState: CustomCakeInterface = {
  product: initialProduct,
  requestDescription: '',
  requestDate: null,
  isDelivery: null,
  tasteId: -1,
  cakeTypeId: 1,
  sizeId: 2,
};

export const customCakeSlice = createSlice({
  name: 'customCake',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        name: string;
        value:
          | number
          | boolean
          | string
          | Date
          | OnChangeProps
          | ProductInterface
          | undefined
          | null;
      }>
    ) => {
      const { name, value } = action.payload;
      Object.assign(state, {
        [name]: value,
      });
    },
  },
});

export const { update } = customCakeSlice.actions;

export const customCake = (state: RootState) => state.customCake;

export default customCakeSlice.reducer;
