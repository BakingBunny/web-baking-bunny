import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { orderList, update } from '../../store/orderListSlice';
import { addDays } from 'date-fns';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
import { CheckOutQuestion, OptionWrapper } from './CheckoutPageElements';
import { CartInterface } from '../../interface/CartInterface';
import { products } from '../../store/cartSlice';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const DisplayDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const cartListState = useAppSelector<CartInterface[]>(products);
  const [isDacqInCart, setisDacqInCart] = useState<boolean>(false);
  const minDate = addDays(new Date(), 7);
  minDate.setHours(14, 0, 0, 0);
  const maxDate = addDays(new Date(), 60);
  const dispatch = useAppDispatch();

  /* Check if dacq in cart, when cart items changed */
  useEffect(() => {
    setisDacqInCart(
      cartListState.some((item) => item.product.category.id === 2)
    );
  }, [cartListState]);

  const isValidDate = (current: any): boolean => {
    /* Delivery => only Saturdays */
    if (orderListState.isDelivery && current.day() !== 6) return false;

    /* Dacquoise => only Thursday, Friday and Saturday */
    if (
      isDacqInCart &&
      current.day() !== 4 &&
      current.day() !== 5 &&
      current.day() !== 6
    )
      return false;

    /* Between min and max date */
    return current > minDate && current < maxDate;
  };

  const onDateChangeHandler = (date: any): void => {
    // if (orderListState.pickupDeliveryDate === null) date.setHours(14, 0, 0, 0);

    console.log(date);
    dispatch(
      update({
        name: 'pickupDeliveryDate',
        value: date,
      })
    );
  };

  return (
    <OptionWrapper>
      <CheckOutQuestion>When would you like to take them?</CheckOutQuestion>
      <DayPicker />
      {/* <Datetime
        // value={pickupDeliveryDate}
        value={orderListState.pickupDeliveryDate || addDays(minDate, 1)}
        onChange={onDateChangeHandler}
        isValidDate={isValidDate}
        // input={false}
        timeFormat='HH:mm'
        timeConstraints={
          orderListState.isDelivery
            ? {
                hours: { min: 11, max: 15, step: 1 },
                minutes: { min: 0, max: 59, step: 10 },
              }
            : {
                hours: { min: 14, max: 19, step: 1 },
                minutes: { min: 0, max: 59, step: 10 },
              }
        }
      /> */}
    </OptionWrapper>
  );
};
