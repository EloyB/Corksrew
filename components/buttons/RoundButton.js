import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const RoundButtonComponent = props => (
  <View
    style={{
      ...styles.button,
      backgroundColor: props.backgroundColor
    }}
  >
    <TouchableWithoutFeedback onPress={props.onPress} style={styles.icon}>
      {props.icon}
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ab1c1c',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    elevation: 8
  },
  icon: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default RoundButtonComponent;
