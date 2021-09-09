import React from 'react';
import { CustomCakeConfirm } from '../components/CustomCakeConfirmPage';
import {
  CustomOrderEnum,
  OrderProgressInterface,
} from '../interface/OrderProgressInterface';
import { useAppSelector } from '../store/hooks';
import { orderProgress } from '../store/orderProgressSlice';
import { NotFoundPage } from './NotFoundPage';

interface Props {}

export const CustomCakeConfirmPage = (props: Props) => {
  window.scrollTo(0, 0);

  const orderProgressState =
    useAppSelector<OrderProgressInterface>(orderProgress);

  return orderProgressState.customOrder >= CustomOrderEnum.confirm ? (
    <CustomCakeConfirm />
  ) : (
    <NotFoundPage />
  );
};
