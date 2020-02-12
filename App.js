import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Navigator from './navigation/tabnav';

import * as Font from 'expo-font';

export default function App() {
  useEffect(() => {
    StatusBar.setHidden(true);

    Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      MontserratBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
      MontserratThin: require('./assets/fonts/Montserrat-Thin.ttf')
    });
  });
  return <Navigator />;
}
