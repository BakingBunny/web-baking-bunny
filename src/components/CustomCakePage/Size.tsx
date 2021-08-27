import React from 'react';
import { ProductInterface } from '../../interface/ProductInterface';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { customCake, update } from '../../store/customCakeSlice';
import { SizeBtn, OptionTitle, SizeWrapper } from './CustomCakeElements';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';

interface Props {
  selectedProduct: ProductInterface;
}

export const Size = (props: Props) => {
  const { selectedProduct } = props;
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const dispatch = useAppDispatch();

  return (
    <SizeWrapper>
      <OptionTitle>Size</OptionTitle>
      {selectedProduct.sizeList.map((item) => (
        <SizeBtn
          isSelected={customCakeState.sizeId === item.id}
          onClick={() =>
            dispatch(
              update({
                name: 'sizeId',
                value: item.id,
              })
            )
          }
          key={item.id}
        >
          {item.sizeName}
        </SizeBtn>
      ))}
    </SizeWrapper>
  );
};
