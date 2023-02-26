import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { LayoutContainer, Main } from './styled';

const Layout = (props) => {
  const { children } = props;

  return (
    <LayoutContainer>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;