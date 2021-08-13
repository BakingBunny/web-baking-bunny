import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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

toast.configure();

interface paramsInterface {
  productId: string;
}

interface Props {
  // id: string;
  // selectedProduct: ProductInterface;
  // setShowModal: Dispatch<SetStateAction<boolean>>;
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

const initialCart = {
  id: '',
  product: initialProduct,
  tasteId: -1,
  sizeId: -1,
  qty: 1,
  special: '',
};

// export const Product: React.FC<Props> = ({ selectedProduct, setShowModal }) => {
export const Product: React.FC<Props> = () => {
  const [productToCart, setproductToCart] =
    useState<CartInterface>(initialCart);
  const dispatch = useAppDispatch();
  const { productId } = useParams<paramsInterface>();
  const [loading, setLoading] = useState<boolean>(true);

  // initialize product to add to the cart
  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        window.scrollTo(0, 0); // scroll to top
        // const result = await fetch(`/api/product/${productCategory}`);
        const result = await fetch(
          `https://7hq1iew2e2.execute-api.us-west-2.amazonaws.com/test-docker-dotnet-0715-api/api/product/`
        );
        const body = await result.json();

        // console.log(body);
        const tempProduct: ProductInterface = body.find(
          (item: ProductInterface) => item.productId === Number(productId)
        );

        setproductToCart((prevState) => ({
          ...prevState,
          product: tempProduct,
          tasteId:
            tempProduct.tasteList.length > 0 ? tempProduct.tasteList[0].id : -1, // default taste is -1 (no taste option product is -1)
          sizeId: tempProduct.sizeList.length ? tempProduct.sizeList[0].id : -1, // default size is -1 (dacquoise is -1)
        }));

        setLoading(false);
      };
      fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.
    } catch (error) {
      // toast('Sorry, something went wrong. Try it later.', { type: 'error' });
      console.log(error);
    }
  }, [productId]);

  const onClickHandler = (): void => {
    setproductToCart((prevState) => ({
      ...prevState,
      id: uuidv4(),
    }));
    dispatch(add(productToCart));
    // localStorage.setItem('cartList', JSON.stringify(cartList));
    toast(
      productToCart.product.productName +
        ' is successfully added to your cart.',
      {
        type: 'success',
      }
    );
  };

  // no product(id) found
  if (!productToCart.product) return <NotFoundPage />;

  return (
    <Container>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <Wrapper>
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
                  {productToCart.sizeId === 2
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
            <p>
              This item may contain or come into contact with eggs, peanuts,
              treenuts, and milk.
            </p>
            <p>
              Please let us know if you have any food allergies or restrictions
              when you place on order.
            </p>
          </Wrapper>
          {productToCart.product.categoryId === 1 ? (
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
        </>
      )}
    </Container>
  );
};
