import React, { useState } from 'react';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import {
  Container,
  BasicOption,
  UserInfoForm,
  Wrapper,
  Title,
  ConfirmLink,
} from './CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';
import { SelectDate } from './SelectDate';
import { UserInfo } from './UserInfo';
import { ModalWindow } from '../../utils/ModalWindow';
import { DisplayDate } from './DisplayDate';
import { ModalCalcDeliveryFee } from './ModalCalcDeliveryFee';
import { ModalPickUpLocation } from './ModalPickUpLocation';
import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {}

export const CheckOut = (props: Props) => {
  const [showPickUpLocationModal, setShowPickUpLocationModal] =
    useState<boolean>(false);
  const [showCalcDeliveryFeeModal, setShowCalcDeliveryFeeModal] =
    useState<boolean>(false);
  const [showCalendarModal, setShowCalendarModal] = useState<boolean>(false);
  const orderListState = useAppSelector<OrderListInterface>(orderList);

  return (
    <>
      <Container>
        <Title>Checkout</Title>
        <Wrapper>
          <BasicOption>
            <DeliveryOption
              setShowPickUpLocationModal={setShowPickUpLocationModal}
              setShowCalcDeliveryFeeModal={setShowCalcDeliveryFeeModal}
            />
            {orderListState.isDelivery !== undefined && (
              <DisplayDate setShowModal={setShowCalendarModal} />
            )}
          </BasicOption>
          {orderListState.pickupDeliveryDate && (
            <>
              <UserInfoForm>
                <UserInfo />
              </UserInfoForm>
              <ConfirmLink to={'/review'}>Confirm</ConfirmLink>
            </>
          )}
        </Wrapper>
      </Container>
      {showPickUpLocationModal && (
        <ModalWindow
          showModal={showPickUpLocationModal}
          setShowModal={setShowPickUpLocationModal}
        >
          <ModalPickUpLocation setShowModal={setShowPickUpLocationModal} />
        </ModalWindow>
      )}
      {showCalcDeliveryFeeModal && (
        <ModalWindow
          showModal={showCalcDeliveryFeeModal}
          setShowModal={setShowCalcDeliveryFeeModal}
        >
          <ModalCalcDeliveryFee setShowModal={setShowCalcDeliveryFeeModal} />
        </ModalWindow>
      )}
      {showCalendarModal && (
        <ModalWindow
          showModal={showCalendarModal}
          setShowModal={setShowCalendarModal}
        >
          <SelectDate setShowModal={setShowCalendarModal} />
        </ModalWindow>
      )}
    </>
  );
};
