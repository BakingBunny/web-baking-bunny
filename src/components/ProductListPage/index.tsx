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
// import productList from '../../productList.json';
import formatCurrency from '../../utils';
import { ProductInterface } from '../../interface/ProductInterface';
import { ProductDetailModal } from '../ProductDetailModal';
import { NotFoundPage } from '../../pages/NotFoundPage';

interface Props {
  productType: string;
}

const initialProduct = {
  productId: 0,
  productName: '',
  price: 0,
  description: '',
  productImage: '',
  comment: '',
  tasteList: [],
  sizeList: [],
  categoryId: 0,
};

export const ProductList = (props: Props) => {
  const [productList, setProductList] = useState<ProductInterface[]>([]);
  const [filteredProductList, setFilteredProductList] = useState<
    ProductInterface[]
  >([]);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInterface>(initialProduct);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { productType } = props;

  // fetch product list from the server
  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo(0, 0); // scroll to top
      const result = await fetch(`/api/product`);
      const body = await result.json();
      setProductList(body);
    };
    fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.
  }, []);

  useEffect(() => {
    switch (productType) {
      case '/cakes':
        setFilteredProductList(
          productList.filter((item) => item.categoryId === 1)
        );
        break;
      case '/dacquoises':
        setFilteredProductList(
          productList.filter((item) => item.categoryId === 2)
        );
        break;
    }
  }, [productType, productList]);

  // When a product is selected, find the product and show the detail modal.
  const CardHandler = (id: number) => {
    const findProduct = filteredProductList.find(
      (product) => product.productId === id
    );
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
          {filteredProductList.map((product: ProductInterface) => (
            <Card
              key={product.productName}
              onClick={() => CardHandler(product.productId)}
            >
              <Image
                // src={require(`../../img/${product.productImage}`)?.default}
                src={product.productImage}
                alt={product.productName}
              />
              <Detail>
                <Name>{product.productName.replaceAll('-', ' ')}</Name>
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
                    product.categoryId === 1 && product.price !== 0
                      ? formatCurrency(product.price * 1.2) // cake 8 inch price
                      : product.categoryId === 2 && '1 Piece' // dacquoise piece
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
