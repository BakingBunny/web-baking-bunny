import React from 'react';
import { Calendar, OnChangeProps } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { DatesWrapper } from './CheckoutPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {}

let minDate = new Date(),
  maxDate = new Date();
minDate.setDate(minDate.getDate() + 7);
maxDate.setDate(maxDate.getDate() + 60);

export const Dates = (props: Props) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();

  return (
    <DatesWrapper>
      <Calendar
        date={orderListState.pickupDeliveryDate}
        // date={new Date()}
        onChange={(date: OnChangeProps) =>
          dispatch(
            update({
              name: 'pickupDeliveryDate',
              value: date,
            })
          )
        }
        // minDate={new Date()}
        minDate={minDate}
        maxDate={maxDate}
      />
    </DatesWrapper>
  );
};
