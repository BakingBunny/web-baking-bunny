import React, { Dispatch, SetStateAction } from 'react';
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  DeliveryOptionWrapper,
  DeliveryBtnWrapper,
  DeliveryOptionBtn,
  CheckOutQuestion,
} from './CheckoutPageElements';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const DeliveryOption: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector(orderList);
  const dispatch = useAppDispatch();

  const onClickHandler = (isDelivery: boolean) => {
    // 'Delivery service is available only for more than $ 50 purchase on Saturday. '
    dispatch(
      update({
        name: 'isDelivery',
        value: isDelivery,
      })
    );
    setShowModal(true);
  };

  return (
    <DeliveryOptionWrapper>
      <CheckOutQuestion>How would you like to take them?</CheckOutQuestion>
      <DeliveryBtnWrapper>
        <DeliveryOptionBtn
          isSelected={orderListState.isDelivery === false}
          onClick={() => {
            onClickHandler(false);
          }}
        >
          Pick Up
        </DeliveryOptionBtn>
        <DeliveryOptionBtn
          isSelected={orderListState.isDelivery === true}
          onClick={() => onClickHandler(true)}
        >
          Delivery
        </DeliveryOptionBtn>
      </DeliveryBtnWrapper>
    </DeliveryOptionWrapper>
  );
};
