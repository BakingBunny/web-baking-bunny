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
  const { productType } = props;

  useEffect(() => {
    switch (productType) {
      case '/cakes':
        setProductList(cakesList);
        break;
      case '/dacquoises':
        setProductList(dacquoisesList);
        break;
    }
  }, [productType]);

  return (
    <>
      <Container>
        <Wrapper>
          <Title>{productType.replace('/', '')}</Title>
          <CardWrapper>
            {productList.map((product) => (
              <Card
                to={`${productType}/${product.item_name}`}
                key={product.item_name}
              >
                <Image
                  src={require(`../../img/${product.image}`)?.default}
                  alt={product.item_name}
                />
                <Detail>
                  <Name>{product.item_name.replaceAll('-', ' ')}</Name>
                  <Price>
                    {
                      product.price === 0
                        ? 'Various' // custum cakes
                        : formatCurrency(product.price) //regular cakes and dacquoise
                    }
                    {
                      product.price !== 0 && ' / ' // divider
                    }
                    {
                      productType === '/cakes' && product.price !== 0
                        ? formatCurrency(product.price * 1.2) // cake 8 inch price
                        : productType !== '/cakes' && '1 Piece' // dacquoise piece
                    }
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
