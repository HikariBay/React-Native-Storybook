import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mColor} from '../../helpers/appStyle';

const SquareColor = ({text, squareColor}) => {
  return (
    <View style={Style.columnContainer}>
      <View style={Style.columnContainerText}>
        <Text style={Style.centerText}>{text}</Text>
      </View>
      <View style={[Style.squareContainer, {backgroundColor: squareColor}]} />
    </View>
  );
};

export default SquareColor;

const Style = StyleSheet.create({
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 25,
    marginVertical: 25,
  },

  columnContainerText: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 10,
  },

  centerText: {
    textAlign: 'center',
    fontSize: 10,
  },

  squareContainer: {
    backgroundColor: mColor.primary,
    height: 80,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
