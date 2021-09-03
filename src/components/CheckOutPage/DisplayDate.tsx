import React, { Dispatch, SetStateAction, useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './customDatePickerWidth.css';
import { orderList, update } from '../../store/orderListSlice';
import { addDays } from 'date-fns';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
import {
  CheckOutQuestion,
  DateBtn,
  OptionWrapper,
} from './CheckoutPageElements';
import { CartInterface } from '../../interface/CartInterface';
import { products } from '../../store/cartSlice';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const minDate = addDays(new Date(), 7);
minDate.setHours(14, 0, 0, 0);
const maxDate = addDays(new Date(), 60);

export const DisplayDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const cartListState = useAppSelector<CartInterface[]>(products);
  const dispatch = useAppDispatch();
  const [pickupDeliveryDate, setPickupDeliveryDate] = useState<Date>(
    orderListState.pickupDeliveryDate || minDate
  );

  const isValidDate = (current: any): boolean => {
    let isValid = false;

    /* Delivery => only Saturdays */
    if (orderListState.isDelivery && current.day() !== 6) return false;
    if (cartListState.some((k) => console.log(k))) return false;

    return current > minDate && current < maxDate;
  };

  const onDateChangeHandler = (date: any): void => {
    const newDate = new Date(date);
    // orderListState.isDelivery
    //   ? newDate.setHours(availableDeliveryHours[0])
    //   : newDate.setHours(availablePickupHours[0]);
    // newDate.setMinutes(0);
    setPickupDeliveryDate(newDate);
  };

  return (
    <OptionWrapper>
      <CheckOutQuestion>When would you like to take them?</CheckOutQuestion>
      <Datetime
        value={pickupDeliveryDate}
        onChange={onDateChangeHandler}
        isValidDate={isValidDate}
        // input={false}
        timeFormat='HH:mm'
        timeConstraints={{
          hours: { min: 9, max: 15, step: 1 },
          minutes: { min: 0, max: 59, step: 10 },
        }}
        // timeFormat={false}
        // minDate={minDate}
        // maxDate={maxDate}
        // disabledDates={[addDays(new Date(), 10)]}
        // disabledDay={disabledDate}
      />
      {/* <DateBtn
        onClick={() => setShowModal(true)}
        isSelected={orderListState.pickupDeliveryDate !== null}
      >
        {orderListState.pickupDeliveryDate ? (
          <>
            {orderListState.pickupDeliveryDate.toDateString()}
            <br />
            {orderListState.pickupDeliveryDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </>
        ) : (
          'Select date and time'
        )}
      </DateBtn> */}
    </OptionWrapper>
  );
};
