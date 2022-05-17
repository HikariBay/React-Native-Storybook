/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const SeparateCollipse = ({headerTitle, children}) => {
  return (
    <View style={{paddingBottom: 40}}>
      <Collapse>
        <CollapseHeader>
          <View
            style={{
              backgroundColor: '#8efab1',
              borderRadius: 7,
              borderColor: '#104f24',
              borderWidth: 2,
              paddingHorizontal: 30,
            }}>
            {headerTitle}
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={{paddingTop: 40}}>{children}</View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default SeparateCollipse;
