import React, { useState, useCallback } from 'react';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import { Wrapper, Title, ConfirmBtn } from './CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';
import { SelectDate } from './SelectDate';
import { UserInfo } from './UserInfo';
import { ModalWindow } from '../ModalWindow';
import { DisplayDate } from './DisplayDate';
import { CalcDeliveryFee } from './CalcDeliveryFee';

interface Props {}

export const CheckOut = (props: Props) => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useState<boolean>(false);
  const [isCalcDeliveryFeeModalOpen, setIsCalcDeliveryFeeModalOpen] =
    useState<boolean>(false);
  const orderListState = useAppSelector(orderList);

  const openCalcDeliveryFeeModal = useCallback(() => {
    setIsCalcDeliveryFeeModalOpen(true);
    document.body.style.overflow = 'hidden'; // prevent background scrolling when modal open
  }, [setIsCalcDeliveryFeeModalOpen]);

  const closeCalcDeliveryFeeModal = useCallback(() => {
    setIsCalcDeliveryFeeModalOpen(false);
    document.body.style.overflow = 'unset'; // allow scrolling once modal close
  }, [setIsCalcDeliveryFeeModalOpen]);

  const openCalendarModal = useCallback(() => {
    setIsCalendarModalOpen(true);
    document.body.style.overflow = 'hidden'; // prevent background scrolling when modal open
  }, [setIsCalendarModalOpen]);

  const closeCalendarModal = useCallback(() => {
    setIsCalendarModalOpen(false);
    document.body.style.overflow = 'unset'; // allow scrolling once modal close
  }, [setIsCalendarModalOpen]);

  return (
    <>
      <Wrapper>
        <Title>Checkout</Title>
        <DeliveryOption openCalcDeliveryFeeModal={openCalcDeliveryFeeModal} />
        <DisplayDate openCalendarModal={openCalendarModal} />
        {orderListState.pickupDeliveryDate && (
          <>
            <UserInfo />
            <ConfirmBtn>Confirm</ConfirmBtn>
          </>
        )}
      </Wrapper>
      {isCalcDeliveryFeeModalOpen && (
        <ModalWindow
          isModalOpen={isCalcDeliveryFeeModalOpen}
          closeModal={closeCalcDeliveryFeeModal}
        >
          <CalcDeliveryFee closeModal={closeCalcDeliveryFeeModal} />
        </ModalWindow>
      )}
      {isCalendarModalOpen && (
        <ModalWindow
          isModalOpen={isCalendarModalOpen}
          closeModal={closeCalendarModal}
        >
          <SelectDate closeModal={closeCalendarModal} />
        </ModalWindow>
      )}
    </>
  );
};
