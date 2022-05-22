/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {mColor, mStyle, mTheme} from '../helpers/appStyle';

// SB Components
import SyntaxDarculaComponent from '../components/SB/syntaxDarculaComponent';
import SyntaxOkaidiaComponent from '../components/SB/syntaxOkaidiaComponent';
import SeparateCollipse from '../components/SB/separateCollipse';

export const BufferView = storyFn => (
  <ScrollView style={{...mStyle.mainContainer}}>
    <View style={{marginHorizontal: 20, marginVertical: 40}}>{storyFn()}</View>
  </ScrollView>
);

export const HeaderContent = ({headerTitle, headerDescription}) => (
  <View>
    <Text style={SBStyle.headerTitle}>{headerTitle}</Text>

    <Text style={SBStyle.headerDescription}>{headerDescription}</Text>

    <View style={SBStyle.hairline} />
  </View>
);

export const UsageContent = ({
  usageTitle,
  usageImportText,
  importCode,
  usageFullCodeText,
  usageFullCode,
}) => (
  <View>
    <View style={SBStyle.hairline} />

    <View style={SBStyle.spacing} />

    <SeparateCollipse
      headerTitle={
        <Text style={SBStyle.buttonHeaderDescription}>{usageTitle}</Text>
      }>
      <Text style={SBStyle.headerDescription}>{usageImportText}</Text>
      <SyntaxOkaidiaComponent code={importCode} />
      <Text style={SBStyle.headerDescription}>{usageFullCodeText}</Text>
      <SyntaxOkaidiaComponent code={usageFullCode} />
    </SeparateCollipse>
    <View style={SBStyle.minueSpacing} />
  </View>
);

export const PropsContent = ({propsTitle, propsInstruction, children}) => (
  <View>
    <View style={SBStyle.spacing} />

    <SeparateCollipse
      headerTitle={
        <Text style={SBStyle.buttonHeaderDescription}>{propsTitle}</Text>
      }>
      <Text style={SBStyle.headerSubtextStyle}>{propsTitle}</Text>

      <Text style={SBStyle.headerDescription}>{propsInstruction}</Text>
      <View style={SBStyle.wholeViewSpacing} />
      {children}
    </SeparateCollipse>
    <View style={SBStyle.minueSpacing} />
  </View>
);

export const ComponentContent = ({componentTitle, componentCode}) => (
  <View>
    <View style={SBStyle.spacing} />

    <SeparateCollipse
      headerTitle={
        <Text style={SBStyle.buttonHeaderDescription}>{componentTitle}</Text>
      }>
      <SyntaxDarculaComponent code={componentCode} />
    </SeparateCollipse>
    <View style={SBStyle.minueSpacing} />
    <View style={SBStyle.hairline} />
  </View>
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

  buttonHeaderDescription: {
    ...mStyle.message,
    textAlign: 'left',
    paddingVertical: 10,
    color: mColor.black,
    fontWeight: 'bold',
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
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  displayUsageHorContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  componentHeaderStyle: {
    ...mStyle.subtitle,
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
  },

  minueSpacing: {
    marginVertical: -10,
  },

  spacing: {
    paddingVertical: 10,
  },

  horspacing: {
    paddingHorizontal: 10,
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
