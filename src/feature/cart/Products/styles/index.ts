import styled from 'styled-components/native';
import {ITheme} from '@theme';
import {FlatList} from 'react-native';
import {IAddCategoryFields} from '@common';

//Main Screen Bottom View
export const Container = styled.View<ITheme>`
backgroundColor: ${({theme}) => theme.colors.white};
 flex:1;
`;

export const QRTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[4]}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
  text-align: center;
`;
