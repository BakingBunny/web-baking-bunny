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
import { ProductDetailModal } from '../ProductDetailModal';
import { NotFoundPage } from '../../pages/NotFoundPage';

interface Props {
  productType: string;
}

const initialProduct = {
  id: 0,
  type: '',
  item_name: '',
  item_name_kor: '',
  tastes: [],
  tastes_kor: [],
  price: 0,
  available_date: [],
  image: '',
  special: '',
};

export const ProductList = (props: Props) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<Product>(initialProduct);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { productType } = props;

  useEffect(() => {
    switch (productType) {
      case '/cakes':
        //TODO: fetch API here in production
        // const fetchData = async () => {
        //   window.scrollTo(0, 0); // scroll to top
        //   const result = await fetch(`/api/cake`);
        //   const body = await result.json();
        //   setSelectedCake(body);
        // };
        // fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.

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

  const CardHandler = (id: number) => {
    const findProduct = products.find((product) => product.id === id);
    if (findProduct) {
      setSelectedProduct(findProduct);
      setShowModal(true);
      document.body.style.overflow = 'hidden'; // prevent background scrolling when modal open
    } else {
      return <NotFoundPage />; //TODO: check if it works
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>{productType.replace('/', '')}</Title>
        <CardWrapper>
          {productList.map((product: Product) => (
            <Card
              key={product.item_name}
              onClick={() => CardHandler(product.id)}
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
      {showModal && (
        <ProductDetailModal
          selectedProduct={selectedProduct}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </Container>
  );
};
