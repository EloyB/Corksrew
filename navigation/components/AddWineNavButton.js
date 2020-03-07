import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const AddWineNavButton = () => (
  <View style={styles.addButton}>
    <Entypo name='plus' color='white' size={32} />
  </View>
);

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#282d44'
  }
});

export default AddWineNavButton;
