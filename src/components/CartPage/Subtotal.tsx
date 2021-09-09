import React from 'react';
import { useCalcCartItems } from '../../hooks/useCalcCartItems';
import { update as orderListUpdate } from '../../store/orderListSlice';
import { update as orderProgressUpdate } from '../../store/orderProgressSlice';
import { useAppDispatch } from '../../store/hooks';
import formatCurrency from '../../utils/formatCurrency';
import { SubtotalWrapper, SubtotalText, ProceedBtn } from './CartPageElements';
import { useHistory } from 'react-router-dom';
import { RegualrOrderEnum } from '../../interface/OrderProgressInterface';

interface Props {}

export const Subtotal = (props: Props) => {
  const { countCartItems, subtotal } = useCalcCartItems();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const onConfirmHandler = () => {
    dispatch(
      orderListUpdate({
        name: 'subtotal',
        value: subtotal,
      })
    );

    dispatch(
      orderProgressUpdate({
        type: 'regularOrder',
        value: RegualrOrderEnum.checkout,
      })
    );

    history.push('/checkout');
  };

  return (
    <SubtotalWrapper>
      <SubtotalText>Subtotal {formatCurrency(subtotal)}</SubtotalText>
      <ProceedBtn onClick={onConfirmHandler}>
        Proceed to checkout ({countCartItems} items)
      </ProceedBtn>
    </SubtotalWrapper>
  );
};
