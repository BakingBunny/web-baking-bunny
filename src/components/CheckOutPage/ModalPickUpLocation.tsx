import React, { Dispatch, SetStateAction } from 'react';
import {
  DeliveryRequirement,
  ModalWrapper,
  MapIframe,
  BtnWrapper,
  ConfirmBtn,
  CancelBtn,
} from './CheckoutPageElements';
import { update } from '../../store/orderListSlice';
import { useAppDispatch } from '../../store/hooks';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalPickUpLocation: React.FC<Props> = ({ setShowModal }) => {
  const dispatch = useAppDispatch();

  const onConfirmhandler = () => {
    dispatch(
      update({
        name: 'isDelivery',
        value: false,
      })
    );

    setShowModal(false);
  };
  return (
    <ModalWrapper>
      <DeliveryRequirement>
        {'< Note >'}
        <br />
        1. Pickup is available between 2 PM and 8 PM.
        <br />
        2. The specific pickup address will be sent by email after completing
        the order.
      </DeliveryRequirement>
      <MapIframe
        title='Pickup Location'
        src={`https://www.google.com/maps/embed/v1/place?q=51%C2%B003'03.8%22N%20114%C2%B004'51.7%22W&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
        allowFullScreen={true}
        loading='lazy'
      ></MapIframe>
      <BtnWrapper>
        <ConfirmBtn onClick={onConfirmhandler}>Confrim</ConfirmBtn>
        <CancelBtn onClick={() => setShowModal(false)}>Cancel</CancelBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};
