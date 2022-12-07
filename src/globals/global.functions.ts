import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ITheme} from '@theme';
import {HeaderBackButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';

interface IArgs extends ITheme {
  title?: string;
  headerLeft?: (props: HeaderBackButtonProps) => React.ReactNode;
}
export function getHeaderOptions(args: IArgs): NativeStackNavigationOptions {
  const {title, theme, headerLeft} = args;
  return {
    headerLeft,
    headerStyle: {
      backgroundColor: "#272727",
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: "#ffffff",
    },
    headerTitle: title,
  };
}

export const getFormData = (object: Record<string, any>) =>
  Object.keys(object).reduce((formData, key) => {
    const value = typeof object[key] !== 'string' ? `${object[key]}` : object[key];
    formData.append(key, value);
    return formData;
  }, new FormData());
