import React from 'react';
import { products, update } from '../../store/cartSlice';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { remove } from '../../store/cartSlice';
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
} from './CartPageElements';
import { Quantity } from './Quantity';
import { Size } from './Size';
import { Tastes } from './Tastes';
import { Price } from './Price';

interface Props {}

export const Cart = (props: Props) => {
  const productsList = useAppSelector(products);
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
      <Wrapper>
        <CardWrapper>
          {productsList.map((item: CartState) => (
            <Card key={item.id}>
              <ImageWrapper>
                <Image
                  src={require(`../../img/${item.product?.image}`)?.default}
                  alt={item.product?.item_name}
                />
                <DeleteBtn onClick={() => dispatch(remove(item.id))}>
                  Delete
                </DeleteBtn>
              </ImageWrapper>
              <OptionsWrapper>
                <CakeName>
                  {item.product?.item_name.replaceAll('-', ' ')}
                </CakeName>
                <Price item={item} />
                {item.tastes.length > 0 && (
                  <Tastes item={item} updateHandler={updateHandler} />
                )}
                {item.product?.type === 'cake' && (
                  <Size item={item} updateHandler={updateHandler} />
                )}
                <Quantity item={item} updateHandler={updateHandler} />
              </OptionsWrapper>
              {/* <button onClick={() => dispatch(remove(item.id))}>Edit</button> */}
            </Card>
          ))}
        </CardWrapper>
        <div>Subtotal</div>
      </Wrapper>
    </Container>
  );
};
