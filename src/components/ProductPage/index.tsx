import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFoundPage } from '../../pages/NotFoundPage';
import formatCurrency from '../../utils/formatCurrency';
import { ProductInterface } from '../../interface/ProductInterface';
import {
  Container,
  Wrapper,
  ProductWrapper,
  Image,
  ProductName,
  OptionWrapper,
  SubOptionWrapper,
  AddToCartBtn,
  NoteWrapper,
} from './ProductElements';
import { add } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { CartInterface } from '../../interface/CartInterface';
import { Price } from './Price';
import { Tastes } from './Tastes';
import { Size } from './Size';
import { Quantity } from './Quantity';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../CategoryPage';
import { CakeType } from './CakeType';
import { useFetch } from '../../hooks/useFetch';

toast.configure();

interface paramsInterface {
  productId: string;
}

interface Props {}

const initialProduct: ProductInterface = {
  productId: 0,
  productName: '',
  price: 0,
  description: '',
  productImage: '',
  comment: '',
  tasteList: [],
  cakeTypeList: [],
  sizeList: [],
  categoryList: [],
};

const initialCart: CartInterface = {
  id: '',
  product: initialProduct,
  tasteId: -1,
  cakeTypeId: -1,
  sizeId: -1,
  qty: 1,
};

// export const Product: React.FC<Props> = ({ selectedProduct, setShowModal }) => {
export const Product: React.FC<Props> = () => {
  const [productToCart, setproductToCart] =
    useState<CartInterface>(initialCart);
  const dispatch = useAppDispatch();
  const { productId } = useParams<paramsInterface>();
  const {
    data: productFetched,
    loading,
    error,
  } = useFetch<ProductInterface>(
    `https://7hq1iew2e2.execute-api.us-west-2.amazonaws.com/test-docker-dotnet-0715-api/api/product/${productId}`
  );

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top

    productFetched &&
      setproductToCart((prevState: CartInterface) => ({
        ...prevState,
        id: uuidv4(),
        product: productFetched,
        tasteId:
          productFetched.tasteList.length > 0
            ? productFetched.tasteList[0].id
            : -1, // default taste is -1 (no taste option product is -1)
        cakeTypeId:
          productFetched.cakeTypeList.length > 0
            ? productFetched.cakeTypeList[0].id
            : -1, // default taste is -1 (no taste option product is -1)
        sizeId: productFetched.sizeList.length
          ? productFetched.sizeList[0].id
          : -1, // default size is -1 (dacquoise is -1)
        qty: 1,
      }));
  }, [productFetched]);

  const onClickHandler = (): void => {
    dispatch(add(productToCart));
    toast(
      productToCart.product.productName +
        ' is successfully added to your cart.',
      {
        type: 'success',
      }
    );

    // Set a new cart ID for the next item (if add button clicked without change pages)
    setproductToCart((prevState) => ({
      ...prevState,
      id: uuidv4(),
    }));
  };

  // no product(id) found
  if (!productToCart.product) return <NotFoundPage />;

  return (
    <Container>
      <Wrapper>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {productToCart && (
          <>
            <ProductName>
              {productToCart.product.productName.replaceAll('-', ' ')}
            </ProductName>
            <ProductWrapper>
              <Image
                src={productToCart.product.productImage}
                alt={productToCart.product.productName}
              />
              <OptionWrapper>
                <Price selectedProduct={productToCart.product} />
                {productToCart.product.tasteList.length > 0 && ( // display if product has multiple tastes (e.g. fruits cake or Dacquoise combo)
                  <Tastes
                    selectedProduct={productToCart.product}
                    productToCart={productToCart}
                    setproductToCart={setproductToCart}
                  />
                )}
                {productToCart.product.cakeTypeList.length > 0 && ( // display if product has multiple tastes (e.g. fruits cake or Dacquoise combo)
                  <CakeType
                    selectedProduct={productToCart.product}
                    productToCart={productToCart}
                    setproductToCart={setproductToCart}
                  />
                )}
                <SubOptionWrapper>
                  {productToCart.product.sizeList.length > 0 && ( // display if product has multiple sizes (e.g. cake)
                    <Size
                      productToCart={productToCart}
                      setproductToCart={setproductToCart}
                    />
                  )}
                  <Quantity
                    productToCart={productToCart}
                    setproductToCart={setproductToCart}
                  />
                </SubOptionWrapper>
                <AddToCartBtn onClick={onClickHandler}>
                  {productToCart.sizeId === 3
                    ? formatCurrency(
                        productToCart.product.price * 1.2 * productToCart.qty
                      )
                    : formatCurrency(
                        productToCart.product.price * productToCart.qty
                      )}
                  <br />
                  Add To Cart
                </AddToCartBtn>
              </OptionWrapper>
            </ProductWrapper>
            <NoteWrapper>
              <h3>Note:</h3>
              <p>
                This item may contain or come into contact with eggs, peanuts,
                treenuts, and milk.
              </p>
              <p>
                Please let us know if you have any food allergies or
                restrictions when you place on order.
              </p>
            </NoteWrapper>
          </>
        )}
      </Wrapper>
      {productToCart.product.categoryList.length > 0 &&
      productToCart.product.categoryList[0].id === 1 ? (
        <Category
          productCategory={'cakes'}
          selectedProductId={productToCart.product.productId}
        />
      ) : (
        <Category
          productCategory={'dacquoises'}
          selectedProductId={productToCart.product.productId}
        />
      )}
    </Container>
  );
};
