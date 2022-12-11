import React from 'react';
import {AddressContainer,UserNameTitle,AddressTitle,ChangeAddressButton,ButtonTitle} from './styles';

interface IProps {}

function Address(props: IProps) {
  return <AddressContainer>
    <UserNameTitle>Max Jonsh</UserNameTitle>
    <AddressTitle>9/26 Kumar Fun And Shop, 2Nd Floor,</AddressTitle>
    <AddressTitle>Doctor Baba Saheb Ambedkar Road,</AddressTitle>
    <AddressTitle>Doctor East,Dadar,Mumbai,Maharashtra</AddressTitle>
    <AddressTitle>Pincode : 400014</AddressTitle>
    <AddressTitle>0123456789</AddressTitle>
    <ChangeAddressButton>
      <ButtonTitle>Change Address</ButtonTitle>
    </ChangeAddressButton>
  </AddressContainer>;
}

export {Address};
