import React from 'react';
import { products, update, remove } from '../../store/cartSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { CartState } from '../../interface/CartState';
import {
  Container,
  Title,
  Wrapper,
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
  const cartList = useAppSelector(products);
  const dispatch = useAppDispatch();

  const updateHandler = (
    id: string,
    option: string,
    value: number | string
  ) => {
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
            {cartList.map((item: CartState) => {
              // item.product && setSubTotal(subTotal + item.product?.price);

              return (
                <Card key={item.id}>
                  <ImageWrapper>
                    <Image
                      src={require(`../../img/${item.product.image}`)?.default}
                      alt={item.product.item_name}
                    />
                    <DeleteBtn onClick={() => dispatch(remove(item.id))}>
                      Delete
                    </DeleteBtn>
                  </ImageWrapper>
                  <OptionsWrapper>
                    <CakeName>
                      {item.product.item_name.replaceAll('-', ' ')}
                    </CakeName>
                    <Price item={item} />
                    {item.tastes.length > 0 && (
                      <Tastes item={item} updateHandler={updateHandler} />
                    )}
                    {item.product.type === 'cake' && (
                      <Size item={item} updateHandler={updateHandler} />
                    )}
                    <Quantity item={item} updateHandler={updateHandler} />
                  </OptionsWrapper>
                </Card>
              );
            })}
          </CardWrapper>
          <Subtotal />
        </Wrapper>
      ) : (
        <EmptyCart>Your shopping cart is empty.</EmptyCart>
      )}
    </Container>
  );
};
