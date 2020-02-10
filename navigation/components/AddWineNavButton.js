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
    width: 75,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#ab1c1c'
  }
});

export default AddWineNavButton;
