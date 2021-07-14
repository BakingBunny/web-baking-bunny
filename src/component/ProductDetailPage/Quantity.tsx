import React, { Dispatch, SetStateAction } from 'react';
import { CartState } from '../../interface/CartState';
import {
  CakeQty,
  QtyMinusBtn,
  QtyPlusBtn,
  QtyWrapper,
} from './ProductDetailElements';

interface Props {
  productToCart: CartState;
  setproductToCart: Dispatch<SetStateAction<CartState>>;
}

export const Quantity = (props: Props) => {
  const { productToCart, setproductToCart } = props;

  return (
    <QtyWrapper>
      <QtyMinusBtn
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            qty: productToCart.qty - 1,
          }))
        }
        disabled={productToCart.qty <= 1}
      >
        -
      </QtyMinusBtn>
      <CakeQty>{productToCart.qty}</CakeQty>
      <QtyPlusBtn
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            qty: productToCart.qty + 1,
          }))
        }
        disabled={productToCart.qty >= 9}
      >
        +
      </QtyPlusBtn>
    </QtyWrapper>
  );
};
