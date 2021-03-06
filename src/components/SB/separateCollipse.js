/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
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
              flexDirection: 'row',
              backgroundColor: '#C6D4FF',
              borderRadius: 7,
              borderColor: '#7A82AB',
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

export default SeparateCollipse;
