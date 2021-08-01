import React, { Dispatch, SetStateAction } from 'react';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import {
  CheckOutQuestion,
  DateBtn,
  DateBtnWrapper,
} from './CheckoutPageElements';

interface Props {
  openCalendarModal: () => void;
}

export const DisplayDate: React.FC<Props> = ({ openCalendarModal }) => {
  const orderListState = useAppSelector(orderList);

  return (
    <DateBtnWrapper>
      <CheckOutQuestion>When would you like to take them?</CheckOutQuestion>
      <DateBtn onClick={() => openCalendarModal()}>
        {orderListState.pickupDeliveryDate
          ? orderListState.pickupDeliveryDate.toDateString()
          : 'Select a date'}
      </DateBtn>
    </DateBtnWrapper>
  );
};
