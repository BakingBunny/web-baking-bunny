import React, { useState, useEffect } from 'react';
import {
  Container,
  Wrapper,
  Title,
  CardWrapper,
  Card,
  Image,
  Detail,
  Name,
  Price,
  OrderNowBtn,
} from './ProductListElements';
import cakesList from './cakesList.json';
import dacquoisesList from './dacquoisesList.json';
import formatCurrency from '../../utils';
import { Product } from '../../interface/Product';

interface Props {
  productType: string;
}

export const ProductList = (props: Props) => {
  const [productList, setProductList] = useState<Product[]>(dacquoisesList);

  useEffect(() => {
    switch (props.productType) {
      case '/cakes':
        setProductList(cakesList);
        break;
      case '/dacquoises':
        setProductList(dacquoisesList);
        break;
    }
  }, [props.productType]);

  return (
    <>
      <Container>
        <Wrapper>
          <Title>{props.productType.replace('/', '')}</Title>
          <CardWrapper>
            {productList.map((cake) => (
              <Card
                to={`${props.productType}/${cake.item_name}`}
                key={cake.item_name}
              >
                <Image
                  src={require(`../../img/${cake.image}`)?.default}
                  alt={cake.item_name}
                />
                <Detail>
                  <Name>{cake.item_name.replaceAll('-', ' ')}</Name>
                  <Price>
                    {formatCurrency(cake.price)} /{' '}
                    {formatCurrency(cake.price * 1.2)}
                  </Price>
                </Detail>
                <OrderNowBtn>Order Now</OrderNowBtn>
              </Card>
            ))}
          </CardWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
