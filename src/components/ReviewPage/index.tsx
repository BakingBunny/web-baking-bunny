import React from 'react';
import { Container, OrderBtn, Title, Wrapper } from './ReviewPageElements';

interface Props {}

const Review = (props: Props) => {
  // const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onClickHandler = async () => {
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title: 'React POST Request Example' }),
    // };
    // const response = await fetch('/api/order', requestOptions);
    // const data = await response.json();
    // setIsSuccess({ postId: data.id });
  };

  return (
    <Container>
      <Title>Review</Title>
      <Wrapper></Wrapper>
      <OrderBtn onClick={onClickHandler}>Place your order</OrderBtn>
    </Container>
  );
};

export default Review;
