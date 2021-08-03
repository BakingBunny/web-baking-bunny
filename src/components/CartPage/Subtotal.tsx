import React, { useEffect } from 'react';
import { useCountCartItems } from '../../hooks/useCountCartItems';
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { products } from '../../store/cartSlice';
import { CartInterface } from '../../interface/CartInterface';
import formatCurrency from '../../utils/formatCurrency';
import { SubtotalWrapper, SubtotalText, ProceedBtn } from './CartPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {}

export const Subtotal = (props: Props) => {
  const cartList = useAppSelector<CartInterface[]>(products);
  const countCartItems = useCountCartItems();

  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subtotal = cartList.reduce((total, item) => {
      const priceOfSize =
        item.sizeId === 2 ? item.product.price * 1.2 : item.product.price;
      return total + priceOfSize * item.qty;
    }, 0);

    dispatch(
      update({
        name: 'subtotal',
        value: subtotal,
      })
    );
  }, [cartList, dispatch]);

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
