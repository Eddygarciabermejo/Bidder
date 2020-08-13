import React from 'react';
import {Provider, DefaultTheme} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#59709F',
  },
};

export const Theme = ({children}) => {
  return <Provider theme={theme}>{children}</Provider>;
};
