import React from 'react';
import { Calendar, OnChangeProps } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { DatesWrapper, DeliveryRequirement } from './CheckoutPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {
  // showModal: boolean;
  closeModal: () => void;
}

let minDate = new Date(),
  maxDate = new Date();
minDate.setDate(minDate.getDate() + 7);
maxDate.setDate(maxDate.getDate() + 60);

export const SelectDate: React.FC<Props> = ({ closeModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();

  const onChangeHandler = (date: OnChangeProps) => {
    dispatch(
      update({
        name: 'pickupDeliveryDate',
        value: date,
      })
    );
    closeModal();
  };

  return (
    <DatesWrapper>
      {orderListState.isDelivery && (
        <DeliveryRequirement>
          {'< Note >'}
          <br />
          1. Delivery service is available only for more than $ 50 purchase on
          Saturday. <br />
          2. Additional delivery fee can range from 0 to 10 dollars by distance.
        </DeliveryRequirement>
      )}
      <Calendar
        date={orderListState.pickupDeliveryDate}
        onChange={onChangeHandler}
        minDate={minDate}
        maxDate={maxDate}
      />
    </DatesWrapper>
  );
};
