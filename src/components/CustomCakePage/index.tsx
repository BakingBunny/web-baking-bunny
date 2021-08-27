import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFoundPage } from '../../pages/NotFoundPage';
// import formatCurrency from '../../utils/formatCurrency';
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
  PriceWrapper,
} from './CustomCakeElements';
import { useAppDispatch } from '../../store/hooks';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { Tastes } from './Tastes';
import { Size } from './Size';
// import { v4 as uuidv4 } from 'uuid';
import { CakeType } from './CakeType';
import { ProductInterface } from '../../interface/ProductInterface';

toast.configure();

interface Props {}

const initialProduct = {
  productId: 0,
  productName: '',
  price: 0,
  description: '',
  productImage: '',
  comment: '',
  tasteList: [],
  cakeTypeList: [],
  sizeList: [],
  categoryId: 0,
};

// const initialCustomCake = {
//   requestDescription: '';
//   requestDate: Date | null;
//   isDelivery: boolean | null;
//   tasteId: number;
//   cakeTypeId: number;
//   sizeId: number;

//   id: '',
//   product: initialProduct,
//   tasteId: -1,
//   cakeTypeId: -1,
//   sizeId: -1,
//   qty: 1,
// };

// export const Product: React.FC<Props> = ({ selectedProduct, setShowModal }) => {
export const CustomCake: React.FC<Props> = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInterface>(initialProduct);
  // const [customOrderList, setCustomOrderList] = useState<CustomCakeInterface>();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  // initialize product to add to the cart
  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        window.scrollTo(0, 0); // scroll to top
        // const result = await fetch(`/api/product/${productCategory}`);
        const result = await fetch(
          `https://7hq1iew2e2.execute-api.us-west-2.amazonaws.com/test-docker-dotnet-0715-api/api/product/7`
        );
        const productFetched: ProductInterface = await result.json();
        setSelectedProduct(productFetched);

        setLoading(false);
      };
      fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.
    } catch (error) {
      // toast('Sorry, something went wrong. Try it later.', { type: 'error' });
      console.log(error);
    }
  }, []);

  // const onClickHandler = (): void => {
  //   dispatch(add(productToCart));
  //   toast(
  //     customCakeInfo.productName +
  //       ' is successfully added to your cart.',
  //     {
  //       type: 'success',
  //     }
  //   );
  // };

  // no product(id) found
  // if (!customCakeInfo) return <NotFoundPage />;

  return (
    <Container>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <Wrapper>
            <ProductName>Custom Cake</ProductName>
            <ProductWrapper>
              <Image
                src={selectedProduct.productImage}
                alt={selectedProduct.productName}
              />
              <OptionWrapper>
                <PriceWrapper>Price: Various</PriceWrapper>
                {selectedProduct.tasteList.length > 0 && ( // display if product has multiple tastes (e.g. fruits cake or Dacquoise combo)
                  <Tastes selectedProduct={selectedProduct} />
                )}
                {selectedProduct.cakeTypeList.length > 0 && ( // display if product has multiple tastes (e.g. fruits cake or Dacquoise combo)
                  <CakeType selectedProduct={selectedProduct} />
                )}
                {/* <SubOptionWrapper> */}
                {selectedProduct.sizeList.length > 0 && ( // display if product has multiple sizes (e.g. cake)
                  <Size selectedProduct={selectedProduct} />
                )}
                {/* </SubOptionWrapper> */}
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
          </Wrapper>
          {/* <AddToCartBtn onClick={onClickHandler}>Add To Cart</AddToCartBtn> */}
        </>
      )}
    </Container>
  );
};
