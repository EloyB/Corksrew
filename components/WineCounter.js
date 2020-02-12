import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const WineCounter = props => (
  <View
    style={{
      width: '70%',
      height: 50,
      bottom: 100,
      alignSelf: 'center',
      flexDirection: 'row'
    }}
  >
    <View style={styles.wineType}>
      <Text style={styles.typeName}>Red</Text>
      <Text style={styles.typeCount}>23</Text>
    </View>
    <View
      style={{
        ...styles.wineType,
        justifyContent: 'center'
      }}
    >
      <View
        style={{
          position: 'absolute',
          borderRightWidth: 1,
          borderLeftWidth: 1,
          borderColor: 'white',
          height: '60%',
          width: '100%'
        }}
      />
      <Text style={styles.typeName}>White</Text>
      <Text style={styles.typeCount}>6</Text>
    </View>
    <View style={styles.wineType}>
      <Text style={styles.typeName}>Rose</Text>
      <Text style={styles.typeCount}>3</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wineType: {
    width: '33.33%',
    height: '100%',
    alignItems: 'center'
  },
  typeName: {
    fontFamily: 'MontserratBold',
    color: 'white',
    height: '50%',
    fontSize: 17
  },
  typeCount: { fontFamily: 'Montserrat', color: 'white', height: '50%' }
});

export default WineCounter;
