import React, { Dispatch, SetStateAction } from 'react';
import { CartState } from '../../interface/CartState';
import { ProductQty, CircleBtn, QtyWrapper } from './ProductDetailElements';

interface Props {
  productToCart: CartState;
  setproductToCart: Dispatch<SetStateAction<CartState>>;
}

export const Quantity = (props: Props) => {
  const { productToCart, setproductToCart } = props;

  return (
    <QtyWrapper>
      <CircleBtn
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            qty: productToCart.qty - 1,
          }))
        }
        disabled={productToCart.qty <= 1}
      >
        -
      </CircleBtn>
      <ProductQty>
        <span>{productToCart.qty}</span>
      </ProductQty>
      <CircleBtn
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            qty: productToCart.qty + 1,
          }))
        }
        disabled={productToCart.qty >= 9}
      >
        +
      </CircleBtn>
    </QtyWrapper>
  );
};
