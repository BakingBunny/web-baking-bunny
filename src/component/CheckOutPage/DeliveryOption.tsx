import React from 'react';
import { checkout, update } from '../../store/checkoutSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  DeliveryOptionWrapper,
  DeliveryOptionBtn,
} from './CheckoutPageElements';

interface Props {}

export const DeliveryOption = (props: Props) => {
  const checkoutState = useAppSelector(checkout);
  const dispatch = useAppDispatch();

  return (
    <DeliveryOptionWrapper>
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
    </DeliveryOptionWrapper>
  );
};
