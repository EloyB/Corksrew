import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const FilterItem = props => {
  const [selected, setSelected] = useState(false);
  return (
    <View
      style={{
        width: 90,
        height: 25,
        borderRadius: 10,
        backgroundColor: selected ? '#ab1c1c' : '#cccccc',
        marginHorizontal: 5,
        justifyContent: 'center',
        elevation: 2
      }}
    >
      <TouchableWithoutFeedback onPress={() => setSelected(!selected)}>
        <Text
          style={{
            textAlign: 'center',
            color: selected ? 'white' : 'grey'
          }}
        >
          {props.text}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FilterItem;
