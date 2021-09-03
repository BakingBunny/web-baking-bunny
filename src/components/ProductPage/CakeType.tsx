import React, { Dispatch, SetStateAction } from 'react';
import { ProductInterface } from '../../interface/ProductInterface';
import { CartInterface } from '../../interface/CartInterface';
import { TastesBtn, TastesWrapper } from './ProductElements';
import { CakeTypeListInterface } from '../../interface/CakeTypeListInterface';

interface Props {
  selectedProduct: ProductInterface;
  productToCart: CartInterface;
  setproductToCart: Dispatch<SetStateAction<CartInterface>>;
}

export const CakeType = (props: Props) => {
  const { selectedProduct, productToCart, setproductToCart } = props;

  return (
    <TastesWrapper>
      {selectedProduct.cakeTypeList.map(
        (item: CakeTypeListInterface) =>
          item.id !== 1 && (
            <TastesBtn
              key={item.id}
              isSelected={productToCart.cakeTypeId === item.id}
              onClick={() =>
                setproductToCart((prevState) => ({
                  ...prevState,
                  cakeTypeId: item.id,
                }))
              }
            >
              {item.type.replaceAll('-', ' ')}
            </TastesBtn>
          )
      )}
    </TastesWrapper>
  );
};
