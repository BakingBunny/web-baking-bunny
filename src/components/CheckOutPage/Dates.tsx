import React from 'react';
import { Calendar, OnChangeProps } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { checkout, update } from '../../store/checkoutSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { DatesWrapper } from './CheckoutPageElements';

interface Props {}

export const Dates = (props: Props) => {
  const checkoutState = useAppSelector(checkout);
  const dispatch = useAppDispatch();

  return (
    <DatesWrapper>
      <Calendar
        date={checkoutState.pickupDate}
        onChange={(date: OnChangeProps) =>
          dispatch(
            update({
              name: 'pickupDate',
              value: date,
            })
          )
        }
        // minDate={new Date().setDate(new Date().getDate() + 1)}
        minDate={new Date()}
      />
    </DatesWrapper>
  );
};
