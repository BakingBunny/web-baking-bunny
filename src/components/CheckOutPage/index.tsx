import React, { useState, useCallback } from 'react';
import { Wrapper, Title, SubmitBtn } from './CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';
import { SelectDate } from './SelectDate';
import { UserInformation } from './UserInformation';
import { ModalWindow } from '../ModalWindow';
import { DisplayDate } from './DisplayDate';

interface Props {}

export const CheckOut = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = 'unset'; // allow scrolling once modal close
  }, [setShowModal]);

  return (
    <>
      <Wrapper>
        <Title>Checkout</Title>
        <DeliveryOption setShowModal={setShowModal} />
        <DisplayDate setShowModal={setShowModal} />
        <UserInformation />
        <SubmitBtn type='submit'>Submit</SubmitBtn>
      </Wrapper>
      {showModal && (
        <ModalWindow showModal={showModal} closeModal={closeModal}>
          <SelectDate closeModal={closeModal} />
        </ModalWindow>
      )}
    </>
  );
};
