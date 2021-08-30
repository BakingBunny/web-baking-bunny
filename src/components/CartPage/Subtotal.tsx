import React from 'react';
import { useCalcCartItems } from '../../hooks/useCalcCartItems';
import { update } from '../../store/orderListSlice';
import { useAppDispatch } from '../../store/hooks';
import formatCurrency from '../../utils/formatCurrency';
import { SubtotalWrapper, SubtotalText, ProceedBtn } from './CartPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';
import { useHistory } from 'react-router-dom';

interface Props {}

export const Subtotal = (props: Props) => {
  const { countCartItems, subtotal } = useCalcCartItems();
  const history = useHistory();
  const dispatch = useAppDispatch();

  // const orderListState = useAppSelector<OrderListInterface>(orderList);

  const onConfirmHandler = () => {
    dispatch(
      update({
        name: 'subtotal',
        value: subtotal,
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
