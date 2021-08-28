import React from 'react';
import { ProductInterface } from '../../interface/ProductInterface';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { customCake, update } from '../../store/customCakeSlice';
// import { CartInterface } from '../../interface/CartInterface';
import { TastesBtn, TastesWrapper } from './CustomCakeElements';
import { TasteListInterface } from '../../interface/TasteListInterface';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';

interface Props {
  selectedProduct: ProductInterface;
}

export const Tastes = (props: Props) => {
  const { selectedProduct } = props;
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const dispatch = useAppDispatch();

  return (
    <TastesWrapper>
      {selectedProduct.tasteList.map((item: TasteListInterface) => (
        <TastesBtn
          key={item.id}
          isSelected={customCakeState.tasteId === item.id}
          onClick={() =>
            dispatch(
              update({
                name: 'tasteId',
                value: item.id,
              })
            )
          }
        >
          {item.tasteName.replaceAll('-', ' ')}
        </TastesBtn>
      ))}
    </TastesWrapper>
  );
};
