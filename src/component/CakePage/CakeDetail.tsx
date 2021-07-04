import React, { useState, useEffect } from 'react';
import { NotFoundPage } from '../../pages/NotFoundPage';
import formatCurrency from '../../utils';
import cakesList from '../CakesListPage/cakesList.json';
import {
  Container,
  Image,
  CakeName,
  Price,
  OptionWrapper,
  FruitsTitle,
  FruitsWrapper,
  FruitsBtn,
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

interface Cake {
  type: string;
  item_name: string;
  item_name_kor: string;
  tastes: string[];
  tastes_kor: string[];
  price: number;
  available_date: number[];
  image: string;
  special?: string;
}

type cakeSizeType = 6 | 8;
type fruitsType = 'Mango' | 'Strawberry' | 'None(Fresh-Milk)';

export const CakeDetail: React.FC<Props> = ({ id }) => {
  const [selectedCake, setSelectedCake] = useState<Cake>();
  const [fruits, setFruits] = useState<fruitsType>('Mango');
  const [cakeQty, setCakeQty] = useState<number>(1);
  const [cakeSize, setCakeSize] = useState<cakeSizeType>(6);
  const cakeId = id;

  useEffect(() => {
    setSelectedCake(cakesList.find((cake) => cake.item_name === cakeId));

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
          src={require(`../../img/${selectedCake.image}`)?.default}
          alt={selectedCake.item_name}
        />
        <CakeName>{selectedCake.item_name}</CakeName>
        <Price>
          {formatCurrency(selectedCake.price)} (6") /{' '}
          {formatCurrency(selectedCake.price * 1.2)} (8")
        </Price>
        <OptionWrapper>
          <FruitsTitle>Fruits</FruitsTitle>
          <FruitsWrapper>
            <FruitsBtn
              isSelected={fruits === 'Mango'}
              onClick={() => setFruits('Mango')}
            >
              Mango
            </FruitsBtn>
            <FruitsBtn
              isSelected={fruits === 'Strawberry'}
              onClick={() => setFruits('Strawberry')}
            >
              Strawberry
            </FruitsBtn>
            <FruitsBtn
              isSelected={fruits === 'None(Fresh-Milk)'}
              onClick={() => setFruits('None(Fresh-Milk)')}
            >
              None
              <br />
              <span>(Fresh-Milk)</span>
            </FruitsBtn>
          </FruitsWrapper>
          <SizeTitle>Size (inch)</SizeTitle>
          <SizeWrapper>
            <SizeBtn isSelected={cakeSize === 6} onClick={() => setCakeSize(6)}>
              6
            </SizeBtn>
            <SizeBtn isSelected={cakeSize === 8} onClick={() => setCakeSize(8)}>
              8
            </SizeBtn>
          </SizeWrapper>
          <QtyTitle>Quantity</QtyTitle>
          <QtyWrapper>
            <QtyMinusBtn
              onClick={() => setCakeQty(cakeQty - 1)}
              disabled={cakeQty <= 1}
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
        </OptionWrapper>
        <AddToCartBtn>
          {cakeSize === 8
            ? formatCurrency(selectedCake.price * 1.2 * cakeQty)
            : formatCurrency(selectedCake.price * cakeQty)}
          <br />
          Add To Cart
        </AddToCartBtn>
      </Container>
    </>
  );
};
