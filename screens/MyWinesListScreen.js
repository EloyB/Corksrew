import React from 'react';
import { Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import FilterItem from '../components/FilterItem';

const MyWinesListScreen = ({ params }) => (
  <View style={{ height: '100%', width: '100%' }}>
    <View
      style={{
        width: '100%',
        height: 180,
        backgroundColor: 'rgba(171, 28, 28, 0.7)',
        alignItems: 'center'
      }}
    >
      <SearchBar />
      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 55 }}>
        <FilterItem text={'Red'} />
        <FilterItem text={'White'} />
        <FilterItem text={'Rose'} />
        <FilterItem text={'Favorites'} />
      </View>
    </View>
    <View
      style={{
        width: '100%',
        height: '80%',
        top: -25,
        backgroundColor: 'white',
        borderRadius: 20
      }}
    ></View>
  </View>
);

export default MyWinesListScreen;
