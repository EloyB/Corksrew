import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import { Feather, AntDesign } from '@expo/vector-icons';

import WineCounter from '../components/WineCounter';

import { logOutUser } from '../firebase/Authentication';

const AccountScreen = props => {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ height: '35%' }}>
        <Image
          source={require('../assets/images/profile.jpg')}
          style={{
            height: '100%',
            width: '100%'
          }}
        />
        <View style={styles.overlay} />
        <Feather
          name='settings'
          size={30}
          color='white'
          style={{ position: 'absolute', left: 20, top: 20 }}
        />
        <TouchableWithoutFeedback onPress={logOutUser}>
          <AntDesign
            name='logout'
            size={30}
            color='white'
            style={{ position: 'absolute', right: 20, top: 20 }}
          />
        </TouchableWithoutFeedback>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Eloy Boone</Text>
          <Text style={styles.email}>eloyboone@hotmail.com</Text>
        </View>

        <WineCounter style={{ position: 'absolute' }} />
      </View>
      <View style={styles.userWines}>
        <Text style={styles.tabText}>Favorites</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(40, 45, 68, 0.3)'
  },
  userInfo: {
    position: 'absolute',
    alignSelf: 'center',
    top: '30%'
  },
  name: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'MontserratBold',
    color: 'white'
  },
  email: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'MontserratThin',
    color: 'white'
  },
  userWines: {
    backgroundColor: 'white',
    height: '70%',
    width: '100%',
    borderRadius: 20,
    top: -20
  },
  tabText: {
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontFamily: 'MontserratBold',
    color: '#c06262'
  }
});

export default AccountScreen;
