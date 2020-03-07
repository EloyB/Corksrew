import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const CustomInputField = props => (
  <View
    style={{
      ...styles.input,
      width: props.width
    }}
  >
    <TextInput
      onChangeText={props.onChangeText}
      placeholder={props.inputTitle}
      style={{ fontSize: 17 }}
      secureTextEntry={props.secure}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 65,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    borderColor: '#c06262',
    borderWidth: 2,
    justifyContent: 'center'
  },
  inputTitle: {
    color: '#ab1c1c',
    fontFamily: 'Montserrat'
  }
});

export default CustomInputField;
