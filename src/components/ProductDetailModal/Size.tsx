import React, { Dispatch, SetStateAction } from 'react';
import { CartInterface } from '../../interface/CartInterface';
import { SizeBtn, OptionTitle, SizeWrapper } from './ProductDetailElements';

interface Props {
  productToCart: CartInterface;
  setproductToCart: Dispatch<SetStateAction<CartInterface>>;
}

export const Size = (props: Props) => {
  const { productToCart, setproductToCart } = props;

  return (
    <SizeWrapper>
      <OptionTitle>Size</OptionTitle>
      <SizeBtn
        isSelected={productToCart.cakeSizeId === 6}
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            cakeSizeId: 6,
          }))
        }
      >
        6"
      </SizeBtn>
      <SizeBtn
        isSelected={productToCart.cakeSizeId === 8}
        onClick={() =>
          setproductToCart((prevState) => ({
            ...prevState,
            cakeSizeId: 8,
          }))
        }
      >
        8"
      </SizeBtn>
    </SizeWrapper>
  );
};
