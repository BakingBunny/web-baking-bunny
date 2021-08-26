import React from 'react';
import { CartProducts } from './CartProducts';
import { Container, Title, Wrapper, OrderBtn } from './ReviewPageElements';
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
    // id: item.id,
    const orderSummary = {
      saleItems: cartListState.map((item) => ({
        // id: 0,
        quantity: item.qty,
        // discount: 0,
        productId: item.product.productId,
        sizeId: item.sizeId,
        tasteId: item.tasteId,
        // orderListId: 0,
      })),
      user: {
        // id: 0,
        firstname: userInfoState.firstname,
        lastname: userInfoState.lastname,
        email: userInfoState.email,
        address: userInfoState.address,
        postalCode: userInfoState.postalCode,
        phone: userInfoState.phone,
        city: userInfoState.city,
      },
      orderlist: {
        // id: 0,
        subtotal: orderListState.subtotal,
        deliveryFee: orderListState.deliveryFee,
        total: orderListState.subtotal + orderListState.deliveryFee,
        delivery: orderListState.isDelivery,
        allergy: userInfoState.allergy,
        comment: userInfoState.inquiry,
        orderDate: new Date(),
        pickupDeliveryDate: orderListState.pickupDeliveryDate,
        // userId: 0,
      },
    };
    console.log(orderSummary);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderSummary),
    };
    const response = await fetch(
      'https://7hq1iew2e2.execute-api.us-west-2.amazonaws.com/test-docker-dotnet-0715-api/api/order',
      requestOptions
    );

    if (response.status === 200) {
      dispatch(removeAll()); // empty cart
      const path = 'confirm';
      history.push(path);
    } else {
      toast('Sorry, something went wrong. Try it later.', { type: 'error' });
    }
  };

  return (
    <Container>
      <Title>Review</Title>
      {/* Please double-check your details before placing your order. */}
      <Wrapper>
        <CartProducts />
        <OptionInfo />
      </Wrapper>
      <OrderBtn onClick={onClickHandler}>Place your order</OrderBtn>
    </Container>
  );
};

export default Review;
