import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { products } from '../../store/cartSlice';
import { CartInterface } from '../../interface/CartInterface';
import {
  CardWrapper,
  Card,
  ImageWrapper,
  Image,
  OptionsWrapper,
  CakeName,
  PriceWrapper,
  SizeWrapper,
  SizeTitle,
  TastesTitle,
  TastesWrapper,
} from './ReviewPageElements';
import formatCurrency from '../../utils/formatCurrency';
import { SizeListInterface } from '../../interface/SizeListInterface';
import { TasteListInterface } from '../../interface/TasteListInterface';

interface Props {}

export const CartProducts = (props: Props) => {
  const cartList = useAppSelector<CartInterface[]>(products);

  return (
    <CardWrapper>
      {cartList.map((item) => (
        <Card>
          <ImageWrapper>
            <Image
              src={item.product.productImage}
              alt={item.product.productName}
            />
          </ImageWrapper>
          <OptionsWrapper>
            <CakeName>{item.product.productName}</CakeName>
            <PriceWrapper>{formatCurrency(item.product.price)}</PriceWrapper>
            {item.tasteId > 0 && (
              <TastesWrapper>
                <TastesTitle>
                  {item.product.tasteList
                    .filter(
                      (taste: TasteListInterface) => taste.id === item.tasteId
                    )
                    .map((data) => data.tasteName)}
                </TastesTitle>
              </TastesWrapper>
            )}
            {item.sizeId > 0 && (
              <SizeWrapper>
                <SizeTitle>
                  Size:{' '}
                  {item.product.sizeList
                    .filter(
                      (size: SizeListInterface) => size.id === item.sizeId
                    )
                    .map((data) => data.sizeName)}
                </SizeTitle>
              </SizeWrapper>
            )}
          </OptionsWrapper>
        </Card>
      ))}
    </CardWrapper>
  );
};
