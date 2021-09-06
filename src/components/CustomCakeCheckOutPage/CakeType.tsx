import React from 'react';
import { ProductInterface } from '../../interface/ProductInterface';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { customCake, update } from '../../store/customCakeSlice';
import { TastesBtn, TastesWrapper } from './CustomCakeElements';
import { CakeTypeListInterface } from '../../interface/CakeTypeListInterface';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';

interface Props {
  selectedProduct: ProductInterface;
}

export const CakeType = (props: Props) => {
  const { selectedProduct } = props;
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const dispatch = useAppDispatch();

  return (
    <TastesWrapper>
      {selectedProduct.cakeTypeList.map(
        (item: CakeTypeListInterface) =>
          item.id !== 1 && (
            <TastesBtn
              key={item.id}
              isSelected={customCakeState.cakeTypeId === item.id}
              onClick={() =>
                dispatch(
                  update({
                    name: 'cakeTypeId',
                    value: item.id,
                  })
                )
              }
            >
              {item.type.replaceAll('-', ' ')}
            </TastesBtn>
          )
      )}
    </TastesWrapper>
  );
};
