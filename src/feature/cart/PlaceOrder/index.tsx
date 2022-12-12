import React from 'react';
import {Container,
  TopContainer,
  ListContainer,
  ProductFlatList,
  FirstContainer,
  ImageContainer,
  SecondContainer,
  ProductTitle,
  DetailsTitle,
  SubTitle,
  OfferTitle,
  RowContainer,
  DrawHorizontalContainer,
  ProductDetailsTitle,
  LightHorizontalContainer,
  PriceLabelTitle,
  PriceNumberTitle,
DiscountTitle,
SaveMessageTitle,
CartButtonTitle,
ButtonHorizontalContainer,
PlaceOrderButton,
ButtonTitle,
BottomButtonContainer,
TotalTitle,
BottomContainer
} from './styles';

interface IProps {}

function PlaceOrder(props: IProps) {
  const tempArray = [
    {
    id:1,
    name:"Anklet"
   },
   {
   id:2,
   name:"Anklet"
  },
  ]
  const renderItem = ({ item,index }) => {
    return (
      <ListContainer>
      <RowContainer>
      <FirstContainer>
      <ImageContainer/>
      </FirstContainer>
      <SecondContainer>
      <RowContainer>
        <ProductTitle>Anklet</ProductTitle>
        <DetailsTitle>(Silver)</DetailsTitle>
      </RowContainer>
      <RowContainer>
        <SubTitle>1998   ₹1300</SubTitle>
        <OfferTitle>40% off</OfferTitle>
      </RowContainer>
      <SubTitle>Total : Rs. 1300</SubTitle>
      </SecondContainer>
      </RowContainer>
      </ListContainer>
    );
  };
  return <Container>
  <TopContainer>
  <ProductFlatList
        data={tempArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={tempArray}/>
  <ProductDetailsTitle>Price Details</ProductDetailsTitle>
  <LightHorizontalContainer/>
  <RowContainer>
  <PriceLabelTitle>Price</PriceLabelTitle>
  <PriceLabelTitle>(1 item)</PriceLabelTitle>
  <PriceNumberTitle>₹ 1998</PriceNumberTitle>
  </RowContainer>
  <RowContainer>
  <PriceLabelTitle>Discount</PriceLabelTitle>
  <DiscountTitle>₹ 698</DiscountTitle>
  </RowContainer>
  <LightHorizontalContainer/>
  <RowContainer>
  <PriceLabelTitle>Total Amount</PriceLabelTitle>
  <PriceNumberTitle>₹ 1300</PriceNumberTitle>
  </RowContainer>
  <LightHorizontalContainer/>
  <SaveMessageTitle>You will save 698 on this order</SaveMessageTitle>
  <LightHorizontalContainer/>
  </TopContainer>
  <BottomContainer>
  <ButtonHorizontalContainer/>
  <RowContainer>
    <BottomButtonContainer>
    <TotalTitle>Total 1300</TotalTitle>
    </BottomButtonContainer>
    <BottomButtonContainer>
    <PlaceOrderButton>
    <ButtonTitle>Buy Now</ButtonTitle>
    </PlaceOrderButton>
    </BottomButtonContainer>
  </RowContainer>
  </BottomContainer>

  </Container>;
}

export {PlaceOrder};
