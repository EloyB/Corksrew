import React from 'react';
import { Text, View } from 'react-native';

import CustomInputField from '../components/CustomInputField';

const AddForm = props => (
  <View style={{ alignItems: 'center', top: 40 }}>
    <CustomInputField inputTitle={'Name'} width={'90%'} />
    <View style={{ flexDirection: 'row' }}>
      <CustomInputField inputTitle={'Year'} width={'44%'} />
      <CustomInputField inputTitle={'Type'} width={'44%'} />
    </View>
    <CustomInputField inputTitle={'Country Of Origin'} width={'90%'} />
    <CustomInputField inputTitle={'Price You Paid'} width={'90%'} />
  </View>
);

export default AddForm;
