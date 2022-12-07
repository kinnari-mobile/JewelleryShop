import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "@store/store";
import getObject from "lodash.get";

export interface IToastState {
    showToast: boolean;
    message: string;
    animation: "top" | "bottom";
    type: "success" | "error" | "info";
    hideIncomingToasts?: boolean
}

const initialState: IToastState = {
    showToast: false,
    message: "",
    animation: "top",
    type: "success",
    hideIncomingToasts: false
};

const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        toggleToast: (state, { payload }) => {
            const hideIncomingToasts = getObject(
                state,
                "toast.hideIncomingToasts",
                false
            );
            const show = !hideIncomingToasts && payload.hideIncomingToasts !== false;
            if (show) {
                state.showToast = payload.showToast;
                state.message = payload.message || state.message;
                state.animation = payload.animation || state.animation;
                state.type = payload.type || state.type;
            }
        },
        resetHiddenIncomingToasts: (state) => {
            state.hideIncomingToasts = false;
        },
    },
});

export const showToastDelayed = (
    message: string,
    type: string = "error",
    delay: number = 500
) => {
    return (dispatch: AppDispatch) => {
        const tm = setTimeout(() => {
            const params = { type, showToast: true, message: message };
            dispatch(toggleToast(params));
            clearTimeout(tm);
        }, delay);
    };
};

export const toastSuccess = (message: string) => {
    return (dispatch: AppDispatch) =>
        dispatch(showToastDelayed(message, "success"));
};

export const toastError = (message: string) => {
    return (dispatch: AppDispatch) =>
        dispatch(showToastDelayed(message, "error"));
};

export const toastInfo = (message: string) => {
    return (dispatch: AppDispatch) => dispatch(showToastDelayed(message, "info"));
};

export const { toggleToast, resetHiddenIncomingToasts } = toastSlice.actions;

const toastReducer = toastSlice.reducer;
export { toastReducer };