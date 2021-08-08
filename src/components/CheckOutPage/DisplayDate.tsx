import React, { Dispatch, SetStateAction } from 'react';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
import {
  CheckOutQuestion,
  DateBtn,
  OptionWrapper,
} from './CheckoutPageElements';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const DisplayDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);

  return (
    <OptionWrapper>
      <CheckOutQuestion>When would you like to take them?</CheckOutQuestion>
      <DateBtn onClick={() => setShowModal(true)}>
        {orderListState.pickupDeliveryDate
          ? orderListState.pickupDeliveryDate.toDateString()
          : 'Select a date'}
      </DateBtn>
    </OptionWrapper>
  );
};
