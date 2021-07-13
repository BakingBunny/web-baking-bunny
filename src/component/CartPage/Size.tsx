import React from 'react';
import { CartState } from '../../interface/CartState';
import { SizeWrapper, SizeTitle, SizeBtn } from './CartPageElements';

interface Props {
  item: CartState;
  updateHandler: any; //TODO: specify later
}

export const Size = (props: Props) => {
  const { item } = props;

  return (
    <SizeWrapper>
      <SizeTitle>Size</SizeTitle>
      <SizeBtn
        isSelected={item.cakeSize === 6}
        onClick={() => props.updateHandler(item.id, 'cakeSize', 6)}
      >
        6"
      </SizeBtn>
      <SizeBtn
        isSelected={item.cakeSize === 8}
        onClick={() => props.updateHandler(item.id, 'cakeSize', 8)}
      >
        8"
      </SizeBtn>
    </SizeWrapper>
  );
};
