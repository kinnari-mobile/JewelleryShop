/**
 * @format
 */
import styled from 'styled-components/native';
import {ITheme} from '@theme';
import {Button} from '@components';
import {screenWidth} from '@globals';

export const Container = styled.View<ITheme>`
  flex: 1;
  padding-left: ${({theme}) => theme.spacer[3]}px;
  padding-right: ${({theme}) => theme.spacer[3]}px;
`;

export const Title = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[7]}px;
  color: ${({theme}) => theme.colors.black};
  font-weight: 500;
  text-align: center;
`;

export const SubTitle = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.black};
  font-weight: 500;
  text-align: center;
`;

export const HStack = styled.View<ITheme>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RememberMeContainer = styled.View<ITheme>`
  flex-direction: row;
  align-items: center;
`;

export const RememberMeText = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.black};
  font-weight: 500;
  line-height: 35px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const ForgotPasswordText = styled.Text<ITheme>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.black};
  font-weight: 500;
  line-height: 35px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const LoginButton = styled(Button)<ITheme>`
  padding-top: 3px;
  padding-bottom: 3px;
  align-self: center;
  width: ${screenWidth * 0.7}px;
  align-items: center;
  border-radius: 10px;
  box-shadow: -6px -6px 7px #ffffff;
  box-shadow: 6px 6px 7px rgba(86, 101, 223, 0.25);
`;

export const SignUpInstruction = styled.Text<ITheme & {color?: string}>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme, color}) => color || theme.colors.black};
  font-weight: 500;
  line-height: 35px;
  text-align: center;
`;
