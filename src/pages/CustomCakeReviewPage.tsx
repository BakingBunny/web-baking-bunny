import React from 'react';
import { CustomCakeReview } from '../components/CustomCakeReviewPage';
import {
  CustomOrderEnum,
  OrderProgressInterface,
} from '../interface/OrderProgressInterface';
import { useAppSelector } from '../store/hooks';
import { orderProgress } from '../store/orderProgressSlice';
import { NotFoundPage } from './NotFoundPage';

interface Props {}

export const CustomCakeReviewPage = (props: Props) => {
  window.scrollTo(0, 0);

  const orderProgressState =
    useAppSelector<OrderProgressInterface>(orderProgress);

  return orderProgressState.customOrder >= CustomOrderEnum.review ? (
    <CustomCakeReview />
  ) : (
    <NotFoundPage />
  );
};
