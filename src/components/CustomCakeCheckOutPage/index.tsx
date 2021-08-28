import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { NotFoundPage } from '../../pages/NotFoundPage';
// import formatCurrency from '../../utils/formatCurrency';
import {
  Container,
  Wrapper,
  // ProductName,
  BasicOption,
  NoteWrapper,
  PriceWrapper,
} from './CustomCakeElements';
import {
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
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { customCake, update } from '../../store/customCakeSlice';
import { RequestDescription } from './RequestDescription';
import { CheckOutQuestion, OptionWrapper, Title } from './CheckoutPageElements';

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
export const CustomCakeCheckOut: React.FC<Props> = () => {
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
  const dispatch = useAppDispatch();

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

        dispatch(
          update({
            name: 'product',
            value: productFetched,
          })
        );

        setLoading(false);
      };
      fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.
    } catch (error) {
      // toast('Sorry, something went wrong. Try it later.', { type: 'error' });
      console.log(error);
    }
  }, [dispatch]);

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
              <BasicOption>
                <OptionWrapper>
                  <CheckOutQuestion>What kind of cake?</CheckOutQuestion>
                  {selectedProduct.cakeTypeList.length > 0 && ( // display if product has multiple tastes (e.g. fruits cake or Dacquoise combo)
                    <CakeType selectedProduct={selectedProduct} />
                  )}
                  {selectedProduct.tasteList.length > 0 && ( // display if product has multiple tastes (e.g. fruits cake or Dacquoise combo)
                    <Tastes selectedProduct={selectedProduct} />
                  )}
                  {selectedProduct.sizeList.length > 0 && ( // display if product has multiple sizes (e.g. cake)
                    <Size selectedProduct={selectedProduct} />
                  )}
                </OptionWrapper>
                <DeliveryOption
                  setShowPickUpLocationModal={setShowPickUpLocationModal}
                  setShowCalcDeliveryFeeModal={setShowCalcDeliveryFeeModal}
                />
                {customCakeState.isDelivery !== null && (
                  <DisplayDate setShowModal={setShowCalendarModal} />
                )}
                {customCakeState.requestDate !== null && <RequestDescription />}
              </BasicOption>
              {customCakeState.requestDescription && (
                <UserInfoForm>
                  <UserInfo />
                  <NoteWrapper>
                    <h3>Note:</h3>
                    <p>
                      This item may contain or come into contact with eggs,
                      peanuts, treenuts, and milk.
                    </p>
                    <p>
                      Please let us know if you have any food allergies or
                      restrictions.
                    </p>
                  </NoteWrapper>
                </UserInfoForm>
              )}
              <ConfirmLink to={'/custom-cake/review'}>Confirm</ConfirmLink>
            </Wrapper>
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
