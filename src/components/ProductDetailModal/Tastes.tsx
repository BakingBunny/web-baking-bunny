import React, { Dispatch, SetStateAction } from 'react';
import { Product } from '../../interface/Product';
import { CartInterface } from '../../interface/CartInterface';
import { TastesBtn, TastesWrapper } from './ProductDetailElements';

interface Props {
  selectedProduct: Product;
  productToCart: CartInterface;
  setproductToCart: Dispatch<SetStateAction<CartInterface>>;
}

export const Tastes = (props: Props) => {
  const { selectedProduct, productToCart, setproductToCart } = props;

  return (
    <>
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
