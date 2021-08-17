import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
import formatCurrency from '../../utils/formatCurrency';
import {
  OptionWrapper,
  DeliveryBtnWrapper,
  DeliveryOptionBtn,
  CheckOutQuestion,
  DisplayDeliveryFee,
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

    isDelivery
      ? setShowCalcDeliveryFeeModal(true)
      : setShowPickUpLocationModal(true);
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
      {orderListState.isDelivery && //display delivery fee here
        (orderListState.deliveryFee > 0 ? (
          <DisplayDeliveryFee>
            {formatCurrency(orderListState.deliveryFee)} delivery fee applied.
          </DisplayDeliveryFee>
        ) : (
          orderListState.deliveryFee === 0 && (
            <DisplayDeliveryFee>Free Delivery Service</DisplayDeliveryFee>
          )
        ))}
    </OptionWrapper>
  );
};
