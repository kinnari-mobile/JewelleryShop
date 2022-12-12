import styled from 'styled-components/native';
import {ITheme} from '@theme';
import {FlatList} from 'react-native';
import {IAddCategoryFields} from '@common';
//Main Screen Bottom View
export const Container = styled.View<ITheme>`
backgroundColor: ${({theme}) => theme.colors.white};
flex:1;
`;
export const TopContainer = styled.View<ITheme>`
backgroundColor: ${({theme}) => theme.colors.white};
flex:1;
`;
export const ListContainer = styled.View<ITheme>`
backgroundColor: ${({theme}) => theme.colors.white};
marginTop:20px;
`;
export const ProductFlatList = styled(FlatList as new () => FlatList<IAddCategoryFields>)`
marginLeft:20px;
`;
export const FirstContainer = styled.View<ITheme>`
flex:0.25;
`;
export const SecondContainer = styled.View<ITheme>`
flex:0.75;
marginLeft:10px;
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
marginTop:5px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
`;
export const OfferTitle = styled.Text<ITheme>`
  marginLeft:80px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.purpul};
  font-weight: 800;
`;
export const RowContainer = styled.View<ITheme>`
  flexDirection: row;
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
export const BottomContainer = styled.View<ITheme>`


`;
export const ButtonHorizontalContainer = styled.View<ITheme>`
  marginTop:10px;
  borderBottomColor: ${({theme}) => theme.colors.bottomBorder};
  borderBottomWidth: 2px;

`;
export const BottomButtonContainer = styled.View<ITheme>`
flex:0.5;
justifyContent:center;

`;
export const PlaceOrderButton = styled.TouchableOpacity<ITheme>`
  marginBottom:10px;
  marginTop:10px;
  justifyContent: center;
  borderRadius: 10px;
  height:40px;
  marginRight:30px;
  marginLeft:10px;
  backgroundColor: ${({theme}) => theme.colors.primary};
`;
export const ButtonTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  text-align: center;
`;
export const TotalTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.primary};
  marginLeft:40px;
  font-weight: 800;
`;
