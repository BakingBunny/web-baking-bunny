import React, { Dispatch, SetStateAction, useState } from 'react';
// import { Calendar, CalendarProps, OnChangeProps } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { customCake, update } from '../../store/customCakeSlice';
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
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import DayPicker, { DayModifiers } from 'react-day-picker';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const availableDeliveryHours: number[] = [11, 12, 13, 14, 15];
const availablePickupHours: number[] = [14, 15, 16, 17, 18, 19];
const availableMinutes: number[] = [0, 10, 20, 30, 40, 50];

export const SelectDate: React.FC<Props> = ({ setShowModal }) => {
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const dispatch = useAppDispatch();
  const [minDate, setMinDate] = useState(addDays(new Date(), 7));
  const maxDate = addDays(new Date(), 60);
  const [requestDate, setRequestDate] = useState<Date>();

  const onDateChangeHandler = (
    date: Date,
    { disabled }: DayModifiers
  ): void => {
    if (!disabled) {
      customCakeState.isDelivery
        ? date.setHours(availableDeliveryHours[0], 0, 0, 0)
        : date.setHours(availablePickupHours[0], 0, 0, 0);
      setMinDate(date);
      setRequestDate(date);
    }
  };

  const onTimeChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    if (requestDate) {
      const { name, value } = e.target;
      const newDate = new Date(requestDate);
      name === 'pickupHour'
        ? newDate.setHours(Number(value))
        : newDate.setMinutes(Number(value));
      setRequestDate(newDate);
    }
  };

  const onConfirmHandler = () => {
    if (requestDate) {
      dispatch(
        update({
          name: 'requestDate',
          value: requestDate,
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
        {customCakeState.isDelivery
          ? 'Please select a date and time you want to be delivered.'
          : 'Please select a date and time you want to pick up.'}
      </DeliveryRequirement>
      <DayPicker
        onDayClick={onDateChangeHandler}
        selectedDays={requestDate}
        enableOutsideDaysClick={false}
        disabledDays={
          customCakeState.isDelivery
            ? [
                { daysOfWeek: [0, 1, 2, 3, 4, 5] },
                { before: minDate, after: maxDate },
              ]
            : { before: minDate, after: maxDate }
        }
      />
      {requestDate && (
        <TimeWrapper>
          TIME
          <TimeSelect
            name={'pickupHour'}
            value={requestDate?.getHours()}
            onChange={onTimeChangeHandler}
          >
            {customCakeState.isDelivery
              ? hoursOption(availableDeliveryHours)
              : hoursOption(availablePickupHours)}
          </TimeSelect>
          :
          <TimeSelect
            name={'pickupMinute'}
            value={requestDate?.getMinutes()}
            onChange={onTimeChangeHandler}
          >
            {availableMinutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute.toString().padStart(2, '0')}
              </option>
            ))}
          </TimeSelect>
          {requestDate && requestDate.getHours() < 12 ? ' AM' : ' PM'}
        </TimeWrapper>
      )}
      <BtnWrapper>
        <ConfirmBtn onClick={onConfirmHandler}>Confirm</ConfirmBtn>
        <CancelBtn onClick={() => setShowModal(false)}>Cancel</CancelBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};
