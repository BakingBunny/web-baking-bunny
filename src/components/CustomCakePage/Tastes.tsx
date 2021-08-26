import React, { Dispatch, SetStateAction } from 'react';
import { ProductInterface } from '../../interface/ProductInterface';
import { CartInterface } from '../../interface/CartInterface';
import { TastesBtn, TastesWrapper } from './CustomCakeElements';
import { TasteListInterface } from '../../interface/TasteListInterface';

interface Props {
  selectedProduct: ProductInterface;
  productToCart: CartInterface;
  setproductToCart: Dispatch<SetStateAction<CartInterface>>;
}

export const Tastes = (props: Props) => {
  const { selectedProduct, productToCart, setproductToCart } = props;

  return (
    <TastesWrapper>
      {selectedProduct.tasteList.map((item: TasteListInterface) => (
        <TastesBtn
          key={item.id}
          isSelected={productToCart.tasteId === item.id}
          onClick={() =>
            setproductToCart((prevState) => ({
              ...prevState,
              tasteId: item.id,
            }))
          }
        >
          {item.tasteName.replaceAll('-', ' ')}
        </TastesBtn>
      ))}
    </TastesWrapper>
  );
};
