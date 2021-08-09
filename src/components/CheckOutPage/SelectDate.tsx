import React, { Dispatch, SetStateAction } from 'react';
import { Calendar, OnChangeProps } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  ModalWrapper,
  DeliveryRequirement,
  TimeWrapper,
  TimeSelect,
  CloseBtn,
} from './CheckoutPageElements';
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

  const onDateChangeHandler = (date: OnChangeProps): void => {
    dispatch(
      update({
        name: 'pickupDeliveryDate',
        value: date,
      })
    );
  };

  const onTimeChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;

    dispatch(
      update({
        name: name,
        value: Number(value),
      })
    );

    if (orderListState.pickupDeliveryDate !== null) {
      const newDate = orderListState.pickupDeliveryDate;

      name === 'pickupHour'
        ? newDate.setHours(Number(value))
        : newDate.setMinutes(Number(value));

      dispatch(
        update({
          name: 'pickupDeliveryDate',
          value: newDate,
        })
      );
    }
  };

  return (
    <ModalWrapper>
      <DeliveryRequirement>
        {orderListState.isDelivery
          ? 'Please select a date and time you want to be delivered.'
          : 'Please select a date and time you want to pick up.'}
      </DeliveryRequirement>
      <Calendar
        date={
          orderListState.pickupDeliveryDate
            ? orderListState.pickupDeliveryDate
            : minDate
        }
        onChange={onDateChangeHandler}
        minDate={minDate}
        maxDate={maxDate}
      />
      {orderListState.pickupDeliveryDate && (
        <TimeWrapper>
          TIME
          <TimeSelect
            name={'pickupHour'}
            value={orderListState.pickupHour}
            onChange={onTimeChangeHandler}
          >
            {orderListState.isDelivery ? (
              <>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
              </>
            ) : (
              <>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
              </>
            )}
          </TimeSelect>
          :
          <TimeSelect
            name={'pickupMinute'}
            value={orderListState.pickupMinute}
            onChange={onTimeChangeHandler}
          >
            <option>00</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </TimeSelect>
        </TimeWrapper>
      )}
      <CloseBtn onClick={() => setShowModal(false)}>Confirm</CloseBtn>
    </ModalWrapper>
  );
};
