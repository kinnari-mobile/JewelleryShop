import React from 'react';
import {Container,QRTitle} from './styles';
import {Invoice} from './Invoice';



interface IProps {}

function Settings(props: IProps) {

  return <Container>
  <Invoice/>
  </Container>;
}

export {Settings};
