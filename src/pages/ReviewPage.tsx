import React from 'react';
import Review from '../components/ReviewPage';
import {
  OrderProgressInterface,
  RegualrOrderEnum,
} from '../interface/OrderProgressInterface';
import { useAppSelector } from '../store/hooks';
import { orderProgress } from '../store/orderProgressSlice';
import { NotFoundPage } from './NotFoundPage';

interface Props {}

export const ReviewPage = (props: Props) => {
  window.scrollTo(0, 0);

  const orderProgressState =
    useAppSelector<OrderProgressInterface>(orderProgress);

  return orderProgressState.regularOrder >= RegualrOrderEnum.review ? (
    <Review />
  ) : (
    <NotFoundPage />
  );
};
