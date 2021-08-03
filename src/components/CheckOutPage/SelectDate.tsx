import React, { Dispatch, SetStateAction } from 'react';
import { Calendar, OnChangeProps } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { ModalWrapper, DeliveryRequirement } from './CheckoutPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

let minDate = new Date(),
  maxDate = new Date();
minDate.setDate(minDate.getDate() + 7);
maxDate.setDate(maxDate.getDate() + 60);

export const SelectDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();

  const onChangeHandler = (date: OnChangeProps): void => {
    dispatch(
      update({
        name: 'pickupDeliveryDate',
        value: date,
      })
    );
    setShowModal(false);
  };

  return (
    <ModalWrapper>
      <DeliveryRequirement>
        Please select a date you want to pick up.
      </DeliveryRequirement>
      <Calendar
        date={
          orderListState.pickupDeliveryDate
            ? orderListState.pickupDeliveryDate
            : minDate
        }
        onChange={onChangeHandler}
        minDate={minDate}
        maxDate={maxDate}
      />
    </ModalWrapper>
  );
};
