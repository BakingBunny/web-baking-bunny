import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
import {
  OptionWrapper,
  DeliveryBtnWrapper,
  DeliveryOptionBtn,
  CheckOutQuestion,
} from './CheckoutPageElements';

toast.configure();

interface Props {
  setShowPickUpLocationModal: Dispatch<SetStateAction<boolean>>;
  setShowCalcDeliveryFeeModal: Dispatch<SetStateAction<boolean>>;
}

export const DeliveryOption: React.FC<Props> = ({
  setShowPickUpLocationModal,
  setShowCalcDeliveryFeeModal,
}) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();

  const onClickHandler = (isDelivery: boolean): void => {
    // refuse to deliver if subtotal is below than $50
    if (isDelivery && orderListState.subtotal < 50) {
      toast(
        'Sorry, delivery service is available only for more than $50 purchase on Saturdays.',
        {
          type: 'error',
        }
      );
      return;
    }

    // if dellivery then open modal to calc the fee
    isDelivery
      ? setShowCalcDeliveryFeeModal(true)
      : setShowPickUpLocationModal(true);

    // if delliver and date is NOT Saturday then reset the date.
    if (isDelivery && orderListState.pickupDeliveryDate?.getDay() !== 6)
      dispatch(
        update({
          name: 'pickupDeliveryDate',
          value: null,
        })
      );
    //TODO: hour and minutes should be reset as well.

    // update the store value
    dispatch(
      update({
        name: 'isDelivery',
        value: isDelivery,
      })
    );
  };

  return (
    <OptionWrapper>
      <CheckOutQuestion>How would you like to take them?</CheckOutQuestion>
      <DeliveryBtnWrapper>
        <DeliveryOptionBtn
          isSelected={orderListState.isDelivery === false}
          onClick={() => {
            onClickHandler(false);
          }}
        >
          Pick Up
        </DeliveryOptionBtn>
        <DeliveryOptionBtn
          isSelected={orderListState.isDelivery === true}
          onClick={() => onClickHandler(true)}
        >
          Delivery
        </DeliveryOptionBtn>
      </DeliveryBtnWrapper>
    </OptionWrapper>
  );
};
