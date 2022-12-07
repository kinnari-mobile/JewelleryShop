/**
 * @format
 */
import {ILoginUser} from '@common';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useAuth} from '../useAuth';

const schema = Yup.object().shape({
  phone: Yup.string().required('phone is required'),
  // .email('please enter valid email'),
  // .matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string().required('Password is required'),
});

const initialValues: ILoginUser = {
  phone: '0987654321',
  password: '1234',
  remember: true,
};

interface IParams {
  onSuccess: () => void;
}

export const useLogin = (props: IParams) => {
  const {onSuccess} = props;
  const {tryLogin} = useAuth();

  const formik = useFormik<ILoginUser>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values, {resetForm}) => {
      console.log('here');

      const callback = () => {
        resetForm?.();
        onSuccess?.();
      };
      callback();
      // const params = { ...values, callback };
      tryLogin(initialValues);
    },
  });
  return {
    formik,
    onLogin: formik.handleSubmit,
  };
};
