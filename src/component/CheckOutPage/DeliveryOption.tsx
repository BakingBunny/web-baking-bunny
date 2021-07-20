import React from 'react';
import { checkout, update } from '../../store/checkoutSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  DeliveryOptionWrapper,
  DeliveryBtnWrapper,
  DeliveryOptionBtn,
  DeliveryRequirement,
} from './CheckoutPageElements';

interface Props {}

export const DeliveryOption = (props: Props) => {
  const checkoutState = useAppSelector(checkout);
  const dispatch = useAppDispatch();

  return (
    <DeliveryOptionWrapper>
      <DeliveryBtnWrapper>
        <DeliveryOptionBtn
          isSelected={checkoutState.isDelivery === false}
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
          isSelected={checkoutState.isDelivery === true}
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
      {checkoutState.isDelivery && (
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
