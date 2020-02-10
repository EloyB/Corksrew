import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const CustomInputField = props => (
  <View
    style={{
      ...styles.input,
      width: props.width
    }}
  >
    <Text style={styles.inputTitle}>{props.inputTitle}</Text>
    <TextInput onChangeText={props.onChangeText} />
  </View>
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 65,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2
  },
  inputTitle: {
    color: '#ab1c1c',
    fontFamily: 'Montserrat'
  }
});

export default CustomInputField;
