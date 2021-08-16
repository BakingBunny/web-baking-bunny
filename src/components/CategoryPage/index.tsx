import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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
  CountCartItems,
  CounterWrapper,
} from './CategoryElements';
import formatCurrency from '../../utils/formatCurrency';
import { products } from '../../store/cartSlice';
import { useAppSelector } from '../../store/hooks';
import { ProductInterface } from '../../interface/ProductInterface';
import { CartInterface } from '../../interface/CartInterface';
// import { NotFoundPage } from '../../pages/NotFoundPage';
// import productList from '../../productList.json';

toast.configure();

interface Props {
  productCategory: string;
  selectedProductId: number | null;
}

export const Category = (props: Props) => {
  const [productList, setProductList] = useState<ProductInterface[]>([]);
  const cartListState = useAppSelector<CartInterface[]>(products);
  const [loading, setLoading] = useState<boolean>(true);
  const { productCategory, selectedProductId } = props;
  const history = useHistory();

  // fetch product list from the server
  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        window.scrollTo(0, 0); // scroll to top
        const result = await fetch(
          `https://7hq1iew2e2.execute-api.us-west-2.amazonaws.com/test-docker-dotnet-0715-api/api/category/${productCategory}`
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

  // check how many the specific items are already added to the cart
  const AddedNumberToCart = useCallback(
    (productId: number): number => {
      return cartListState.reduce((total, item) => {
        return item.product.productId === productId ? total + item.qty : total;
      }, 0);
    },
    [cartListState]
  );

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
    const path = '/product/' + id;
    history.push(path);
  };

  return (
    <Container>
      <Wrapper>
        <Title>{productCategory.replace('/', '')}</Title>
        <CardWrapper>
          {loading
            ? 'Loading...' // shows it while loading product list from the server.
            : productList &&
              productList.map((product: ProductInterface) => (
                <Card
                  key={product.productName}
                  isSelected={product.productId === selectedProductId}
                  onClick={() => CardHandler(product.productId)}
                >
                  {AddedNumberToCart(product.productId) > 0 && (
                    <CounterWrapper>
                      <CountCartItems>
                        {AddedNumberToCart(product.productId)}
                      </CountCartItems>
                    </CounterWrapper>
                  )}
                  <Image
                    // src={require(`../../img/${product.productImage}`)?.default}
                    src={product.productImage}
                    alt={product.productName}
                  />
                  {/* {product.productId === selectedProductId && <CheckIcon />} */}
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
                  <OrderNowBtn
                    isSelected={product.productId === selectedProductId}
                  >
                    {product.productId === selectedProductId
                      ? 'Selected'
                      : 'Order Now'}
                  </OrderNowBtn>
                </Card>
              ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};
