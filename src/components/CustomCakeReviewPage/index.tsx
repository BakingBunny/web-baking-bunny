import React from 'react';
import { Container, Title, OrderBtn, Subtitle } from './ReviewPageElements';
import { OptionInfo } from './OptionInfo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { userInfo } from '../../store/userInfoSlice';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { customCake } from '../../store/customCakeSlice';

toast.configure();

interface Props {}

export const CustomCakeReview: React.FC<Props> = (props: Props) => {
  // const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const history = useHistory();
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
      const path = '/custom-cake/confirm';
      history.push(path);
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
