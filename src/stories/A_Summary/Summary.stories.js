/* eslint-disable no-unused-vars */

import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {number, text, select, color, boolean} from '@storybook/addon-knobs';

// Styles
import {BufferView, SBStyle} from '../decorators';
import {mSize, mColor, mFont, mOS, mStyle} from '../../helpers/appStyle';

// Strings

import {
  Welcome,
  Colors,
  ChangeLogContentTitle,
  ChangeLogDateContent,
} from './contentStrings';

import {Code} from './codeStrings';

// SB Components
import SyntaxOkaidiaComponent from '../../components/SB/syntaxOkaidiaComponent';
import SquareColor from '../../components/SB/squareColor';

// Components

storiesOf('Summary', module)
  .addDecorator(BufferView)
  .add('welcome', () => (
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

      <SyntaxOkaidiaComponent code={Code.HOW_TO_INSTALL} />

      <Text style={SBStyle.headerDescription}>
        {Welcome.HEADER_DESCRIPTION_5}
      </Text>

      <View style={SBStyle.spacing} />

      <SyntaxOkaidiaComponent code={Code.START_ANDROID} />
    </View>
  ))
  .add('changelogs', () => (
    <View>
      <Text style={SBStyle.headerTitle}>
        {ChangeLogContentTitle.CHANGE_LOGS}
      </Text>

      <Text style={SBStyle.headerBoldSubText}>{ChangeLogDateContent.V_01}</Text>

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
  ))
  .add('colors', () => (
    <View>
      <Text style={SBStyle.headerTitle}>{Colors.HEADER_TITLE}</Text>

      <Text style={SBStyle.headerDescription}>
        {Colors.HEADER_DESCRIPTION_1}
      </Text>

      <SyntaxOkaidiaComponent code={Code.MCOLOR_CODE} />

      <View style={SBStyle.hairline} />

      <View style={SBStyle.centerRowContainer}>
        <SquareColor text={'primary'} squareColor={mColor.primary} />
        <SquareColor text={'orange'} squareColor={mColor.orange} />
        <SquareColor text={'red'} squareColor={mColor.red} />
      </View>

      <View style={SBStyle.centerRowContainer}>
        <SquareColor text={'green'} squareColor={mColor.green} />
        <SquareColor text={'transparent'} squareColor={mColor.transparent} />
        <SquareColor text={'white'} squareColor={mColor.white} />
      </View>

      <View style={SBStyle.centerRowContainer}>
        <SquareColor text={'black'} squareColor={mColor.black} />
        <SquareColor text={'blue'} squareColor={mColor.blue} />
        <SquareColor text={'titleBar'} squareColor={mColor.titleBar} />
      </View>

      <View style={SBStyle.centerRowContainer}>
        <SquareColor text={'text'} squareColor={mColor.text} />
        <SquareColor text={'border'} squareColor={mColor.border} />
        <SquareColor text={'gray'} squareColor={mColor.gray} />
      </View>

      <View style={SBStyle.centerRowContainer}>
        <SquareColor
          text={'neutralGrey60'}
          squareColor={mColor.neutralGrey60}
        />
        <SquareColor text={'coolGrey10'} squareColor={mColor.coolGrey10} />
        <SquareColor text={'coolGrey70'} squareColor={mColor.coolGrey70} />
      </View>

      <View style={SBStyle.centerRowContainer}>
        <SquareColor text={'CoolGrey040'} squareColor={mColor.CoolGrey040} />
        <SquareColor text={'coolGrey100'} squareColor={mColor.coolGrey100} />
        <SquareColor text={'success'} squareColor={mColor.success} />
      </View>

      <View style={SBStyle.centerRowContainer}>
        <SquareColor text={'lightgray'} squareColor={mColor.lightgray} />
        <SquareColor text={'lightgrey'} squareColor={mColor.lightgrey} />
        <SquareColor text={'bgCircle'} squareColor={mColor.bgCircle} />
      </View>

      <View style={SBStyle.centerRowContainer}>
        <SquareColor
          text={'bgCircleContainer'}
          squareColor={mColor.bgCircleContainer}
        />
        <SquareColor text={'singpassbg'} squareColor={mColor.singpassbg} />
        <SquareColor
          text={'idPageScrollbg'}
          squareColor={mColor.idPageScrollbg}
        />
      </View>

      <View style={SBStyle.centerRowContainer}>
        <SquareColor text={'scannerBar'} squareColor={mColor.scannerBar} />
        <SquareColor text={'expandButton'} squareColor={mColor.expandButton} />
      </View>
    </View>
  ));
