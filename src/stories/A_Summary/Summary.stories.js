/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';

// Styles
import {BufferView, SBStyle} from '../decorators';
import {mColor, mFont, mStyle} from '../../helpers/appStyle';

// Strings
import {
  Welcome,
  Colors,
  FontSize,
  FontFamily,
  CustomStyle,
  ChangeLogContentTitle,
  ChangeLogDateContent,
} from './contentStrings';

// SB Components
import SyntaxOkaidiaComponent from '../../components/SB/syntaxOkaidiaComponent';
import SquareColor from '../../components/SB/squareColor';

storiesOf('Summary', module)
  .addDecorator(BufferView)
  .add('Welcome', () => (
    <View>
      <Text style={SBStyle.headerTitle}>{Welcome.HEADER_TITLE}</Text>

      <Text style={SBStyle.smallTextStyle}>{Welcome.BY_ME}</Text>

      <Text style={SBStyle.headerDescription}>
        {Welcome.HEADER_DESCRIPTION_1}
      </Text>

      <Text style={SBStyle.headerDescription}>
        {Welcome.HEADER_DESCRIPTION_2}
      </Text>

      <View style={SBStyle.spacing} />

      <View style={SBStyle.hairline} />

      <View style={SBStyle.spacing} />

      <Text style={SBStyle.headerSubtextStyle}>
        {Welcome.HEADER_DESCRIPTION_3}
      </Text>

      <Text style={SBStyle.headerDescription}>
        {Welcome.HEADER_DESCRIPTION_4}
      </Text>

      <View style={SBStyle.spacing} />

      <SyntaxOkaidiaComponent code={Welcome.HOW_TO_INSTALL} />

      <Text style={SBStyle.headerDescription}>
        {Welcome.HEADER_DESCRIPTION_5}
      </Text>

      <View style={SBStyle.spacing} />

      <SyntaxOkaidiaComponent code={Welcome.START_ANDROID} />
    </View>
  ))
  .add('Changelogs', () => (
    <View>
      <Text style={SBStyle.headerTitle}>
        {ChangeLogContentTitle.CHANGE_LOGS}
      </Text>

      <View>
        <Text style={SBStyle.headerBoldSubText}>
          {ChangeLogDateContent.V_02}
        </Text>

        <View style={SBStyle.changelogSubtextContainerStyle}>
          {/* New Features */}
          <View style={SBStyle.LowViewSpacing}>
            <Text style={SBStyle.changelogSubtextStyle}>
              {ChangeLogContentTitle.NEW_FEATURES}
            </Text>

            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_02_NEW_FEATURE_1}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_02_NEW_FEATURE_2}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_02_NEW_FEATURE_3}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_02_NEW_FEATURE_4}`}
            </Text>
          </View>

          {/* Documentation */}
          <View style={SBStyle.LowViewSpacing}>
            <Text style={SBStyle.changelogSubtextStyle}>
              {ChangeLogContentTitle.DOCUMENTATION}
            </Text>

            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_02_DOCUMENTATION_1}`}
            </Text>

            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_02_DOCUMENTATION_2}`}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={SBStyle.headerBoldSubText}>
          {ChangeLogDateContent.V_01}
        </Text>

        <View style={SBStyle.changelogSubtextContainerStyle}>
          {/* New Features */}
          <View style={SBStyle.LowViewSpacing}>
            <Text style={SBStyle.changelogSubtextStyle}>
              {ChangeLogContentTitle.NEW_FEATURES}
            </Text>

            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_01_NEW_FEATURE_1}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_01_NEW_FEATURE_2}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_01_NEW_FEATURE_3}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_01_NEW_FEATURE_4}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_01_NEW_FEATURE_5}`}
            </Text>
          </View>

          {/* Documentation */}
          <View style={SBStyle.LowViewSpacing}>
            <Text style={SBStyle.changelogSubtextStyle}>
              {ChangeLogContentTitle.DOCUMENTATION}
            </Text>

            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_01_DOCUMENTATION_1}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_01_DOCUMENTATION_2}`}
            </Text>
            <Text style={SBStyle.changelogBulletDescription}>
              {'  \u2B24' + `     ${ChangeLogDateContent.V_01_DOCUMENTATION_3}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  ))
  .add('Colors', () => (
    <View>
      <Text style={SBStyle.headerTitle}>{Colors.HEADER_TITLE}</Text>

      <Text style={SBStyle.headerDescription}>
        {Colors.HEADER_DESCRIPTION_1}
      </Text>

      <SyntaxOkaidiaComponent code={Colors.MCOLOR_CODE} />

      <View style={SBStyle.hairline} />

      {/* Colors Palette */}
      <View>
        <View style={SBStyle.centerRowContainer}>
          <SquareColor
            text={'primary\n\n#2563CC'}
            squareColor={mColor.primary}
          />
          <SquareColor text={'orange\n\n#F7BA50'} squareColor={mColor.orange} />
          <SquareColor text={'red\n\n#CC3123'} squareColor={mColor.red} />
          <SquareColor text={'green\n\n#008700'} squareColor={mColor.green} />
        </View>

        <View style={SBStyle.centerRowContainer}>
          <SquareColor text={'transparent'} squareColor={mColor.transparent} />
          <SquareColor text={'white\n\n#FFFFFF'} squareColor={mColor.white} />
          <SquareColor text={'black\n\n#000000'} squareColor={mColor.black} />
          <SquareColor text={'blue\n\n#025789'} squareColor={mColor.blue} />
        </View>

        <View style={SBStyle.centerRowContainer}>
          <SquareColor
            text={'titleBar\n\n#2c3542'}
            squareColor={mColor.titleBar}
          />
          <SquareColor text={'text\n\n#2c3542'} squareColor={mColor.text} />
          <SquareColor text={'border\n\n#c6c6c6'} squareColor={mColor.border} />
          <SquareColor text={'gray\n\n#9ca5ab'} squareColor={mColor.gray} />
        </View>

        <View style={SBStyle.centerRowContainer}>
          <SquareColor
            text={'neutralGrey60\n\n#7F8182'}
            squareColor={mColor.neutralGrey60}
          />
          <SquareColor
            text={'coolGrey10\n\n#DAE0E8'}
            squareColor={mColor.coolGrey10}
          />
          <SquareColor
            text={'coolGrey70\n\n#414C5A'}
            squareColor={mColor.coolGrey70}
          />
          <SquareColor
            text={'CoolGrey040\n\n#8692A1'}
            squareColor={mColor.CoolGrey040}
          />
        </View>

        <View style={SBStyle.centerRowContainer}>
          <SquareColor
            text={'coolGrey100\n\n#0C0D0D'}
            squareColor={mColor.coolGrey100}
          />
          <SquareColor
            text={'success\n\n#59C45A'}
            squareColor={mColor.success}
          />
          <SquareColor
            text={'lightgray\n\n#e9e9e9'}
            squareColor={mColor.lightgray}
          />
          <SquareColor
            text={'lightgrey\n\n#D3D3D3'}
            squareColor={mColor.lightgrey}
          />
        </View>

        <View style={SBStyle.centerRowContainer}>
          <SquareColor
            text={'bgCircle\n\n#808080'}
            squareColor={mColor.bgCircle}
          />
          <SquareColor
            text={'bgCircleContainer\n\n#808080   0.7'}
            squareColor={mColor.bgCircleContainer}
          />
          <SquareColor
            text={'singpassbg\n\n#8F9293'}
            squareColor={mColor.singpassbg}
          />
          <SquareColor
            text={'idPageScrollbg\n\n#F2F2F2'}
            squareColor={mColor.idPageScrollbg}
          />
        </View>

        <View style={SBStyle.centerRowContainer}>
          <SquareColor
            text={'scannerBar\n\n#935116'}
            squareColor={mColor.scannerBar}
          />
          <SquareColor
            text={'expandButton\n\n#C75100'}
            squareColor={mColor.expandButton}
          />
        </View>
      </View>
    </View>
  ))
  .add('Font Size', () => (
    <View>
      <Text style={SBStyle.headerTitle}>{FontSize.HEADER_TITLE}</Text>

      <Text style={SBStyle.headerDescription}>
        {FontSize.HEADER_DESCRIPTION_1}
      </Text>

      <SyntaxOkaidiaComponent code={FontSize.MFONT_CODE} />

      <View style={SBStyle.hairline} />

      <View style={SBStyle.spacing}>
        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.headerTextSize,
          }}>
          Font Size: {mFont.headerTextSize} {'\n'}Font Name: headerTextSize
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.titleTextSize,
          }}>
          Font Size: {mFont.titleTextSize} {'\n'}Font Name: titleTextSize
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.subheaderTextSize,
          }}>
          Font Size: {mFont.subheaderTextSize} {'\n'}Font Name:
          subheaderTextSize
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.defaultTextSize,
          }}>
          Font Size: {mFont.defaultTextSize} {'\n'}Font Name: defaultTextSize
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.msgTextSize,
          }}>
          Font Size: {mFont.msgTextSize} {'\n'}Font Name: msgTextSize
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.smallTextSize,
          }}>
          Font Size: {mFont.smallTextSize} {'\n'}Font Name: smallTextSize
        </Text>
      </View>
    </View>
  ))
  .add('Font Family', () => (
    <View>
      <Text style={SBStyle.headerTitle}>{FontFamily.HEADER_TITLE}</Text>

      <Text style={SBStyle.headerDescription}>
        {FontFamily.HEADER_DESCRIPTION_1}
      </Text>

      <SyntaxOkaidiaComponent code={FontFamily.MFONT_CODE} />

      <View style={SBStyle.hairline} />

      <View style={SBStyle.spacing}>
        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.subheaderTextSize,
            fontFamily: mFont.boldType,
          }}>
          FontFamily: {mFont.boldType} {'\n'}Font Name: boldType
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.subheaderTextSize,
            fontFamily: mFont.mediumType,
          }}>
          FontFamily: {mFont.mediumType} {'\n'}Font Name: mediumType
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.subheaderTextSize,
            fontFamily: mFont.lightType,
          }}>
          FontFamily: {mFont.lightType} {'\n'}Font Name: lightType
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
            textAlign: 'left',
            fontSize: mFont.subheaderTextSize,
            fontFamily: mFont.defaultType,
          }}>
          FontFamily: {mFont.defaultType} {'\n'}Font Name: defaultType
        </Text>
      </View>
    </View>
  ))
  .add('Custom Style', () => (
    <View>
      <Text style={SBStyle.headerTitle}>{CustomStyle.HEADER_TITLE}</Text>
      <Text style={SBStyle.headerDescription}>
        {CustomStyle.HEADER_DESCRIPTION_1}
      </Text>
      <SyntaxOkaidiaComponent code={CustomStyle.MSTYLE_CODE} />
      <View style={SBStyle.hairline} />

      {/* Align Center */}
      <View style={SBStyle.spacing}>
        <Text
          style={{
            ...mStyle.title,
          }}>
          Style Name: title
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.subtitle,
          }}>
          Style Name: subtitle
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.message,
          }}>
          Style Name: message
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.smallText,
          }}>
          Style Name: smallText
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.inputText,
          }}>
          Style Name: inputText
        </Text>
      </View>

      <View style={SBStyle.wholeViewSpacing} />

      {/* Align Left */}
      <View style={SBStyle.spacing}>
        <Text
          style={{
            ...mStyle.boldText,
          }}>
          Style Name: boldText
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.buttonText,
          }}>
          Style Name: buttonText
        </Text>

        <View style={SBStyle.spacing} />

        <Text
          style={{
            ...mStyle.linkUnderlineText,
          }}>
          Style Name: linkUnderlineText
        </Text>
      </View>
    </View>
  ));
