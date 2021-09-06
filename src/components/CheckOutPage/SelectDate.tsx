import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import 'react-datetime/css/react-datetime.css';
// import { Calendar, CalendarProps, OnChangeProps } from 'react-date-range';
// import { Calendar } from 'react-date-range';
import { addDays } from 'date-fns';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  ModalWrapper,
  DeliveryRequirement,
  TimeWrapper,
  TimeSelect,
  BtnWrapper,
  CancelBtn,
  ConfirmBtn,
} from './CheckoutPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';
import { CartInterface } from '../../interface/CartInterface';
import { products } from '../../store/cartSlice';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const availableDeliveryHours: number[] = [11, 12, 13, 14, 15];
const availablePickupHours: number[] = [14, 15, 16, 17, 18, 19];
const availableMinutes: number[] = [0, 10, 20, 30, 40, 50];

export const SelectDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const cartListState = useAppSelector<CartInterface[]>(products);
  const dispatch = useAppDispatch();
  const [minDate, setMinDate] = useState(addDays(new Date(), 7));
  const maxDate = addDays(new Date(), 60);
  const [pickupDeliveryDate, setPickupDeliveryDate] = useState<Date>();
  const [isDacqInCart, setisDacqInCart] = useState<boolean>(false);

  useEffect(() => {
    setisDacqInCart(
      /* Check if dacq in cart, when cart items changed */
      cartListState.some((item) => item.product.category.id === 2)
    );
  }, [cartListState]);

  const onDateChangeHandler = (
    date: Date,
    { disabled }: DayModifiers
  ): void => {
    if (!disabled) {
      orderListState.isDelivery
        ? date.setHours(availableDeliveryHours[0], 0, 0, 0)
        : date.setHours(availablePickupHours[0], 0, 0, 0);
      setMinDate(date);
      setPickupDeliveryDate(date);
    }
  };

  const onTimeChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    if (pickupDeliveryDate) {
      const { name, value } = e.target;
      const newDate = new Date(pickupDeliveryDate);

      name === 'pickupHour'
        ? newDate.setHours(Number(value))
        : newDate.setMinutes(Number(value));
      setPickupDeliveryDate(newDate);
    }
  };

  const onConfirmHandler = () => {
    if (pickupDeliveryDate) {
      dispatch(
        update({
          name: 'pickupDeliveryDate',
          value: pickupDeliveryDate,
        })
      );
    }
    setShowModal(false);
  };

  const hoursOption = (hours: number[]): any => {
    return hours.map((hour) => (
      <option key={hour} value={hour}>
        {hour < 13 ? hour : hour - 12}
      </option>
    ));
  };

  return (
    <ModalWrapper>
      <DeliveryRequirement>
        {orderListState.isDelivery
          ? 'Please select a date and time you want to be delivered.'
          : 'Please select a date and time you want to pick up.'}
      </DeliveryRequirement>
      <DayPicker
        onDayClick={onDateChangeHandler}
        selectedDays={pickupDeliveryDate}
        enableOutsideDaysClick={false}
        disabledDays={
          orderListState.isDelivery
            ? [
                { daysOfWeek: [0, 1, 2, 3, 4, 5] },
                { before: minDate, after: maxDate },
              ]
            : isDacqInCart
            ? [
                { daysOfWeek: [0, 1, 2, 3] },
                { before: minDate, after: maxDate },
              ]
            : { before: minDate, after: maxDate }
        }
      />
      {pickupDeliveryDate && (
        <TimeWrapper>
          TIME
          <TimeSelect
            name={'pickupHour'}
            value={pickupDeliveryDate?.getHours()}
            onChange={onTimeChangeHandler}
          >
            {orderListState.isDelivery
              ? hoursOption(availableDeliveryHours)
              : hoursOption(availablePickupHours)}
          </TimeSelect>
          :
          <TimeSelect
            name={'pickupMinute'}
            value={pickupDeliveryDate?.getMinutes()}
            onChange={onTimeChangeHandler}
          >
            {availableMinutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute.toString().padStart(2, '0')}
              </option>
            ))}
          </TimeSelect>
          {pickupDeliveryDate && pickupDeliveryDate.getHours() < 12
            ? ' AM'
            : ' PM'}
        </TimeWrapper>
      )}
      <BtnWrapper>
        <ConfirmBtn onClick={onConfirmHandler}>Confirm</ConfirmBtn>
        <CancelBtn onClick={() => setShowModal(false)}>Cancel</CancelBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};
