import React from 'react';
import { Confirm } from '../components/ConfirmPage';
import {
  OrderProgressInterface,
  RegualrOrderEnum,
} from '../interface/OrderProgressInterface';
import { useAppSelector } from '../store/hooks';
import { orderProgress } from '../store/orderProgressSlice';
import { NotFoundPage } from './NotFoundPage';

interface Props {}

export const ConfirmPage = (props: Props) => {
  window.scrollTo(0, 0);

  const orderProgressState =
    useAppSelector<OrderProgressInterface>(orderProgress);

  return orderProgressState.regularOrder >= RegualrOrderEnum.confirm ? (
    <Confirm />
  ) : (
    <NotFoundPage />
  );
};
