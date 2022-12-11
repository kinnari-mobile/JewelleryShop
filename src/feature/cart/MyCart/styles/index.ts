import styled from 'styled-components/native';
import {ITheme} from '@theme';

//Main Screen Bottom View
export const Container = styled.View<ITheme>`
  backgroundColor: ${({theme}) => theme.colors.white};
  paddingTop:26px;

`;
export const AddressContainer = styled.View<ITheme>`
backgroundColor: ${({theme}) => theme.colors.white};
paddingLeft:20px;
paddingRight:20px;
`;

export const UserNameTitle = styled.Text<ITheme>`
  marginBottom:5px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[4]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
`;
export const AddressTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  color: ${({theme}) => theme.colors.primary};
`;
export const ChangeAddressButton = styled.TouchableOpacity<ITheme>`
  marginBottom:10px;
  marginTop:20px;
  justifyContent: center;
  borderRadius: 10px;
  backgroundColor: ${({theme}) => theme.colors.primary};
  height:42px;
  marginRight:80px;
  marginLeft:80px;
`;
export const ButtonTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  text-align: center;
`;
export const DrawHorizontalContainer = styled.View<ITheme>`
  borderBottomColor: ${({theme}) => theme.colors.bottomBorder};;
  borderBottomWidth: 2px;
  marginLeft:20px;
  marginRight:20px;
`;
//CartItems
export const CartContainer = styled.View<ITheme>`
backgroundColor: ${({theme}) => theme.colors.white};
  marginTop:20px;

`;
export const RowContainer = styled.View<ITheme>`
  flexDirection: row;

`;
export const LeftContainer = styled.View<ITheme>`
  flex:0.75;
  marginBottom:20px;
  paddingLeft:20px;
  paddingRight:20px;
`;
export const RightContainer = styled.View<ITheme>`
  flex:0.25;
  marginBottom:20px;
  paddingLeft:20px;
  paddingRight:20px;
`;
export const ImageContainer = styled.View<ITheme>`
  backgroundColor:${({theme}) => theme.colors.primary};
  borderRadius:10px;
  width:90px;
  height:90px;
`;
export const ProductTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[4]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 800;
`;
export const DetailsTitle = styled.Text<ITheme>`
  marginLeft:20px;
  paddingTop:5px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  color: ${({theme}) => theme.colors.grey};
`;
export const SubTitle = styled.Text<ITheme>`
  marginTop:8px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 800;
`;
export const OfferTitle = styled.Text<ITheme>`
  marginLeft:80px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.purpul};
  font-weight: 800;
`;
export const CircleButton = styled.TouchableOpacity<ITheme>`
  marginTop:10px;
  height: 22px;
  width: 22px;
  borderRadius: 22px;
  borderColor: ${({theme}) => theme.colors.lightBlack};
  borderWidth: 2px;
  justifyContent:center;
`;
export const CounterTitle = styled.Text<ITheme>`
  marginTop:10px;
  flex:1;
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.primary};
  textAlign:center
`;
export const CircleTitle = styled.Text<ITheme>`
  flex:1;
  font-size: ${({theme}) => theme.fontSizes[1]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 800;
  text-align: center;
`;
export const ButtonDivideContainer = styled.View<ITheme>`
  flex:0.5;
  alignItems:center;
  justifyContent:center;
  marginTop:5px;
  marginBottom:5px;

`;
export const DrawVerticalContainer = styled.View<ITheme>`
  borderLeftColor: ${({theme}) => theme.colors.bottomBorder};;
  borderLeftWidth: 2px;
`;
export const CartButtonTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  color: ${({theme}) => theme.colors.primary};
  marginLeft:5px;
  font-weight: 800;
`;
export const ProductDetailsTitle = styled.Text<ITheme>`
  marginTop:15px;
  marginBottom:10px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.primary};
  marginLeft:5px;
  font-weight: 800;
  marginLeft:20px;
`;
export const LightHorizontalContainer = styled.View<ITheme>`
  borderBottomColor: ${({theme}) => theme.colors.bottomBorder};;
  borderBottomWidth: 1px;
  marginLeft:20px;
  marginRight:20px;
`;
export const PriceLabelTitle = styled.Text<ITheme>`
  marginTop:5px;
  marginBottom:5px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[1]}px;
  color: ${({theme}) => theme.colors.lightBlack};
  marginLeft:5px;
  font-weight: 800;
  marginLeft:20px;
`;
export const PriceNumberTitle = styled.Text<ITheme>`
  flex:1;
  marginRight:20px;
  marginTop:5px;
  marginBottom:5px;
  textAlign: right;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[1]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 800;
`;
export const DiscountTitle = styled.Text<ITheme>`
  flex:1;
  marginTop:5px;
  marginBottom:5px;
  textAlign: right;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[1]}px;
  color: ${({theme}) => theme.colors.purpul};
  font-weight: 800;
  marginRight:20px;

`;
export const SaveMessageTitle = styled.Text<ITheme>`
  marginTop:10px;
  marginBottom:10px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[1]}px;
  color: ${({theme}) => theme.colors.purpul};
  font-weight: 800;
  marginLeft: 20px;
`;
export const ButtonHorizontalContainer = styled.View<ITheme>`
marginTop:50px;
  borderBottomColor: ${({theme}) => theme.colors.bottomBorder};;
  borderBottomWidth: 2px;

`;
