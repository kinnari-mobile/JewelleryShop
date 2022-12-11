import React from 'react';
import {CartContainer,
  RowContainer,
  LeftContainer,
  RightContainer,
  ProductTitle,
  SubTitle,
  ImageContainer,
 DetailsTitle,
 OfferTitle,
CircleButton,
CircleTitle,CounterTitle,
ButtonDivideContainer,
DrawVerticalContainer,
DrawHorizontalContainer,ProductDetailsTitle,LightHorizontalContainer,PriceLabelTitle,PriceNumberTitle,
DiscountTitle,SaveMessageTitle,
CartButtonTitle,
ButtonHorizontalContainer} from './styles';
import {DeleteIcon} from '@icons';
import {OrdersIcon} from '@icons';
import {useTheme} from '@theme';


interface IProps {}

function CartProducts(props: IProps) {
  const {t} = useTheme();

  return <CartContainer>
          <RowContainer>
            <LeftContainer>
              <RowContainer>
                <ProductTitle>Anklet</ProductTitle>
                <DetailsTitle>(Silver)</DetailsTitle>
              </RowContainer>
              <RowContainer>
                <SubTitle>1998   ₹1300</SubTitle>
                <OfferTitle>40% off</OfferTitle>
              </RowContainer>
              <SubTitle>1-Box / 1-Dozen</SubTitle>
              <SubTitle>Total : Rs. 1300</SubTitle>
            </LeftContainer>
          <RightContainer>
            <ImageContainer/>
            <RowContainer>
              <CircleButton><CircleTitle>-</CircleTitle></CircleButton>
              <CounterTitle>1</CounterTitle>
              <CircleButton><CircleTitle>+</CircleTitle></CircleButton>
            </RowContainer>
          </RightContainer>
          </RowContainer>
          <DrawHorizontalContainer/>
          <RowContainer>
            <ButtonDivideContainer>
            <RowContainer>
             <DeleteIcon height = {20} width = {20} color={t.colors.primary}/>
             <CartButtonTitle>Remove</CartButtonTitle>
             </RowContainer>
            </ButtonDivideContainer>
            <DrawVerticalContainer/>
            <ButtonDivideContainer>
            <RowContainer>
             <OrdersIcon height = {20} width = {20} color={t.colors.primary}/>
             <CartButtonTitle>Buy This Now</CartButtonTitle>
             </RowContainer>
            </ButtonDivideContainer>
          </RowContainer>
          <DrawHorizontalContainer/>
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

          <ButtonHorizontalContainer/>
          <RowContainer>
            <ButtonDivideContainer>
            <CartButtonTitle>Buy This Now</CartButtonTitle>

            </ButtonDivideContainer>
            <ButtonDivideContainer>
            <RowContainer>
             <CartButtonTitle>Buy This Now</CartButtonTitle>
             </RowContainer>
            </ButtonDivideContainer>
          </RowContainer>


  </CartContainer>;
}

export {CartProducts};
