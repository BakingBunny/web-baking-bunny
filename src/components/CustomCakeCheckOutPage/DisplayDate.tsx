import React, { Dispatch, SetStateAction } from 'react';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { customCake } from '../../store/customCakeSlice';
import { useAppSelector } from '../../store/hooks';
import {
  CheckOutQuestion,
  DateBtn,
  OptionWrapper,
} from './CheckoutPageElements';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const DisplayDate: React.FC<Props> = ({ setShowModal }) => {
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);

  return (
    <OptionWrapper>
      <CheckOutQuestion>When would you like to take them?</CheckOutQuestion>
      <DateBtn
        onClick={() => setShowModal(true)}
        isSelected={customCakeState.requestDate !== undefined}
      >
        {customCakeState.requestDate ? (
          <>
            {customCakeState.requestDate.toDateString()}
            <br />
            {customCakeState.requestDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </>
        ) : (
          'Select date and time'
        )}
      </DateBtn>
    </OptionWrapper>
  );
};
