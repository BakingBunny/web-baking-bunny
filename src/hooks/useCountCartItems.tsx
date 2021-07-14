import { useState, useEffect } from 'react';
import { products } from '../store/cartSlice';
import { useAppSelector } from '../store/hooks';

export const useCountCartItems = (): number => {
  const cartList = useAppSelector(products);
  const [countCartItems, setCountCartItems] = useState<number>(0);

  useEffect(() => {
    setCountCartItems(
      cartList.reduce((total, item) => {
        return total + item.qty;
      }, 0)
    );
  }, [cartList]);

  return countCartItems;
};
