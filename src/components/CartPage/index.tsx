import React from 'react';
import { products, update, remove } from '../../store/cartSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { CartInterface } from '../../interface/CartInterface';
import {
  Container,
  Title,
  Wrapper,
  Subtitle,
  CardWrapper,
  Card,
  ImageWrapper,
  Image,
  OptionsWrapper,
  CakeName,
  DeleteBtn,
  EmptyCart,
} from './CartPageElements';
import { Quantity } from './Quantity';
import { Size } from './Size';
import { Tastes } from './Tastes';
import { Price } from './Price';
import { Subtotal } from './Subtotal';

interface Props {}

export const Cart = (props: Props) => {
  const cartList = useAppSelector<CartInterface[]>(products);
  const dispatch = useAppDispatch();

  const updateHandler = (
    id: string,
    option: string,
    value: number | string
  ): void => {
    dispatch(
      update({
        id: id,
        option: option,
        value: value,
      })
    );
  };

  return (
    <Container>
      <Title>Shopping Cart</Title>
      {cartList.length > 0 ? (
        <Wrapper>
          <CardWrapper>
            {cartList.map((item: CartInterface) => (
              <Card key={item.id}>
                <ImageWrapper>
                  <Image
                    src={item.product.productImage}
                    alt={item.product.productName}
                  />
                  <DeleteBtn onClick={() => dispatch(remove(item.id))}>
                    Delete
                  </DeleteBtn>
                </ImageWrapper>
                <OptionsWrapper>
                  <CakeName>
                    {item.product.productName.replaceAll('-', ' ')}
                  </CakeName>
                  <Price cartItem={item} />
                  {item.product.tasteList.length > 0 && ( // display if product has multiple tastes (e.g. fruits cake or Dacquoise combo)
                    <Tastes cartItem={item} updateHandler={updateHandler} />
                  )}
                  {item.product.sizeList.length > 0 && ( // display if product has multiple sizes (e.g. cake)
                    <Size cartItem={item} updateHandler={updateHandler} />
                  )}
                  <Quantity cartItem={item} updateHandler={updateHandler} />
                </OptionsWrapper>
              </Card>
            ))}
          </CardWrapper>
          <Subtotal />
        </Wrapper>
      ) : (
        <EmptyCart>Your shopping cart is empty.</EmptyCart>
      )}
    </Container>
  );
};
