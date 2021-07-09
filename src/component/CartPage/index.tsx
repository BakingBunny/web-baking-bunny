import React from 'react';
import { products } from '../../store/cartSlice';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { remove } from '../../store/cartSlice';

interface Props {}

export const Cart = (props: Props) => {
  const productsList = useAppSelector(products);
  const dispatch = useAppDispatch();

  return (
    <>
      {productsList.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.item_name}</p>
          <p>{item.qty}</p>
          <p>{item.tastes}</p>
          <p>{item.cakeSize}</p>
          <button onClick={() => dispatch(remove(item.id))}>delete</button>
          {/* <button onClick={() => console.log(item.id)}>delete</button> */}
        </div>
      ))}
    </>
  );
};
