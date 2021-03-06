import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  customCake,
  update as customCakeUpdate,
} from '../../store/customCakeSlice';
import { userInfo, update as userInfoUpdate } from '../../store/userInfoSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  ClientInfoInput,
  ClientInfoLabel,
  ClientInputWrapper,
  ModalWrapper,
  DeliveryRequirement,
  CheckOutQuestion,
  CheckAddressBtn,
  ConfirmBtn,
  BtnWrapper,
  CancelBtn,
} from './CheckoutPageElements';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import formatCurrency from '../../utils/formatCurrency';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalCalcDeliveryFee: React.FC<Props> = ({ setShowModal }) => {
  const [isFeeFetched, setIsFeeFetched] = useState<boolean>(false);
  const [deliveryFee, setDeliveryFee] = useState<number>(-1);
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const dispatch = useAppDispatch();

  // update user info from store
  const onPostalCodeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(
      userInfoUpdate({
        name: 'postalCode',
        value: e.target.value,
      })
    );
  };

  // check postal code to calculate delivery fee
  const onCheckAddrHandler = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/delivery/${userInfoState.postalCode}`
      );
      const fee = await response.json();
      setIsFeeFetched(true);
      setDeliveryFee(fee);
    } catch (error) {
      console.log(error);
    }
  };

  const onConfirmhandler = () => {
    dispatch(
      customCakeUpdate({
        name: 'isDelivery',
        value: true,
      })
    );

    // if deliver and date is NOT Saturday then reset the date.
    if (customCakeState.requestDate?.getDay() !== 6)
      dispatch(
        customCakeUpdate({
          name: 'pickupDeliveryDate',
          value: undefined,
        })
      );

    setShowModal(false);
  };

  return (
    <ModalWrapper>
      <DeliveryRequirement>
        {'< Note >'}
        <br />
        1. Delivery service is available only for more than $50 purchase between
        1 PM and 4 PM on Saturdays. <br />
        2. The specific time will be noticed with the confirmation of order.
        <br />
        3. Additional delivery fee can range up to $10 by distance.
      </DeliveryRequirement>
      <DeliveryRequirement>
        Please put your postal code below
      </DeliveryRequirement>
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          name='postalCode'
          onChange={onPostalCodeHandler}
          value={userInfoState.postalCode}
          // value={postalCode}
          // required={orderListState.isDelivery}
        />
        <ClientInfoLabel>
          <span>Postal Code</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <CheckAddressBtn onClick={onCheckAddrHandler}>
        Check Address
      </CheckAddressBtn>
      {isFeeFetched && // fee fetched ?
        (deliveryFee >= 0 ? ( // delivery: POSSIBLE
          <CheckOutQuestion>
            Delivery fee:{' '}
            {deliveryFee === 0 // display fee
              ? 'FREE'
              : formatCurrency(deliveryFee)}
          </CheckOutQuestion>
        ) : (
          // delivery: IMPOSSIBLE
          <DeliveryRequirement>
            Sorry, this place is not available.
          </DeliveryRequirement>
        ))}
      <BtnWrapper>
        {isFeeFetched && // fee fetched
          deliveryFee >= 0 && ( // delivery: POSSIBLE
            <ConfirmBtn onClick={onConfirmhandler}>Confirm</ConfirmBtn>
          )}
        <CancelBtn onClick={() => setShowModal(false)}>Cancel</CancelBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};
