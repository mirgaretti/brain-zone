import React from 'react';
import { Greeting, Advantages, Junior, Middle, Senior } from '../../components/home';

const HomePage = () => {
  return (
    <>
      <Greeting />
      <Advantages />
      <Junior />
      <Middle />
      <Senior />
    </>
  );
}


export default HomePage;