import React, { useState, useEffect } from 'react';
import { NotFoundPage } from '../../pages/NotFoundPage';
import formatCurrency from '../../utils';
import cakesList from '../CakesListPage/cakesList.json';
import {
  Container,
  Image,
  CakeName,
  Price,
  SizeQtyWrapper,
  SizeTitle,
  SizeWrapper,
  SizeBtn,
  QtyTitle,
  QtyWrapper,
  QtyMinusBtn,
  QtyPlusBtn,
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

type cakeSizeType = 0 | 6 | 8;

export const CakeDetail: React.FC<Props> = ({ id }) => {
  const [selectedCake, setSelectedCake] = useState<cake>();
  const [cakeQty, setCakeQty] = useState<number>(0);
  const [cakeSize, setCakeSize] = useState<cakeSizeType>(0);
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
        <Price>
          {formatCurrency(selectedCake.price)} (6") /{' '}
          {formatCurrency(selectedCake.price * 1.2)} (8")
        </Price>
        <SizeQtyWrapper>
          <SizeTitle>Size (inch)</SizeTitle>
          <SizeWrapper>
            <SizeBtn isSelected={cakeSize === 6} onClick={() => setCakeSize(6)}>
              6
            </SizeBtn>
            <SizeBtn isSelected={cakeSize === 8} onClick={() => setCakeSize(8)}>
              8
            </SizeBtn>
          </SizeWrapper>
          <QtyTitle>Qty.</QtyTitle>
          <QtyWrapper>
            <QtyMinusBtn
              onClick={() => setCakeQty(cakeQty - 1)}
              disabled={cakeQty <= 0}
            >
              -
            </QtyMinusBtn>
            <CakeQty>{cakeQty}</CakeQty>
            <QtyPlusBtn
              onClick={() => setCakeQty(cakeQty + 1)}
              disabled={cakeQty >= 9}
            >
              +
            </QtyPlusBtn>
          </QtyWrapper>
        </SizeQtyWrapper>

        <AddToCartBtn>
          {cakeSize === 8
            ? formatCurrency(selectedCake.price * 1.2 * cakeQty)
            : formatCurrency(selectedCake.price * cakeQty)}
          <br /> <br />
          Add To Cart
        </AddToCartBtn>
      </Container>
    </>
  );
};
