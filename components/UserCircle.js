import React from 'react';
import { Image } from 'react-native';

const UserCircle = props => (
  <Image
    source={props.image}
    style={{
      width: props.size,
      height: props.size,
      backgroundColor: 'white',
      borderRadius: props.size / 2,
      borderColor: props.border,
      borderWidth: 3
    }}
  />
);

export default UserCircle;
