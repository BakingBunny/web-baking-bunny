import React, { Dispatch, SetStateAction } from 'react';
import {
  orderList,
  update as orderListUpdate,
} from '../../store/orderListSlice';
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
import { OrderListInterface } from '../../interface/OrderListInterface';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import formatCurrency from '../../utils/formatCurrency';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalCalcDeliveryFee: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  // const [postalCode, setPostalCode] = useState<string>('');
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
    const response = await fetch(
      `https://7hq1iew2e2.execute-api.us-west-2.amazonaws.com/test-docker-dotnet-0715-api/api/delivery/${userInfoState.postalCode}`
    );
    const fee = await response.json();

    dispatch(
      orderListUpdate({
        name: 'deliveryFee',
        value: fee,
      })
    );
  };

  const onConfirmhandler = () => {
    dispatch(
      orderListUpdate({
        name: 'isDelivery',
        value: true,
      })
    );

    // if deliver and date is NOT Saturday then reset the date.
    if (orderListState.pickupDeliveryDate?.getDay() !== 6)
      dispatch(
        //TODO: hour and minutes should be reset as well.
        orderListUpdate({
          name: 'pickupDeliveryDate',
          value: null,
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
      {orderListState.deliveryFee !== null && // NULL is initial value
      orderListState.deliveryFee >= 0 ? ( // delivery: POSSIBLE
        <CheckOutQuestion>
          Delivery fee:{' '}
          {orderListState.deliveryFee === 0
            ? 'FREE'
            : formatCurrency(orderListState.deliveryFee)}
        </CheckOutQuestion>
      ) : (
        <DeliveryRequirement>
          Sorry, this place is not available.
        </DeliveryRequirement>
      )}
      <BtnWrapper>
        {orderListState.deliveryFee !== null && // NULL is initial value
          orderListState.deliveryFee >= 0 && ( // delivery: POSSIBLE
            <ConfirmBtn onClick={onConfirmhandler}>Confirm</ConfirmBtn>
          )}
        <CancelBtn onClick={() => setShowModal(false)}>Cancel</CancelBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};
