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

  const onChangeHandler = (date: OnChangeProps): void => {
    dispatch(
      update({
        name: 'pickupDeliveryDate',
        value: date,
      })
    );
    // setShowModal(false);
  };

  const onChangeHandler_ = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(
      update({
        name: e.target.name,
        value: Number(e.target.value),
      })
    );
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
        onChange={onChangeHandler}
        minDate={minDate}
        maxDate={maxDate}
      />
      <TimeWrapper>
        TIME
        <TimeSelect
          name={'pickupHour'}
          value={orderListState.pickupHour}
          onChange={onChangeHandler_}
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
          onChange={onChangeHandler_}
        >
          <option>00</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </TimeSelect>
      </TimeWrapper>
      <CloseBtn onClick={() => setShowModal(false)}>Confirm</CloseBtn>
    </ModalWrapper>
  );
};
