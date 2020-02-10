import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const WineItem = props => (
  <View style={{ width: '95%', justifyContent: 'center' }}>
    <Image source={props.wineImage} style={styles.image}></Image>
    <TouchableWithoutFeedback
      onPress={() => Alert.alert('Redirect to DetailScreen')}
    >
      <View style={styles.info}>
        <Text style={{ fontFamily: 'MontserratBold', fontSize: 20 }}>
          {props.wineName}
        </Text>
        <Text style={{ fontFamily: 'Montserrat', fontSize: 12 }}>
          {props.country}
        </Text>
        <View style={styles.colorDot} />
        <Ionicons
          name='ios-arrow-forward'
          size={30}
          style={{ position: 'absolute', bottom: 20, right: 20 }}
        />
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '75%',
    borderRadius: 20
  },
  info: {
    height: 150,
    width: '60%',
    position: 'absolute',
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    padding: 20
  },
  colorDot: {
    height: 15,
    width: 15,
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#ab1c1c'
  }
});

export default WineItem;
