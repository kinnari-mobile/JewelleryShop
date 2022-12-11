import React from 'react';
import {Container,DrawHorizontalContainer} from './styles';
import {Address} from './Address';
import {CartProducts} from './CartProducts';
import { ScrollView } from 'react-native';


interface IProps {}

function MyCart(props: IProps) {

  return <ScrollView>
  <Container>
    <Address/>
    <DrawHorizontalContainer />
    <CartProducts/>
    </Container>
  </ScrollView>;
}

export {MyCart};
