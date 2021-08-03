import React, { Dispatch, SetStateAction } from 'react';
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
import {
  CheckOutQuestion,
  DateBtn,
  DateBtnWrapper,
  TimeWrapper,
  TimeSelect,
} from './CheckoutPageElements';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const DisplayDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(
      update({
        name: e.target.name,
        value: Number(e.target.value),
      })
    );
  };

  return (
    <DateBtnWrapper>
      <CheckOutQuestion>When would you like to take them?</CheckOutQuestion>
      <DateBtn onClick={() => setShowModal(true)}>
        {orderListState.pickupDeliveryDate
          ? orderListState.pickupDeliveryDate.toDateString()
          : 'Select a date'}
      </DateBtn>
      {!orderListState.isDelivery && orderListState.pickupDeliveryDate && (
        <TimeWrapper>
          <TimeSelect
            name={'pickupHour'}
            value={orderListState.pickupHour}
            onChange={onChangeHandler}
          >
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </TimeSelect>
          :
          <TimeSelect
            name={'pickupMinute'}
            value={orderListState.pickupMinute}
            onChange={onChangeHandler}
          >
            <option>00</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </TimeSelect>
          PM
        </TimeWrapper>
      )}
      {orderListState.isDelivery && orderListState.pickupDeliveryDate && (
        <p>Delivery service is between 1PM and 4PM.</p>
      )}
    </DateBtnWrapper>
  );
};
