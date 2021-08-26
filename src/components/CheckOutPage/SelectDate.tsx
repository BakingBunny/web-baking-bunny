import React, { Dispatch, SetStateAction, useState } from 'react';
// import { Calendar, CalendarProps, OnChangeProps } from 'react-date-range';
import { Calendar } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
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

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const availableDeliveryHours: number[] = [11, 12, 13, 14, 15];
const availablePickupHours: number[] = [14, 15, 16, 17, 18, 19];
const availableMinutes: number[] = [0, 10, 20, 30, 40, 50];

const minDate = addDays(new Date(), 7);
minDate.setHours(14, 0, 0, 0);
const maxDate = addDays(new Date(), 60);

export const SelectDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();
  const [pickupDeliveryDate, setPickupDeliveryDate] = useState<Date>(
    orderListState.pickupDeliveryDate || minDate
  );

  // const onDateChangeHandler = (date: OnChangeProps): void => {
  const onDateChangeHandler = (date: any): void => {
    const newDate = new Date(date);
    orderListState.isDelivery
      ? newDate.setHours(availableDeliveryHours[0])
      : newDate.setHours(availablePickupHours[0]);
    newDate.setMinutes(0);
    setPickupDeliveryDate(newDate);
  };

  const onTimeChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    const newDate = new Date(pickupDeliveryDate);

    name === 'pickupHour'
      ? newDate.setHours(Number(value))
      : newDate.setMinutes(Number(value));
    setPickupDeliveryDate(newDate);
  };

  const onConfirmHandler = () => {
    dispatch(
      update({
        name: 'pickupDeliveryDate',
        value: pickupDeliveryDate,
      })
    );
    setShowModal(false);
  };

  // const disabledDate = (current: Date): boolean => {
  //   return current > minDate;
  // };

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
      <Calendar
        date={pickupDeliveryDate}
        onChange={onDateChangeHandler}
        minDate={minDate}
        maxDate={maxDate}
        // disabledDates={[disd]}
        // disabledDay={disabledDate}
      />
      <TimeWrapper>
        TIME
        <TimeSelect
          name={'pickupHour'}
          value={pickupDeliveryDate.getHours()}
          onChange={onTimeChangeHandler}
        >
          {orderListState.isDelivery
            ? hoursOption(availableDeliveryHours)
            : hoursOption(availablePickupHours)}
        </TimeSelect>
        :
        <TimeSelect
          name={'pickupMinute'}
          value={pickupDeliveryDate.getMinutes()}
          onChange={onTimeChangeHandler}
        >
          {availableMinutes.map((minute) => (
            <option key={minute} value={minute}>
              {minute.toString().padStart(2, '0')}
            </option>
          ))}
        </TimeSelect>
        {pickupDeliveryDate.getHours() < 12 ? ' AM' : ' PM'}
      </TimeWrapper>
      <BtnWrapper>
        <ConfirmBtn onClick={onConfirmHandler}>Confirm</ConfirmBtn>
        <CancelBtn onClick={() => setShowModal(false)}>Cancel</CancelBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};
