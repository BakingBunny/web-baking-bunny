import React from 'react';
import { CartInterface } from '../../interface/CartInterface';
import { SizeWrapper, SizeTitle, SizeBtn } from './CartPageElements';

interface Props {
  cartItem: CartInterface;
  updateHandler: (
    id: string, // product id
    option: string, // option name (sizeId)
    value: number // size id
  ) => void;
}

export const Size = (props: Props) => {
  const { cartItem } = props;

  return (
    <SizeWrapper>
      <SizeTitle>Size</SizeTitle>
      {cartItem.product.sizeList.map((size) => (
        <SizeBtn
          isSelected={cartItem.sizeId === size.id}
          onClick={() => props.updateHandler(cartItem.id, 'sizeId', size.id)}
          key={size.id}
        >
          {size.sizeName}
        </SizeBtn>
      ))}
    </SizeWrapper>
  );
};
