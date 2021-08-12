import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Container,
  BackgroundWrapper,
  MainImage,
  LogoMobile,
  Card,
  LogoDesktop,
  Slogan,
  CakeBtn,
  DacquoiseBtn,
} from './MainPageElements';

interface Props {}

export const Main = (props: Props) => {
  const isMobile: boolean = useWindowSize();

  return (
    <Container>
      <BackgroundWrapper>
        <MainImage
          style={{
            backgroundImage: require('../../img/welcome_background.jpg')
              ?.default,
          }}
        ></MainImage>
        {isMobile && (
          <LogoMobile
            href='https://www.instagram.com/baking.bunny_yyc/'
            rel='noreferrer'
            target='_blank'
          >
            <img
              src={require('../../img/logo_circle.png')?.default}
              alt='logo_img'
            />
          </LogoMobile>
        )}
      </BackgroundWrapper>
      <Card>
        {!isMobile && (
          <LogoDesktop
            href='https://www.instagram.com/baking.bunny_yyc/'
            rel='noreferrer'
            target='_blank'
          >
            <img
              src={require('../../img/logo_circle.png')?.default}
              alt='logo_img'
            />
          </LogoDesktop>
        )}
        <Slogan>
          Baking Bunny is specialized in flower cakes, custom designed cakes,
          and dacquoise in birthdays, showers, and every other occasion in
          Calgary, Alberta{' '}
        </Slogan>
        <CakeBtn to={'/category/cakes'}>Cake</CakeBtn>
        <DacquoiseBtn to={'/category/dacquoises'}>Dacquoise</DacquoiseBtn>
      </Card>
    </Container>
  );
};
