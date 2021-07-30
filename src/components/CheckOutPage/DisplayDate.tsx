import React, { Dispatch, SetStateAction } from 'react';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import { DateBtn } from './CheckoutPageElements';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const DisplayDate: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector(orderList);
  console.log(orderListState.pickupDeliveryDate);

  return (
    <DateBtn onClick={() => setShowModal(true)}>
      on {orderListState.pickupDeliveryDate.toDateString()}
    </DateBtn>
  );
};
