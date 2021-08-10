import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import formatCurrency from '../../utils/formatCurrency';
import { ProductInterface } from '../../interface/ProductInterface';
import { ProductDetail } from '../ProductDetail';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { ModalWindow } from '../../utils/ModalWindow';
// import productList from '../../productList.json';

toast.configure();

interface paramsInterface {
  productCategory: string;
}

interface Props {}

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
  // const [filteredProductList, setFilteredProductList] = useState<
  //   ProductInterface[]
  // >([]);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInterface>(initialProduct);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { productCategory } = useParams<paramsInterface>();

  // fetch product list from the server
  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        window.scrollTo(0, 0); // scroll to top
        // const result = await fetch(`/api/product/${productCategory}`);
        const result = await fetch(
          `https://7hq1iew2e2.execute-api.us-west-2.amazonaws.com/test-docker-dotnet-0715-api/api/product/${productCategory}`
        );
        const body = await result.json();
        setProductList(body);
        setLoading(false);
      };
      fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.
    } catch (error) {
      // toast('Sorry, something went wrong. Try it later.', { type: 'error' });
      console.log(error);
    }
  }, [productCategory]);

  // useEffect(() => {
  //   switch (productType) {
  //     case '/cakes':
  //       setFilteredProductList(
  //         // productList.filter((item) => item.categoryId === 1)
  //         productList.filter((item) => item.categoryId === 1)
  //       );
  //       break;
  //     case '/dacquoises':
  //       setFilteredProductList(
  //         productList.filter((item) => item.categoryId === 2)
  //       );
  //       break;
  //   }
  // }, [productType, productList]);

  // When a product is selected, find the product and show the detail modal.
  const CardHandler = (id: number) => {
    const findProduct = productList.find((product) => product.productId === id);
    if (findProduct) {
      setSelectedProduct(findProduct);
      setShowModal(true);
    } else {
      return <NotFoundPage />; //TODO: check if it works
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>{productCategory.replace('/', '')}</Title>
        <CardWrapper>
          {loading
            ? 'Loading...' // shows it while loading product list from the server.
            : productList.map((product: ProductInterface) => (
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
      {showModal && ( // once the product card is selected, popup the product detail modal window
        <ModalWindow showModal={showModal} setShowModal={setShowModal}>
          <ProductDetail
            selectedProduct={selectedProduct}
            setShowModal={setShowModal}
          />
        </ModalWindow>
      )}
    </Container>
  );
};
