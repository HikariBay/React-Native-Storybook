import React from 'react';
import {View} from 'react-native';

const ButtonGroup = ({children}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {children}
    </View>
  );
};

export default ButtonGroup;
