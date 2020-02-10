import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const PrimaryButtonComponent = props => {
  return (
    <TouchableWithoutFeedback
      style={{ borderRadius: 25, elevation: 8 }}
      onPress={props.onPress}
    >
      <View style={styles.buttonBackground}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: '#ab1c1c',
    height: 60,
    width: 350,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat'
  }
});

export default PrimaryButtonComponent;
