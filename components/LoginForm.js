import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CustomInputField from './CustomInputField';
import PrimaryButton from './buttons/PrimaryButton';

import { loginWithEmail } from '../firebase/Authentication';

require('firebase/auth');
require('firebase/firestore');

const LoginForm = ({ params }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={{ alignItems: 'center' }}>
      <CustomInputField
        inputTitle={'Email'}
        width={'90%'}
        onChangeText={email => setEmail(email)}
      />
      <CustomInputField
        inputTitle={'Password'}
        width={'90%'}
        onChangeText={password => setPassword(password)}
        secure={true}
      />
      <View style={{ marginVertical: 20 }}>
        <PrimaryButton
          buttonText={'Login'}
          backgroundColor={'#c06262'}
          textColor={'white'}
          onPress={() => loginWithEmail(email, password)}
        />
      </View>
    </View>
  );
};

export default LoginForm;
