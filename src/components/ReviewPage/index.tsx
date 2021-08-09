import React from 'react';
import { CartProducts } from './CartProducts';
import { Container, Title, Wrapper, OrderBtn } from './ReviewPageElements';
import { OptionInfo } from './OptionInfo';
import { useHistory } from 'react-router-dom';
import { removeAll } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';

interface Props {}

const Review = (props: Props) => {
  // const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const onClickHandler = async () => {
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title: 'React POST Request Example' }),
    // };
    // const response = await fetch('/api/order', requestOptions);
    // const data = await response.json();
    // setIsSuccess({ postId: data.id });

    dispatch(removeAll()); // empty cart

    const path = 'confirm';
    history.push(path);
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
