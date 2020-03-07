import React from 'react';
import { Text, View } from 'react-native';

import RoundButton from '../components/buttons/RoundButton';
import AddForm from '../components/AddForm';

import { Feather } from '@expo/vector-icons';

const AddWineScreen = ({ params }) => (
  <View style={{ height: '100%', width: '100%' }}>
    <View style={{ height: '30%', width: '100%', backgroundColor: '#ab1c1c' }}>
      <View style={{ position: 'absolute', right: 20, top: 20 }}>
        <RoundButton
          icon={<Feather name='camera' size={32} color='#ab1c1c' />}
          backgroundColor={'white'}
        />
      </View>
    </View>
    <View
      style={{
        height: '75%',
        width: '100%',
        backgroundColor: 'white',
        top: '-5%',
        borderRadius: 20
      }}
    >
      <View
        style={{
          borderWidth: 2,
          width: '70%',
          top: 20,
          alignSelf: 'center',
          borderColor: '#cccccc'
        }}
      />
      <AddForm />
    </View>
  </View>
);

export default AddWineScreen;
