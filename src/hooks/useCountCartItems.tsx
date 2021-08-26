import { useState, useEffect } from 'react';
import { products } from '../store/cartSlice';
import { update } from '../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { CartInterface } from '../interface/CartInterface';

// this hook counts cart items and cacluate subtotal based on items
export const useCountCartItems = (): number => {
  const cartListState = useAppSelector<CartInterface[]>(products);
  const [countCartItems, setCountCartItems] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // count cart items
    setCountCartItems(
      cartListState.reduce((total, item) => {
        return total + item.qty;
      }, 0)
    );

    // caculate subtotal
    const subtotal = cartListState.reduce((total, item) => {
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
  }, [cartListState, dispatch]);

  return countCartItems;
};
