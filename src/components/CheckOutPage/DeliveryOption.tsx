import React from 'react';
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  DeliveryOptionWrapper,
  DeliveryBtnWrapper,
  DeliveryOptionBtn,
  DeliveryRequirement,
} from './CheckoutPageElements';

interface Props {}

export const DeliveryOption = (props: Props) => {
  const orderListState = useAppSelector(orderList);
  const dispatch = useAppDispatch();

  return (
    <DeliveryOptionWrapper>
      <DeliveryBtnWrapper>
        <DeliveryOptionBtn
          isSelected={orderListState.isDelivery === false}
          onClick={() =>
            dispatch(
              update({
                name: 'isDelivery',
                value: false,
              })
            )
          }
        >
          Pick Up
        </DeliveryOptionBtn>
        <DeliveryOptionBtn
          isSelected={orderListState.isDelivery === true}
          onClick={() =>
            dispatch(
              update({
                name: 'isDelivery',
                value: true,
              })
            )
          }
        >
          Delivery
        </DeliveryOptionBtn>
      </DeliveryBtnWrapper>
      {orderListState.isDelivery && (
        <DeliveryRequirement>
          {'< Note >'}
          <br />
          1. Delivery service is available only for more than $ 50 purchase on
          Saturday. <br />
          2. Additional delivery fee can range from 0 to 10 dollars by distance.
        </DeliveryRequirement>
      )}
    </DeliveryOptionWrapper>
  );
};
