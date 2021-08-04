import React, { Dispatch, SetStateAction } from 'react';
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
import {
  CheckOutQuestion,
  DateBtn,
  DateBtnWrapper,
  TimeWrapper,
  TimeSelect,
} from './CheckoutPageElements';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const DisplayDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(
      update({
        name: e.target.name,
        value: Number(e.target.value),
      })
    );
  };

  return (
    <DateBtnWrapper>
      <CheckOutQuestion>When would you like to take them?</CheckOutQuestion>
      <DateBtn onClick={() => setShowModal(true)}>
        {orderListState.pickupDeliveryDate
          ? orderListState.pickupDeliveryDate.toDateString()
          : 'Select a date'}
      </DateBtn>
    </DateBtnWrapper>
  );
};
