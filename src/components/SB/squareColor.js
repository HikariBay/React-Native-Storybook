import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mColor, mStyle} from '../../helpers/appStyle';

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
    marginHorizontal: 10,
    marginVertical: 15,
    flex: 1,
  },

  columnContainerText: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 10,
  },

  centerText: {
    ...mStyle.message,
    textAlign: 'center',
    fontSize: 8.5,
  },

  squareContainer: {
    backgroundColor: mColor.primary,
    width: 75,
    height: 75,
    borderRadius: 7,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
