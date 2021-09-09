import React from 'react';
// import axios from 'axios';
import { CartProducts } from './CartProducts';
import {
  Container,
  Title,
  Wrapper,
  OrderBtn,
  Subtitle,
} from './ReviewPageElements';
import { OptionInfo } from './OptionInfo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { removeAll } from '../../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { products } from '../../store/cartSlice';
import { userInfo } from '../../store/userInfoSlice';
import { orderList } from '../../store/orderListSlice';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import { CartInterface } from '../../interface/CartInterface';
import { OrderListInterface } from '../../interface/OrderListInterface';
import { RegualrOrderEnum } from '../../interface/OrderProgressInterface';
import { update } from '../../store/orderProgressSlice';

toast.configure();

interface Props {}

const Review = (props: Props) => {
  // const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const cartListState = useAppSelector<CartInterface[]>(products);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const orderListState = useAppSelector<OrderListInterface>(orderList);

  const onClickHandler = async () => {
    const orderSummary = {
      saleItems: cartListState.map((item) => ({
        quantity: item.qty,
        productId: item.product.productId,
        sizeId: item.sizeId,
        tasteId: item.tasteId,
      })),
      user: {
        firstname: userInfoState.firstname,
        lastname: userInfoState.lastname,
        email: userInfoState.email,
        address: userInfoState.address,
        postalCode: userInfoState.postalCode,
        phone: userInfoState.phone,
        city: userInfoState.city,
      },
      orderlist: {
        subtotal: orderListState.subtotal,
        deliveryFee: orderListState.deliveryFee,
        total: orderListState.subtotal + orderListState.deliveryFee,
        delivery: orderListState.isDelivery,
        allergy: orderListState.allergy,
        comment: orderListState.inquiry,
        orderDate: new Date(),
        pickupDeliveryDate: orderListState.pickupDeliveryDate,
      },
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderSummary),
    };
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/order`,
      requestOptions
    );

    if (response.status === 200) {
      dispatch(removeAll()); // empty cart

      dispatch(
        update({
          type: 'regularOrder',
          value: RegualrOrderEnum.confirm,
        })
      );

      history.push('/confirm');
    } else {
      toast('Sorry, something went wrong. Try it later.', { type: 'error' });
    }

    // const data = await axios.post(
    //   `${process.env.REACT_APP_BASE_URL}/order`,
    //   orderSummary
    // );
    // console.log(data);
  };

  return (
    <Container>
      <Title>Review</Title>
      <Subtitle>
        Please double-check your details before placing your order.
      </Subtitle>
      <Wrapper>
        <CartProducts />
        <OptionInfo />
      </Wrapper>
      <OrderBtn onClick={onClickHandler}>Place your order</OrderBtn>
    </Container>
  );
};

export default Review;
