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
  // ProductName,
  OptionWrapper,
  SubOptionWrapper,
  AddToCartBtn,
  NoteWrapper,
  PriceWrapper,
} from './CustomCakeElements';
import {
  BasicOption,
  UserInfoForm,
  ConfirmLink,
} from '../CheckOutPage/CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';
import { SelectDate } from './SelectDate';
import { UserInfo } from './UserInfo';
import { ModalWindow } from '../../utils/ModalWindow';
import { DisplayDate } from './DisplayDate';
import { ModalCalcDeliveryFee } from './ModalCalcDeliveryFee';
import { ModalPickUpLocation } from './ModalPickUpLocation';
// import { OrderListInterface } from '../../interface/OrderListInterface';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';

import { Tastes } from './Tastes';
import { Size } from './Size';
// import { v4 as uuidv4 } from 'uuid';
import { CakeType } from './CakeType';
import { ProductInterface } from '../../interface/ProductInterface';
import { useAppSelector } from '../../store/hooks';
import { customCake } from '../../store/customCakeSlice';
import { RequestDescription } from './RequestDescription';
import { Title } from './CheckoutPageElements';

toast.configure();

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
  const [showPickUpLocationModal, setShowPickUpLocationModal] =
    useState<boolean>(false);
  const [showCalcDeliveryFeeModal, setShowCalcDeliveryFeeModal] =
    useState<boolean>(false);
  const [showCalendarModal, setShowCalendarModal] = useState<boolean>(false);
  // const [customOrderList, setCustomOrderList] = useState<CustomCakeInterface>();
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const [loading, setLoading] = useState<boolean>(true);

  // initialize product to add to the cart
  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        window.scrollTo(0, 0); // scroll to top
        // const result = await fetch(`/api/product/${productCategory}`);
        const result = await fetch(
          `https://7hq1iew2e2.execute-api.us-west-2.amazonaws.com/test-docker-dotnet-0715-api/api/product/1`
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
    <>
      <Container>
        <Title>Custom Cake</Title>
        <PriceWrapper>
          The price is various according to your request.
        </PriceWrapper>
        {loading ? (
          'Loading...'
        ) : (
          <>
            <Wrapper>
              <OptionWrapper>
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
                <BasicOption>
                  <DeliveryOption
                    setShowPickUpLocationModal={setShowPickUpLocationModal}
                    setShowCalcDeliveryFeeModal={setShowCalcDeliveryFeeModal}
                  />
                  {customCakeState.isDelivery !== null && (
                    <DisplayDate setShowModal={setShowCalendarModal} />
                  )}
                  {customCakeState.requestDate !== null && (
                    <RequestDescription />
                  )}
                </BasicOption>
              </OptionWrapper>
              {customCakeState.requestDate && (
                <UserInfoForm>
                  <UserInfo />
                </UserInfoForm>
              )}
              {/* <ConfirmLink to={'/review'}>Confirm</ConfirmLink> */}
            </Wrapper>
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
            {/* <AddToCartBtn onClick={onClickHandler}>Add To Cart</AddToCartBtn> */}
          </>
        )}
      </Container>
      {showPickUpLocationModal && (
        <ModalWindow
          showModal={showPickUpLocationModal}
          setShowModal={setShowPickUpLocationModal}
        >
          <ModalPickUpLocation setShowModal={setShowPickUpLocationModal} />
        </ModalWindow>
      )}
      {showCalcDeliveryFeeModal && (
        <ModalWindow
          showModal={showCalcDeliveryFeeModal}
          setShowModal={setShowCalcDeliveryFeeModal}
        >
          <ModalCalcDeliveryFee setShowModal={setShowCalcDeliveryFeeModal} />
        </ModalWindow>
      )}
      {showCalendarModal && (
        <ModalWindow
          showModal={showCalendarModal}
          setShowModal={setShowCalendarModal}
        >
          <SelectDate setShowModal={setShowCalendarModal} />
        </ModalWindow>
      )}
    </>
  );
};
