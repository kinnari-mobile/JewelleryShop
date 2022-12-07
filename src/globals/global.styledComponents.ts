/**
 * @format
 */
import styled from 'styled-components/native';
import {ITheme} from '@theme';

export interface IGlobal extends ITheme {
  color?: string;
  space?: number;
  marginIndex?: number;
}

export const SafeContainer = styled.SafeAreaView<IGlobal>`
  flex: 1;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
`;
export const Container = styled.View<IGlobal>`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const CenterContainer = styled.View<IGlobal>`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const Spacer = styled.View<IGlobal>`
  background-color: transparent;
  margin-top: ${props => props.space || props.theme.spacer[1]}px;
  margin-bottom: ${props => props.space || props.theme.spacer[1]}px;
`;

export const VSpacer = styled.View<IGlobal>`
  background-color: transparent;
  margin-left: ${props => props.space || props.theme.spacer[1]}px;
  margin-right: ${props => props.space || props.theme.spacer[1]}px;
`;

export const Touchable = styled.TouchableOpacity``;

export const VSeparator = styled.View<IGlobal>`
  width: 1px;
  height: 100%;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin-left: ${props =>
    props.marginIndex && props.marginIndex >= 0 ? props.theme.spacer[props?.marginIndex] : 0}px;
  margin-right: ${props =>
    props.marginIndex && props.marginIndex >= 0 ? props.theme.spacer[props?.marginIndex] : 0}px;
`;

export const HSeparator = styled.View<IGlobal>`
  height: 1px;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin-left: ${props =>
    props.marginIndex && props.marginIndex >= 0 ? props.theme.spacer[props.marginIndex] : 0}px;
  margin-right: ${props =>
    props.marginIndex && props.marginIndex >= 0 ? props.theme.spacer[props.marginIndex] : 0}px;
  margin-top: ${props =>
    props.marginIndex && props.marginIndex >= 0 ? props.theme.spacer[props.marginIndex] : 0}px;
  margin-bottom: ${props =>
    props.marginIndex && props.marginIndex >= 0 ? props.theme.spacer[props.marginIndex] : 0}px;
`;

export const UnreadIndicator = styled.View<IGlobal>`
  background-color: ${props => props.theme.colors.primary};
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-right: ${props => props.theme.spacer[0]}px;
`;

export const Divider = styled.View<ITheme & {width: number}>`
  width: ${({width}) => width || '335'}px;
  height: 0px;
  border: 1px solid #e8e8e8;
  align-self: center;
`;
