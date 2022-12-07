import {ILoginParams} from '@common';
import {AppDispatch} from '@store/store';
import {loginUser} from '@store/slice';
import {useDispatch} from 'react-redux';

export function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const tryLogin = (params: ILoginParams) => {
    console.log('params: ', params);
    dispatch(loginUser(params));
  };

  return {
    tryLogin,
  };
}
