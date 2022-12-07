import { createSlice } from "@reduxjs/toolkit";


export interface ILoader {
    visible: boolean;
}

const initialState: ILoader = {
    visible: false
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        toggleGlobalLoader: (state, { payload }) => {
            state.visible = payload;
        }
    }
})

export const { toggleGlobalLoader } = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;