/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {mColor, mStyle} from '../helpers/appStyle';

export const BufferView = storyFn => (
  <ScrollView style={{...mStyle.mainContainer}}>
    <View style={{marginHorizontal: 20, marginVertical: 40}}>{storyFn()}</View>
  </ScrollView>
);

export const SBStyle = StyleSheet.create({
  smallTextStyle: {
    ...mStyle.message,
    textAlign: 'left',
    paddingVertical: 20,
    color: mColor.CoolGrey040,
    fontWeight: 'bold',
  },

  changelogSubtextContainerStyle: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  changelogSubtextStyle: {
    ...mStyle.subtitle,
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
  },

  changelogBulletDescription: {
    ...mStyle.smallText,
    textAlign: 'left',
  },

  centerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  headerTitle: {
    ...mStyle.title,
    textAlign: 'left',
    paddingTop: 20,
    paddingBottom: 30,
    fontWeight: 'bold',
  },

  headerDescription: {
    ...mStyle.message,
    textAlign: 'left',
    paddingVertical: 10,
  },

  headerSubtextStyle: {
    ...mStyle.subtitle,
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 30,
  },

  headerBoldSubText: {
    ...mStyle.subtitle,
    textAlign: 'left',
    paddingTop: 20,
    paddingBottom: 30,
    fontWeight: 'bold',
  },

  bulletDescription: {
    ...mStyle.message,
    textAlign: 'left',
  },

  displayUsageContainer: {
    paddingVertical: 40,
  },

  componentHeaderStyle: {
    ...mStyle.subtitle,
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
  },

  spacing: {
    paddingVertical: 10,
  },

  wholeViewSpacing: {
    paddingVertical: 20,
  },

  LowViewSpacing: {
    paddingBottom: 20,
  },

  hairline: {
    marginVertical: 20,
    height: 5,
    width: '100%',
    backgroundColor: mColor.gray,
  },
});
