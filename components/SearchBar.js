import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = props => (
  <View style={styles.searchBar}>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <View style={{ width: '80%' }}>
        <TextInput
          style={{
            height: '100%',
            fontFamily: 'Montserrat'
          }}
          placeholder={'Search for anything'}
          onChangeText={props.onChangeText}
        />
      </View>
      <View style={{ width: '5%', justifyContent: 'center' }}>
        <Feather name='search' size={20} color='#ab1c1c' />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  searchBar: {
    width: '90%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    top: 25
  }
});

export default SearchBar;
