import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { Feather, AntDesign } from '@expo/vector-icons';

import WineCounter from '../components/WineCounter';

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
        <View style={styles.redOverlay} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Eloy Boone</Text>
          <Text style={styles.email}>eloyboone@hotmail.com</Text>
        </View>
        <Feather
          name='settings'
          size={30}
          color='white'
          style={{ position: 'absolute', left: 20, top: 20 }}
        />
        <AntDesign
          name='logout'
          size={30}
          color='white'
          style={{ position: 'absolute', right: 20, top: 20 }}
        />
        <WineCounter style={{ position: 'absolute' }} />
      </View>
      <View style={styles.userWines}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.tabText}>Favorites</Text>
          <Text style={styles.tabText}>All</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  redOverlay: {
    position: 'absolute',
    width: '100',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(171, 28, 28, 0.3)'
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
    width: '50%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontFamily: 'MontserratBold',
    color: '#cccccc'
  }
});

export default AccountScreen;
