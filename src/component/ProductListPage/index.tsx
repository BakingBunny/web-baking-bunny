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
import products from '../../productList.json';
import formatCurrency from '../../utils';
import { Product } from '../../interface/Product';

interface Props {
  productType: string;
}

export const ProductList = (props: Props) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const { productType } = props;

  useEffect(() => {
    switch (productType) {
      case '/cakes':
        //TODO: fetch API here in production
        setProductList(
          products.filter(
            (item) => item.type === 'cake' || item.type === 'custom-cake'
          )
        );
        break;
      case '/dacquoises':
        //TODO: fetch API here in production
        setProductList(
          products.filter(
            (item) => item.type === 'dacquoise' || item.type === 'dacquoise-set'
          )
        );
        break;
    }
  }, [productType]);

  return (
    <Container>
      <Wrapper>
        <Title>{productType.replace('/', '')}</Title>
        <CardWrapper>
          {productList.map((product: Product) => (
            <Card to={`${productType}/${product.id}`} key={product.item_name}>
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
  );
};
