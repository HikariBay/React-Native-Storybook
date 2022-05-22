/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const SeparateSubCollipse = ({headerTitle, children}) => {
  return (
    <View style={{paddingBottom: 40, paddingHorizontal: 5}}>
      <Collapse>
        <CollapseHeader>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#f7c6ff',
              borderRadius: 7,
              borderColor: '#a87aab',
              borderWidth: 4,
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 5,
              justifyContent: 'space-between',
            }}>
            <View>{headerTitle}</View>
            <View>
              <Image
                style={{width: 10, height: 20}}
                source={require('../../assets/resources/button_arrow.png')}
              />
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={{paddingTop: 40}}>{children}</View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default SeparateSubCollipse;
