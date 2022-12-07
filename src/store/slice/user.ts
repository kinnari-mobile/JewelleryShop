import {cancelRequests, post, routes} from '@api';
import {ILoginParams, IUser} from '@common';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {addUserToStorage} from '@storage';
import {RootState} from '@store/reducers';
import {AppDispatch} from '@store/store';
import {toggleGlobalLoader} from './loader';
import {toastError, toastSuccess} from './toast';

export const initialUserState: IUser = {
  isLoggedIn: false,
  user: {
    access: '',
    refresh: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, {payload}) => {
      state.isLoggedIn = true;
      state.user = payload;
      return state;
    },
    logOut: state => {
      state = initialUserState;
      return state;
    },
  },
});

export const {setUser, logOut} = userSlice.actions;
export const userReducer = userSlice.reducer;

export const loginUser = createAsyncThunk<
  void,
  ILoginParams,
  {
    state: RootState;
    dispatch: AppDispatch;
  }
>('user/login', (info, thunk) => {
  const {dispatch} = thunk;
  const {callback, remember, ...params} = info;


  dispatch(toggleGlobalLoader(true));

  cancelRequests('loginUser');
  post({
    url: routes.login,
    params,
    cancelKey: 'loginUser',
  }).then(res => {
    dispatch(toggleGlobalLoader(false));
    const {status, data, cancel} = res;
    if (cancel) {
      return;
    }

    if (status) {
      dispatch(toastSuccess('Login success!'));
      dispatch(setUser(data));
      if (remember) {
        addUserToStorage(data);
      }
    } else {
      const message = data?.Error ?? 'Something want wrong!';
      dispatch(toastError(message));
    }
  });
});
