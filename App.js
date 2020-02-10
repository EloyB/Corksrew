import React, { useEffect } from 'react';

import Navigator from './navigation/tabnav';

import * as Font from 'expo-font';

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      MontserratBold: require('./assets/fonts/Montserrat-SemiBold.ttf')
    });
  });
  return <Navigator />;
}
