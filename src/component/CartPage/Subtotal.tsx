import React, { useState, useEffect } from 'react';
import { useCountCartItems } from '../../hooks/useCountCartItems';
import { products } from '../../store/cartSlice';
import { useAppSelector } from '../../store/hooks';
import formatCurrency from '../../utils';
import { SubtotalWrapper, SubtotalText, ProceedBtn } from './CartPageElements';

interface Props {}

export const Subtotal = (props: Props) => {
  const cartList = useAppSelector(products);
  const [subTotal, setSubTotal] = useState<number>(0);
  const countCartItems = useCountCartItems();

  useEffect(() => {
    setSubTotal(
      cartList.reduce((total, item) => {
        const priceOfSize =
          item.cakeSize === 8 ? item.product.price * 1.2 : item.product.price;
        return total + priceOfSize * item.qty;
      }, 0)
    );
  }, [cartList]);

  return (
    <>
      <SubtotalWrapper>
        <SubtotalText>Subtotal {formatCurrency(subTotal)}</SubtotalText>
        {/* <ProceedBtn to='/pick-a-date'> */}
        <ProceedBtn to='/pick-a-date'>
          Proceed to checkout ({countCartItems} items)
        </ProceedBtn>
      </SubtotalWrapper>
    </>
  );
};
