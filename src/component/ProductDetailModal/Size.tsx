import React, { Dispatch, SetStateAction } from 'react';
import { CartState } from '../../interface/CartState';
import { SizeBtn, OptionTitle, SizeWrapper } from './ProductDetailElements';

interface Props {
  productToCart: CartState;
  setproductToCart: Dispatch<SetStateAction<CartState>>;
}

export const Size = (props: Props) => {
  const { productToCart, setproductToCart } = props;

  return (
    <SizeWrapper>
      <OptionTitle>Size</OptionTitle>
      <SizeBtn
        isSelected={productToCart.cakeSize === 6}
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            cakeSize: 6,
          }))
        }
      >
        6"
      </SizeBtn>
      <SizeBtn
        isSelected={productToCart.cakeSize === 8}
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            cakeSize: 8,
          }))
        }
      >
        8"
      </SizeBtn>
    </SizeWrapper>
  );
};
