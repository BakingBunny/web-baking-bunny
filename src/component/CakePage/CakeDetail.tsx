import React, { useState, useEffect } from 'react';
import { NotFoundPage } from '../../pages/NotFoundPage';
import cakesList from '../CakesListPage/cakesList.json';
import {
  Container,
  Image,
  CakeName,
  Price,
  SizeQtyWrapper,
  SizeTitle,
  SizeWrapper,
  Size,
  QtyTitle,
  QtyWrapper,
  QtyBtn,
  CakeQty,
  AddToCartBtn,
} from './CakeDetailElements';

interface Props {
  id: string;
}

interface cake {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  image: string;
  price: number;
  size: number[];
  ingredients: string;
}

export const CakeDetail: React.FC<Props> = ({ id }) => {
  const [selectedCake, setSelectedCake] = useState<cake>();
  const [cakeQty, setCakeQty] = useState<number>(0);
  const [cakeSize, setCakeSize] = useState<number>(6);
  const cakeId = id;

  useEffect(() => {
    setSelectedCake(cakesList.find((cake) => cake.id === cakeId));

    // const fetchData = async () => {
    //   window.scrollTo(0, 0); // scroll to top
    //   const result = await fetch(`/api/cake/${id}`);
    //   const body = await result.json();
    //   setSelectedCake(body);
    // };
    // fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.
  }, [cakeId]);

  if (!selectedCake) return <NotFoundPage />;

  return (
    <>
      <Container>
        <Image
          src={`./img/cakes/${selectedCake.image}`}
          alt={selectedCake.name}
        />
        <CakeName>{selectedCake.name}</CakeName>
        <Price>${selectedCake.price}</Price>
        <SizeQtyWrapper>
          <SizeTitle>Size</SizeTitle>
          <SizeWrapper>
            <Size>6</Size>
            <Size>8</Size>
          </SizeWrapper>
          <QtyTitle>Qty.</QtyTitle>
          <QtyWrapper>
            <QtyBtn
              onClick={() => setCakeQty(cakeQty - 1)}
              disabled={cakeQty <= 0}
            >
              -
            </QtyBtn>
            <CakeQty>{cakeQty}</CakeQty>
            <QtyBtn
              onClick={() => setCakeQty(cakeQty + 1)}
              disabled={cakeQty >= 9}
            >
              +
            </QtyBtn>
          </QtyWrapper>
        </SizeQtyWrapper>
        <AddToCartBtn>Add To Cart</AddToCartBtn>
      </Container>
    </>
  );
};
