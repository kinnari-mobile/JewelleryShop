import { ITheme } from "@theme";
import styled from "styled-components/native";

export const Container = styled.View<ITheme>`
    height: 50px;
    width: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Indicator = styled.ActivityIndicator``;