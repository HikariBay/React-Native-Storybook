/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {mSize, mColor, mFont, mOS, mStyle} from '../helpers/appStyle';

export const BufferView = storyFn => (
  <View style={{flex: 1, marginVertical: 40, marginHorizontal: 20}}>
    {storyFn()}
  </View>
);

export const TopCenterView = storyFn => (
  <View style={{flex: 1, marginVertical: 40}}>{storyFn()}</View>
);

export const CenterView = storyFn => (
  <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
    {storyFn()}
  </View>
);

export const SBStyle = StyleSheet.create({
  title: {
    ...mStyle.title,
    textAlign: 'left',
    paddingTop: 20,
    paddingBottom: 30,
  },

  subTitleStyle: {
    ...mStyle.subtitle,
    textAlign: 'left',
    paddingVertical: 10,
  },

  subStyleSheetStyle: {
    ...mStyle.subtitle,
    textAlign: 'left',
    paddingTop: 30,
    paddingBottom: 10,
  },

  designContainer: {
    borderRadius: 5,
    paddingVertical: 20,
    marginVertical: 10,
  },

  // Use for Transparent
  designTransparentContainer: {
    // backgroundColor: "#c9c9c9",
    borderRadius: 5,
    // padding: 40,
    paddingVertical: 20,
    marginVertical: 10,
  },

  // Use for White Text
  designWhiteContainer: {
    // backgroundColor: mColor.white,
    borderRadius: 5,
    // padding: 40,
    paddingVertical: 20,
    marginVertical: 10,
  },

  // Use for Fix Design - gray
  designFixGrayContainer: {
    // backgroundColor: "gray",
    borderRadius: 5,
    paddingVertical: 20,
    marginVertical: 10,
  },

  // Use for Fix Design - white
  designFixWhiteContainer: {
    // backgroundColor: mColor.white,
    borderRadius: 5,
    paddingVertical: 20,
    marginVertical: 10,
  },

  // Use in Animation, center the animation in middle
  innerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },

  multipleTopTextStyle: {
    ...mStyle.message,
    textAlign: 'left',
    marginTop: 5,
  },
  multipleLastTextStyle: {
    ...mStyle.message,
    textAlign: 'left',
    marginBottom: 20,
  },

  textStyle: {
    ...mStyle.message,
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 5,
  },

  highlightTextStyle: {
    ...mStyle.message,
    backgroundColor: '#309eff',
    color: mColor.white,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
  },

  codeContainer: {
    backgroundColor: '#0d0045',
    borderWidth: 1,
    borderColor: '#3053ff',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
  },

  codeStyle: {
    ...mStyle.message,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
  },

  longCodeStyle: {
    ...mStyle.smallText,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },

  styleContainer: {
    backgroundColor: '#2f0045',
    borderWidth: 1,
    borderColor: '#a230ff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginVertical: 10,
  },

  hairline: {
    marginVertical: 20,
    height: 5,
    width: '100%',
    backgroundColor: mColor.gray,
  },
});
