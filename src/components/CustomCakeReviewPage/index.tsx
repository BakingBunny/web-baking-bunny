import React from 'react';
import {
  Container,
  Title,
  OrderBtn,
  Subtitle,
} from './CustomCakeReviewPageElements';
import { OptionInfo } from './OptionInfo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { userInfo } from '../../store/userInfoSlice';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { customCake } from '../../store/customCakeSlice';
import { update } from '../../store/orderProgressSlice';
import { CustomOrderEnum } from '../../interface/OrderProgressInterface';

toast.configure();

interface Props {}

export const CustomCakeReview: React.FC<Props> = (props: Props) => {
  // const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);

  const onClickHandler = async () => {
    // id: item.id,
    const orderSummary = {
      requestDescription: customCakeState.requestDescription,
      requestDate: customCakeState.requestDate,
      delivery: customCakeState.isDelivery,
      sizeId: customCakeState.sizeId,
      tasteId: customCakeState.tasteId,
      cakeTypeId: customCakeState.cakeTypeId,
      user: {
        firstname: userInfoState.firstname,
        lastname: userInfoState.lastname,
        email: userInfoState.email,
        address: userInfoState.address,
        postalCode: userInfoState.postalCode,
        phone: userInfoState.phone,
        city: userInfoState.city,
      },
    };
    console.log(orderSummary);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderSummary),
    };
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/customorder`,
      requestOptions
    );

    if (response.status === 200) {
      dispatch(
        update({
          type: 'customOrder',
          value: CustomOrderEnum.confirm,
        })
      );

      history.push('/custom-cake/confirm');
    } else {
      toast('Sorry, something went wrong. Try it later.', { type: 'error' });
    }
  };

  return (
    <Container>
      <Title>Review</Title>
      <Subtitle>
        Please double-check your details before placing your order.
      </Subtitle>
      <OptionInfo />
      <OrderBtn onClick={onClickHandler}>Place your order</OrderBtn>
    </Container>
  );
};

export default CustomCakeReview;
