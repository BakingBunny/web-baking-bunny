import React from 'react';
import { Calendar, OnChangeProps } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useFormContext } from 'react-hook-form';
// import { checkout, update } from '../../store/checkoutSlice';
// import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { DatesWrapper } from './CheckoutPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {}

export const Dates = (props: Props) => {
  // const checkoutState = useAppSelector(checkout);
  // const dispatch = useAppDispatch();
  const {
    register,
    // control,
    watch,
    formState: { errors },
  } = useFormContext<OrderListInterface>();
  // const watchPickupDeliveryDate = watch('pickupDeliveryDate', new Date());

  return (
    <DatesWrapper>
      {/* <Calendar
        // date={checkoutState.orderList.pickupDeliveryDate}
        date={watchPickupDeliveryDate}
        onChange={(date: OnChangeProps) =>
          // dispatch(
          //   update({
          //     name: 'pickupDate',
          //     value: date,
          //   })
          // )
          {...register('pickupDeliveryDate', {
            // required: 'This is required',
            // maxLength: { value: 30, message: 'Max length exceeded' },
          })}
        }
        // minDate={new Date().setDate(new Date().getDate() + 1)}
        minDate={new Date()}
      /> */}
    </DatesWrapper>
  );
};
