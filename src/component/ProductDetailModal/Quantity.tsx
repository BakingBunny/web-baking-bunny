import React, { Dispatch, SetStateAction } from 'react';
import { CartState } from '../../interface/CartState';
import {
  ProductQty,
  OptionTitle,
  QtyDecrementBtn,
  QtyIncrementBtn,
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
