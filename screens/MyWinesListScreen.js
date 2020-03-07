import React from 'react';
import { Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import FilterItem from '../components/FilterItem';
import WineItem from '../components/WineItem';
import { ScrollView } from 'react-native-gesture-handler';

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
    <ScrollView
      style={{
        width: '100%',
        height: '80%',
        top: -25,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginBottom: -35
      }}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <WineItem
        wineImage={require('../assets/images/profile.jpg')}
        wineName={'Solatio'}
        country={'Italy'}
      />
    </ScrollView>
  </View>
);

export default MyWinesListScreen;
