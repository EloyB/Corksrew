import React, { useState } from 'react';
import { Animated, View, Image, TouchableWithoutFeedback } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import PrimaryButton from '../components/buttons/PrimaryButton';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
const StartScreen = () => {
  const [fadeArrow] = useState(new Animated.Value(0));
  const [fadeButtons] = useState(new Animated.Value(1));
  const [bottomButton] = useState(new Animated.Value(250));

  const [fadeLoginForm] = useState(new Animated.Value(0));
  const [bottomLoginForm] = useState(new Animated.Value(-300));

  const [fadeSignUpForm] = useState(new Animated.Value(1));
  const [bottomSignUpForm] = useState(new Animated.Value(-500));

  const loginAnimate = () => {
    defaultAnimate();
    Animated.parallel([
      Animated.timing(fadeLoginForm, {
        toValue: 1,
        duration: 400
      }),
      Animated.timing(bottomLoginForm, {
        toValue: 200,
        duration: 600
      })
    ]).start();
  };

  const signUpAnimate = () => {
    defaultAnimate();
    Animated.parallel([
      Animated.timing(fadeSignUpForm, {
        toValue: 1,
        duration: 400
      }),
      Animated.timing(bottomSignUpForm, {
        toValue: 30,
        duration: 600
      })
    ]).start();
  };

  const defaultAnimate = () => {
    Animated.parallel([
      Animated.timing(fadeButtons, {
        toValue: 0,
        duration: 1000
      }),
      Animated.timing(fadeArrow, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(bottomButton, {
        toValue: -250,
        duration: 700
      })
    ]).start();
  };

  const backButtonAnimate = () => {
    Animated.parallel([
      Animated.timing(fadeButtons, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(fadeArrow, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(bottomButton, {
        toValue: 250,
        duration: 700
      }),
      Animated.timing(fadeLoginForm, {
        toValue: 0,
        duration: 400
      }),
      Animated.timing(bottomLoginForm, {
        toValue: -300,
        duration: 600
      }),
      Animated.timing(fadeSignUpForm, {
        toValue: 0,
        duration: 400
      }),
      Animated.timing(bottomSignUpForm, {
        toValue: -600,
        duration: 600
      })
    ]).start();
  };

  return (
    <View
      style={{
        backgroundColor: '#282d44',
        height: '100%',
        width: '100%',
        alignItems: 'center'
      }}
    >
      <Animated.View
        style={{ position: 'absolute', left: 20, top: 20, opacity: fadeArrow }}
      >
        <TouchableWithoutFeedback onPress={() => backButtonAnimate()}>
          <AntDesign name='arrowleft' color={'white'} size={32} />
        </TouchableWithoutFeedback>
      </Animated.View>

      <Image
        source={require('../assets/images/logo.png')}
        style={{ top: 70 }}
      />
      <Animated.View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: bottomLoginForm,
          opacity: fadeLoginForm
        }}
      >
        <LoginForm />
      </Animated.View>
      <Animated.View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: bottomSignUpForm,
          opacity: fadeSignUpForm
        }}
      >
        <SignUpForm />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          opacity: fadeButtons,
          bottom: bottomButton
        }}
      >
        <PrimaryButton
          buttonText={'Login'}
          backgroundColor={'white'}
          textColor={'#c06262'}
          onPress={() => loginAnimate()}
        />
        <PrimaryButton
          buttonText={'Sign Up'}
          backgroundColor={'white'}
          textColor={'#c06262'}
          onPress={() => signUpAnimate()}
        />
      </Animated.View>
    </View>
  );
};

export default StartScreen;
