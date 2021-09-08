import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userInfoReducer from './userInfoSlice';
import orderListReducer from './orderListSlice';
import customCakeReducer from './customCakeSlice';
import orderProgressReducer from './orderProgressSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    userInfo: userInfoReducer,
    orderList: orderListReducer,
    customCake: customCakeReducer,
    orderProgress: orderProgressReducer,
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
