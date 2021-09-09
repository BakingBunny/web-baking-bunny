import React from 'react';
import { CheckOut } from '../components/CheckOutPage';
import {
  OrderProgressInterface,
  RegualrOrderEnum,
} from '../interface/OrderProgressInterface';
import { useAppSelector } from '../store/hooks';
import { orderProgress } from '../store/orderProgressSlice';
import { NotFoundPage } from './NotFoundPage';

interface Props {}

export const CheckoutPage = (props: Props) => {
  window.scrollTo(0, 0);

  const orderProgressState =
    useAppSelector<OrderProgressInterface>(orderProgress);

  return orderProgressState.regularOrder >= RegualrOrderEnum.checkout ? (
    <CheckOut />
  ) : (
    <NotFoundPage />
  );
};
