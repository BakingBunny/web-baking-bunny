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
      {productToCart.product.sizeList.map((item) => (
        <SizeBtn
          isSelected={productToCart.sizeId === item.id}
          onClick={() =>
            setproductToCart((prevState) => ({
              ...prevState,
              sizeId: item.id,
            }))
          }
          key={item.id}
        >
          {item.sizeName}
        </SizeBtn>
      ))}
    </SizeWrapper>
  );
};
