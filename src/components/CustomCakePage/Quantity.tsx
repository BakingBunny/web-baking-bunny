import React, { Dispatch, SetStateAction } from 'react';
import { CartInterface } from '../../interface/CartInterface';
import {
  ProductQty,
  OptionTitle,
  QtyDecrementBtn,
  QtyIncrementBtn,
  QtyWrapper,
} from './CustomCakeElements';

interface Props {
  productToCart: CartInterface;
  setproductToCart: Dispatch<SetStateAction<CartInterface>>;
}

export const Quantity = (props: Props) => {
  const { productToCart, setproductToCart } = props;

  return (
    <QtyWrapper>
      <OptionTitle>Qty.</OptionTitle>
      <QtyDecrementBtn
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            qty: productToCart.qty - 1,
          }))
        }
        disabled={productToCart.qty <= 1}
      >
        -
      </QtyDecrementBtn>
      <ProductQty>
        <span>{productToCart.qty}</span>
      </ProductQty>
      <QtyIncrementBtn
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            qty: productToCart.qty + 1,
          }))
        }
        disabled={productToCart.qty >= 9}
      >
        +
      </QtyIncrementBtn>
    </QtyWrapper>
  );
};
