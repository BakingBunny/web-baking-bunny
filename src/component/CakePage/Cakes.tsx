import React from 'react';
import {
  Container,
  Wrapper,
  Title,
  CardWrapper,
  Card,
  Image,
  Detail,
  CakeName,
  Price,
  SizeTitle,
  SizeWrapper,
  Size,
  DetailBtn,
  AddCartBtn,
} from './CakesElements';
import cakesList from './cakesList.json';

interface Props {}

export const Cakes = (props: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Cakes</Title>
          <CardWrapper>
            {cakesList.map((cake) => (
              <Card>
                <Image src={`./img/cakes/${cake.image}`} />
                <Detail>
                  <CakeName>{cake.name}</CakeName>
                  <Price>${cake.price}</Price>
                  <SizeTitle>Sizes</SizeTitle>
                  <SizeWrapper>
                    <Size>6</Size>
                    <Size>8</Size>
                  </SizeWrapper>
                  <DetailBtn>Detail</DetailBtn>
                  <AddCartBtn>Add To Cart</AddCartBtn>
                </Detail>
              </Card>
            ))}
          </CardWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
