import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CustomInputField from './CustomInputField';
import PrimaryButton from './buttons/PrimaryButton';

import { signUpWithEmail } from '../firebase/Authentication';

const SignUpForm = ({ params }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  return (
    <View style={{ alignItems: 'center' }}>
      <CustomInputField
        inputTitle={'Email'}
        width={'90%'}
        onChangeText={email => setEmail(email)}
      />
      <CustomInputField
        inputTitle={'Name'}
        width={'90%'}
        onChangeText={username => setUsername(username)}
      />
      <CustomInputField
        inputTitle={'Password'}
        width={'90%'}
        onChangeText={password => setPassword(password)}
        secure={true}
      />
      <CustomInputField
        inputTitle={'Confirm Password'}
        width={'90%'}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        secure={true}
      />
      <View style={{ marginVertical: 20 }}>
        <PrimaryButton
          buttonText={'Sign Up'}
          backgroundColor={'#c06262'}
          textColor={'white'}
          onPress={() =>
            signUpWithEmail(email, password, confirmPassword, username)
          }
        />
      </View>
    </View>
  );
};

export default SignUpForm;
