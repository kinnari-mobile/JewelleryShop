/**
 * @format
 */
import styled from 'styled-components/native';
import {ITheme} from '@theme';

export const Container = styled.View<ITheme>`
  flex-direction: row;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<ITheme>`
  font-size: 20px;
`;
