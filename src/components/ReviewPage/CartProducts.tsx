import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { products } from '../../store/cartSlice';
import { CartInterface } from '../../interface/CartInterface';
import {
  CardContainer,
  CardWrapper,
  Card,
  ImageWrapper,
  Image,
  OptionsWrapper,
  ProductName,
  OptionText,
  PriceText,
} from './ReviewPageElements';
import formatCurrency from '../../utils/formatCurrency';
import { SizeListInterface } from '../../interface/SizeListInterface';
import { TasteListInterface } from '../../interface/TasteListInterface';

interface Props {}

export const CartProducts = (props: Props) => {
  const cartList = useAppSelector<CartInterface[]>(products);

  return (
    <CardContainer>
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
              <ProductName>{item.product.productName}</ProductName>
              <PriceText>
                {item.sizeId === 2
                  ? formatCurrency(item.product.price * 1.2)
                  : formatCurrency(item.product.price)}
              </PriceText>
              {item.tasteId > 0 && (
                <OptionText>
                  {item.product.tasteList
                    .filter(
                      (taste: TasteListInterface) => taste.id === item.tasteId
                    )
                    .map((data) => data.tasteName)}
                </OptionText>
              )}
              {item.sizeId > 0 && (
                <OptionText>
                  {item.product.sizeList
                    .filter(
                      (size: SizeListInterface) => size.id === item.sizeId
                    )
                    .map((data) => data.sizeName)}
                </OptionText>
              )}
              <OptionText>Quantity: {item.qty}</OptionText>
            </OptionsWrapper>
          </Card>
        ))}
      </CardWrapper>
    </CardContainer>
  );
};
