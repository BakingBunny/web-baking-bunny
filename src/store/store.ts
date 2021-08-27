import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userInfoReducer from './userInfoSlice';
import orderListReducer from './orderListSlice';
import customCakeReducer from './customCakeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    userInfo: userInfoReducer,
    orderList: orderListReducer,
    customCake: customCakeReducer,
  },
  middleware: (
    getDefaultMiddleware // because react-date-range (orderListSlice)
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
