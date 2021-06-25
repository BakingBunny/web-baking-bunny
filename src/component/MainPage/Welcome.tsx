import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Container,
  BackgroundWrapper,
  Image,
  Logo,
  CardWrapper,
  Card,
  Slogan,
  ContinueBtn,
} from './MainPageElements';

interface Props {}

export const Welcome = (props: Props) => {
  const isMobile: boolean = useWindowSize();

  return (
    <Container>
      <BackgroundWrapper>
        {isMobile ? (
          <Image src='img/welcome_background_mobile.jpg' alt='mobile_bg' />
        ) : (
          <Image src='img/welcome_background_mobile.jpg' alt='desktop_bg' />
        )}
        <Logo src='img/bunny_logo.jpg' alt='logo_img' />
      </BackgroundWrapper>
      <CardWrapper>
        <Card>
          <Slogan>Baking Bunny Slogan Here</Slogan>
          <ContinueBtn>Continue</ContinueBtn>
        </Card>
      </CardWrapper>
    </Container>
  );
};
