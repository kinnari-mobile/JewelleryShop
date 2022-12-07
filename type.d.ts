declare module '*.svg' {
  import * as React from 'react';

  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';

  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  import { ImageSourcePropType } from 'react-native';

  const value: ImageSourcePropType;
  export default value;
}

declare module 'react-native-material-dropdown'
declare module 'react-native-material-textfield'
