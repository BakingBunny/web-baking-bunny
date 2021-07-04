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
          <Image
            src={require('../../img/welcome_background_mobile.jpg')?.default}
            alt='mobile_bg'
          />
        ) : (
          <Image
            src={require('../../img/welcome_background_mobile.jpg')?.default}
            alt='desktop_bg'
          />
        )}
        <Logo href='https://www.instagram.com/baking.bunny_yyc/'>
          <img
            src={require('../../img/logo_circle.png')?.default}
            alt='logo_img'
          />
        </Logo>
      </BackgroundWrapper>
      <CardWrapper>
        <Card>
          <Slogan>Baking Bunny Slogan Here</Slogan>
          <ContinueBtn to={'/cakes'}>Continue</ContinueBtn>
        </Card>
      </CardWrapper>
    </Container>
  );
};
