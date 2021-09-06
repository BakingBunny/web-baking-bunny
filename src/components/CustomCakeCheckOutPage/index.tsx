import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Slider from 'react-slick';
// import productList from '../../productList.json';
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
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { Tastes } from './Tastes';
import { Size } from './Size';
import { CakeType } from './CakeType';
import { ProductInterface } from '../../interface/ProductInterface';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { customCake, update } from '../../store/customCakeSlice';
import { RequestDescription } from './RequestDescription';
import { CheckOutQuestion, OptionWrapper, Title } from './CheckoutPageElements';
import { useFetch } from '../../hooks/useFetch';

toast.configure();

interface Props {}

export const CustomCakeCheckOut: React.FC<Props> = () => {
  const [showPickUpLocationModal, setShowPickUpLocationModal] =
    useState<boolean>(false);
  const [showCalcDeliveryFeeModal, setShowCalcDeliveryFeeModal] =
    useState<boolean>(false);
  const [showCalendarModal, setShowCalendarModal] = useState<boolean>(false);
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const dispatch = useAppDispatch();

  const {
    data: selectedProduct,
    loading,
    error,
  } = useFetch<ProductInterface>(`${process.env.REACT_APP_BASE_URL}/product/1`);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top

    dispatch(
      update({
        name: 'product',
        value: selectedProduct,
      })
    );
  }, [dispatch, selectedProduct]);

  // const settings = {
  //   className: 'center',
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: '60px',
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   speed: 500,
  // };

  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <Container>
        {selectedProduct && (
          <>
            <Title>Custom Cake</Title>
            <PriceWrapper>
              The price is various according to your request.
            </PriceWrapper>
            {/* <div style={{ width: '100vw' }}>
          <Slider {...settings}>
            {productList.map((item) => (
              <img src={item.productImage} width={200} alt={item.productName} />
            ))}
          </Slider>
        </div> */}
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
                {customCakeState.isDelivery !== undefined && (
                  <DisplayDate setShowModal={setShowCalendarModal} />
                )}
                {customCakeState.requestDate !== undefined && (
                  <RequestDescription />
                )}
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
