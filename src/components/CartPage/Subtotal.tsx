import React from 'react';
import { useCountCartItems } from '../../hooks/useCountCartItems';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import formatCurrency from '../../utils/formatCurrency';
import { SubtotalWrapper, SubtotalText, ProceedBtn } from './CartPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {}

export const Subtotal = (props: Props) => {
  const countCartItems = useCountCartItems();

  const orderListState = useAppSelector<OrderListInterface>(orderList);

  return (
    <>
      <SubtotalWrapper>
        <SubtotalText>
          Subtotal {formatCurrency(orderListState.subtotal)}
        </SubtotalText>
        <ProceedBtn to='/checkout'>
          Proceed to checkout ({countCartItems} items)
        </ProceedBtn>
      </SubtotalWrapper>
    </>
  );
};
