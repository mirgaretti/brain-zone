import React from 'react';
import { FooterContainer, TextContainer, FooterText, FooterIconsContainer, FooterIcon } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <FooterText>Контакты</FooterText>
          <br />
        <FooterText>Адрес</FooterText>
      </TextContainer>
      <FooterIconsContainer>
        <FooterIcon src="/media/inst.svg" />
        <FooterIcon src="/media/geo.svg" />
        <FooterIcon src="/media/plane.svg" />
        <FooterIcon src="/media/phone.svg" />
      </FooterIconsContainer>
      <TextContainer>
        <FooterText>&#169;CopyRight</FooterText>
          <br />
        <FooterText>2020-2023</FooterText>
      </TextContainer>
    </FooterContainer>  
  );
};

export default Footer;