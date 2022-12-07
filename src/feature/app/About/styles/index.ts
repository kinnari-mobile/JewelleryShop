import styled from 'styled-components/native';
import {ITheme} from '@theme';
import {FlatList} from 'react-native';
import {IAddCategoryFields} from '@common';

//Main Screen Bottom View
export const Container = styled.View<ITheme>`
backgroundColor: ${({theme}) => theme.colors.white};
 flex:1;
`;
export const BottomContainer = styled.View<ITheme>`
  flexDirection: row;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
export const QRGenerateTouchable = styled.TouchableOpacity<ITheme>`
  justifyContent: center;
  alignItems: center;
  borderRadius: 15px;
  backgroundColor: ${({theme}) => theme.colors.primary};
  flex:0.9;
  height:50px;
  marginRight:40px;
  marginLeft:30px;
`;
export const QRTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[4]}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  text-align: center;
`;
export const AddQRTouchable = styled.TouchableOpacity<ITheme>`
  width: 55px;
  height: 55px;
  justifyContent: center;
  alignItems: center;
  borderRadius: 100px;
  backgroundColor: ${({theme}) => theme.colors.primary};
`;
//Product List View
export const SecondContainer = styled.View<ITheme>`
 flex:1;
`;
export const ProductListContainer = styled.View<ITheme>`
flex:0.9;
  backgroundColor: ${({theme}) => theme.colors.white};
  marginTop: 20px;
`;

export const ItemContainer = styled.TouchableHighlight<ITheme>`
  flex:1;
  marginLeft: 15px;
  marginRight: 15px;
  shadowColor: ${({theme}) => theme.colors.white};
  shadowOffset: { width: 0, height: 2 };
  shadowRadius: 6px;
  shadowOpacity: 0.26;
  elevation: 8;
  backgroundColor: ${({theme}) => theme.colors.whitesmoke};
  borderRadius:10px;
  borderWidth: 2px;
  borderColor: ${({theme}) => theme.colors.whiteborder};
`;
export const ImageContainer = styled.View<ITheme>`
  marginLeft:8px;
  marginTop:20px;
  marginBottom:15px;
  backgroundColor:${({theme}) => theme.colors.primary};
  borderRadius:10px;
  width:75px;
  height:75px;
  alignItems:center;
  justifyContent:center;
`;
export const RowContainer = styled.View<ITheme>`
  flexDirection: row;
`;
export const ItemMainContainer = styled.View<ITheme>`
  flex:0.8;
   marginLeft:20px;
   marginTop:15px;
   marginBottom:10px;
`;
export const ItemBottomContainer = styled.View<ITheme>`
    padding: 10px;
    borderTopWidth:2px;
    borderRightWidth:0px;
    borderBottomWidth:0px;
    borderLeftWidth:0px;
    borderColor:${({theme}) => theme.colors.bottomBorder};
    alignItems: flex-end;
`;
export const ProductTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[4]}px;
  color: ${({theme}) => theme.colors.golden};
  font-weight: 500;
`;
export const CategoryTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  color: ${({theme}) => theme.colors.lightBlack};
  font-weight: 500;
`;
export const SubCategoryTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSizes[1]}px;
  color: ${({theme}) => theme.colors.lightBlack};
`;
export const ProductFlatList = styled(FlatList as new () => FlatList<IAddCategoryFields>)`
flex:0.95;
`;
export const NumberInput = styled.TextInput<ITheme>`
  font-size: 18px;
  width:80px;
  marginLeft:10px;
  padding: 0px;
  border: solid black;
  border-color: ${({theme}) => theme.colors.bottomBorder};
  color: ${({theme}) => theme.colors.lightBlack};
  borderBottomWidth: 2px;
  borderTopWidth: 0px;
  borderLeftWidth: 0px;
  borderRightWidth: 0px;
`;
//Delete Item View
export const ModalContainer = styled.View<ITheme>`
    height: 22%;
    width: 98%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
`;
export const DeleteItemConformationTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
`;

export const DeleteTouchable = styled.TouchableOpacity<ITheme>`
  flex:0.4;
  marginTop:20px;
  backgroundColor:#E22B3B;
  borderRadius:10px;
  padding:14px;
`;
export const CancelTouchable= styled.TouchableOpacity<ITheme>`
  flex:0.4;
  padding:14px;
  marginTop:20px;
`;

export const DeleteTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  textAlign: center;
`;
export const CancelTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
  textAlign: center;
`;
//Sarch ModalContainer
export const SearchContainer = styled.View<ITheme>`
height: 85%;
width: 100%;
background-color: ${({ theme }) => theme.colors.white};
`;
export const SelectedContainer = styled.TouchableOpacity<ITheme>`
flex:0.1;
justifyContent: center;
alignItems: center;
`;

export const InputContainer = styled.TextInput<ITheme>`
  margin:20px;
  color: ${({theme}) => theme.colors.lightBlack};
  font-size: 20px;
  padding-left: 5px;
  border: solid black;
  border-color: ${({theme}) => theme.colors.whiteborder};
  borderWidth: 2px;
  borderRadius: 10px;
`;
export const SearchButton = styled.TouchableOpacity<ITheme>`
  marginBottom:10px;
  marginTop:10px;
  justifyContent: center;
  borderRadius: 15px;
  backgroundColor: ${({theme}) => theme.colors.primary};
  height:50px;
  marginRight:30px;
  marginLeft:30px;
`;

export const SearchItemMainContainer = styled.View<ITheme>`
  flex:0.8;
   marginLeft:10px;
   marginTop:15px;
   marginBottom:10px;
`;

export const BlankMessageContainer = styled.View<ITheme>`
    flex:1;
    alignItems: center;
    justifyContent: center;
`;

export const BlankMessageTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSizes[4]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
  textAlign: center;
`;
