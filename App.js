//IMPORT RN & EXPO STUFF
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';

//IMPORT COMPONENTS
import Navigator from './navigation/tabnav';
import StartScreen from './screens/StartScreen';

//INITIALIZE: firebase
import firebase from 'firebase/app';
import firebaseConfig from './firebase/config';
require('firebase/auth');

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//RESOLVE: Can't find variable: atob
import { decode, encode } from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  //     MontserratBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  //     MontserratThin: require('./assets/fonts/Montserrat-Thin.ttf')
  //   });
  // };

  useEffect(async () => {
    StatusBar.setHidden(true);

    await Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      MontserratBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
      MontserratThin: require('./assets/fonts/Montserrat-Thin.ttf')
    });

    firebase.auth().onAuthStateChanged(user => {
      user ? setLoggedIn(true) : setLoggedIn(false);
    });
  });

  return loggedIn ? <Navigator /> : <StartScreen />;
}
