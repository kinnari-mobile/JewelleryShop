import { ITheme } from "@theme";
import styled from "styled-components/native";

interface ItoastStyled extends ITheme {
  animation?: "top" | "bottom";
  type?: "success" | "error" | "info" | "warning";
}

const getBackgroundColor = (props: ItoastStyled) => {
  const { theme, type } = props;

  switch (type) {
    case "success":
      return theme.colors.success;
    case "error":
      return theme.colors.danger;
    case "info":
      return theme.colors.info;
    case "warning":
      return theme.colors.warning;
    default:
      return theme.colors.success;
  }
};

export const ToastContainer = styled.View<ItoastStyled>`
  background-color: transparent;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Spacer = styled.View<ItoastStyled>`
  background-color: transparent;
  padding: 60px ${(props) => props.theme.spacer[1]}px 0;
`;

export const IconContainer = styled.View<ItoastStyled>`
  margin-right: ${(props) => props.theme.spacer[2]}px;
`;

export const AnimatedView = styled.View<ItoastStyled>`
  background-color: ${(props) => getBackgroundColor(props)};
  flex-direction: row;
  position: relative;
  ${(props) => props.animation === "top" && "top: 0px;"}
  justify-content: center;
  ${(props) => props.animation !== "top" && "bottom: 0px;"}
  width: 100%;
  align-items: center;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  elevation: 4;
`;

export const Text = styled.Text<ItoastStyled>`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes[2]}px;
  font-family: ${(props) => props.theme.fonts.medium};
  font-weight: 500;
  text-align: center;
  width: 80%;
`;