import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const PrimaryButtonComponent = props => {
  return (
    <TouchableWithoutFeedback
      style={{ borderRadius: 25, elevation: 8, marginVertical: 10 }}
      onPress={props.onPress}
    >
      <View
        style={{
          ...styles.buttonBackground,
          backgroundColor: props.backgroundColor
        }}
      >
        <Text style={{ ...styles.buttonText, color: props.textColor }}>
          {props.buttonText}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonBackground: {
    height: 70,
    width: 350,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Montserrat'
  }
});

export default PrimaryButtonComponent;
