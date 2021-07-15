import React, { Dispatch, SetStateAction } from 'react';
import { Product } from '../../interface/Product';
import { CartState } from '../../interface/CartState';
import { TastesBtn, TastesTitle, TastesWrapper } from './ProductDetailElements';

interface Props {
  selectedProduct: Product;
  productToCart: CartState;
  setproductToCart: Dispatch<SetStateAction<CartState>>;
}

export const Tastes = (props: Props) => {
  const { selectedProduct, productToCart, setproductToCart } = props;

  return (
    <>
      <TastesTitle>Tastes / Fruits</TastesTitle>
      <TastesWrapper>
        {selectedProduct.tastes.map((item: string) => (
          <TastesBtn
            key={item}
            isSelected={productToCart.tastes === item}
            onClick={() =>
              setproductToCart((prevState) => ({
                ...prevState,
                tastes: item,
              }))
            }
          >
            {item.replaceAll('-', ' ')}
          </TastesBtn>
        ))}
      </TastesWrapper>
    </>
  );
};
