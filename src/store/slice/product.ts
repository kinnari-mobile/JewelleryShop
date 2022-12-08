import { createSlice } from "@reduxjs/toolkit";
import {cancelRequests, post, routes,get} from '@api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '@store/reducers';
import {AppDispatch} from '@store/store';
import {toggleGlobalLoader} from './loader';

const productSlice = createSlice({
    name: 'product',
    initialState:[],
    reducers: {
        getProduct: (state, { payload }) => {
            state = payload.results.map(el => ({
              ...el,
                no_of_qr: 0
            }))
            return state;
        },
        deleteProduct: (state, { payload }) => {
            console.log("Delete Items.");
            return state;
        },
        updateNoOfQRInItem: (state, { payload }) => {
            const { value,selectedIndex } = payload
            state[selectedIndex].no_of_qr =  value
            return state;
        },
    }
})
//Product Action and Reducer
export const { getProduct,deleteProduct,updateNoOfQRInItem } = productSlice.actions;
export const productReducer = productSlice.reducer;

//Delete Modal Component
export interface IDeleteModal {
    visible: boolean;
}

const initialDeleteState: IDeleteModal = {
    visible: false
}

const deleteModalSlice = createSlice({
    name: 'deletemodel',
    initialState:initialDeleteState,
    reducers: {
        toggleDeleteModal: (state, { payload }) => {
            state.visible = payload;
        }
    }
})
export const { toggleDeleteModal } = deleteModalSlice.actions;
export const deleteModalReducer = deleteModalSlice.reducer;

//Search Modal Component
export interface ISearchModal {
    visible: boolean;
}

const initialSearchState: ISearchModal = {
    visible: false
}

const searchModalSlice = createSlice({
    name: 'searchmodal',
    initialState:initialSearchState,
    reducers: {
        toggleSearchModal: (state, { payload }) => {
            state.visible = payload;
        }
    }
})
export const { toggleSearchModal } = searchModalSlice.actions;
export const searchModalReducer = searchModalSlice.reducer;

//Api Call for Get Products List
export const getProductDetails = createAsyncThunk(
  'user/getProductDetails',
  async (arg, { dispatch,getState, rejectWithValue }) => {
    try {

      //console.log("arg==",arg);

      dispatch(toggleGlobalLoader(true));

      cancelRequests('getProductDetails');
      get({
        url: routes.products,
        cancelKey: `getProductDetails`,
        headers : {Authorization: `Bearer ${arg}`},
      }).then(res => {
        dispatch(toggleGlobalLoader(false));
        const {status, data, cancel} = res;

        if (cancel) {
          return;
        }
        if (status) {
          dispatch(getProduct(data));
        }
        else {
          const message = data?.Error ?? 'Something want wrong!';
          dispatch(toastError(message));
        }
      });
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

const searchSlice = createSlice({
    name: 'search',
    initialState:[],
    reducers: {
        searchProductList: (state, { payload }) => {

          if (payload.results != null) {
            state = payload.results.map(el => ({
              ...el,
                isSelected: false
            }))
          }else{
            state = payload;
          }

            return state;
        },
        updateSelectedProduct: (state,  { payload }) => {
          const { selectedItem,selectedIndex } = payload
          state[selectedIndex].isSelected =  selectedItem
          // const newItem = state[selectedIndex];
          // state.searchArray = newItem;
          return state;
        }
    }
})
export const { searchProductList,updateSelectedProduct} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

//Search Modal Component
export interface IAddSearch {
    results: [];
}

const initialAddState: IAddSearch = {
    results: []
}

// const addSearchSlice = createSlice({
//     name: 'addsearch',
//     initialState:initialAddState,
//     reducers: {
//         addSelectedItems: (state,  { payload }) => {
//           state = payload;
//           console.log("state.results==>befor",state.results.length);
//
//           var tempArray = [];
//           for (let index = 0; index < state.results.length; index++) {
//             if (state.results[index].isSelected) {
//               tempArray.push(state.results[index]);
//             }
//           }
//           state.results = tempArray;
//           console.log("state.results==>After",state.results.length);
//           return state;
//
//         },
//     }
// })
// export const { addSelectedItems} = addSearchSlice.actions;
// export const addSearchReducer = addSearchSlice.reducer;

// export const updateAndThenGet = (resultsJson) => async (dispatch) => {
//   console.log("======");
//
//   //await dispatch(addSelectedItems(resultsValue));
//   return dispatch(getProduct(resultsJson));
// }

//Toggle Button Component
export interface IButtonTitle {
    title: string;
}

const initialButtonState: IButtonTitle = {
    title: "Search"
}

const buttonToggleSlice = createSlice({
    name: 'button',
    initialState:initialButtonState,
    reducers: {
        setButtonTitle: (state, { payload }) => {
            state.title = payload;
        }
    }
})
export const { setButtonTitle } = buttonToggleSlice.actions;
export const buttonToggleReducer = buttonToggleSlice.reducer;
//Api Call for Search Products List
export const searchProduct = createAsyncThunk
(
  'product/search',
  async (arg, { dispatch,getState, rejectWithValue }) => {
    try {
      const { token,value } = arg;
      dispatch(toggleGlobalLoader(true));
      get({
        url: routes.products+`?search= ${arg}`,
        cancelKey: `searchProduct`,
        headers : {Authorization: `Bearer ${token}`},
      }).then(res => {
        dispatch(toggleGlobalLoader(false));
        const {status, data, cancel} = res;
        if (cancel) {
          return;
        }
        if (status) {
          dispatch(searchProductList(data));
          dispatch(setButtonTitle("Add"));
        }
        else {
          const message = data?.Error ?? 'Something want wrong!';
          dispatch(toastError(message));
        }
      });
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
