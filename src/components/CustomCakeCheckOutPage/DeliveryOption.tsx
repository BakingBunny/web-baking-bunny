import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from '../../store/hooks';
import {
  OptionWrapper,
  DeliveryBtnWrapper,
  DeliveryOptionBtn,
  CheckOutQuestion,
} from './CheckoutPageElements';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { customCake } from '../../store/customCakeSlice';

toast.configure();

interface Props {
  setShowPickUpLocationModal: Dispatch<SetStateAction<boolean>>;
  setShowCalcDeliveryFeeModal: Dispatch<SetStateAction<boolean>>;
}

export const DeliveryOption: React.FC<Props> = ({
  setShowPickUpLocationModal,
  setShowCalcDeliveryFeeModal,
}) => {
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);

  const onClickHandler = (isDelivery: boolean): void => {
    isDelivery
      ? setShowCalcDeliveryFeeModal(true)
      : setShowPickUpLocationModal(true);
  };

  return (
    <OptionWrapper>
      <CheckOutQuestion>How would you like to take them?</CheckOutQuestion>
      <DeliveryBtnWrapper>
        <DeliveryOptionBtn
          isSelected={customCakeState.isDelivery === false}
          onClick={() => {
            onClickHandler(false);
          }}
        >
          Pick Up
        </DeliveryOptionBtn>
        <DeliveryOptionBtn
          isSelected={customCakeState.isDelivery === true}
          onClick={() => onClickHandler(true)}
        >
          Delivery
        </DeliveryOptionBtn>
      </DeliveryBtnWrapper>
    </OptionWrapper>
  );
};
