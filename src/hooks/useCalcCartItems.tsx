import { useState, useEffect } from 'react';
import { products } from '../store/cartSlice';
import { update } from '../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { CartInterface } from '../interface/CartInterface';

interface ReturnedData {
  countCartItems: number;
  subtotal: number;
}

// this hook counts cart items and cacluate subtotal based on items
export const useCalcCartItems = (): ReturnedData => {
  const cartListState = useAppSelector<CartInterface[]>(products);
  const [countCartItems, setCountCartItems] = useState<number>(0);
  const [subtotal, setSubtotal] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // count cart items
    setCountCartItems(
      cartListState.reduce((total, item) => {
        return total + item.qty;
      }, 0)
    );

    // caculate subtotal
    setSubtotal(
      cartListState.reduce((total, item) => {
        const priceOfSize =
          item.sizeId === 3 ? item.product.price * 1.2 : item.product.price;
        return total + priceOfSize * item.qty;
      }, 0)
    );

    // dispatch(
    //   update({
    //     name: 'subtotal',
    //     value: subtotal,
    //   })
    // );
  }, [cartListState, dispatch]);

  return { countCartItems, subtotal };
};
