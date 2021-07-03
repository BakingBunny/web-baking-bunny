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
        <Logo
          src={require('../../img/bunny_logo.jpg')?.default}
          alt='logo_img'
        />
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
