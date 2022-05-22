/* eslint-disable no-unused-vars */

import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {
  number,
  text,
  select,
  color,
  boolean,
  radios,
} from '@storybook/addon-knobs';

// Styles
import {
  BufferView,
  HeaderContent,
  UsageContent,
  PropsContent,
  ComponentContent,
  SBStyle,
} from '../decorators';
import {mSize, mColor, mFont, mOS, mStyle} from '../../helpers/appStyle';

// Strings
import {
  KnobsGroup,
  QuestionContent,
  ButtonStoriesContent,
} from './contentStrings';

import {
  OptionFontWeight,
  OptionButtonWidth,
  OptionFlexDirection,
  OptionJustifyContent,
} from '../options';

// Features Props
import {
  ButtonFeature,
  TextFeature,
  LeftIconFeature,
  RightIconFeature,
} from './featureProps';

// SB
import SeparateCollipse from '../../components/SB/separateCollipse';

// Components
import Button from '../../components/button/button';
import ButtonGroup from '../../components/button/buttonGroup';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('Design Custom Button', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S0_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S0_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          <Button
            onPress={action('clicked-button')}
            buttonDisabled={boolean(
              'Disabled Button',
              false,
              KnobsGroup.BUTTON,
            )}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonHeight={number('Button Height', 60, {}, KnobsGroup.BUTTON)}
            buttonFlexDirection={radios(
              'Button FlexDirection',
              OptionFlexDirection,
              `${OptionFlexDirection.row}`,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderWidth={number(
              'Button Border Width',
              0,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showButtonText={boolean('Show Button Text', true, KnobsGroup.TEXT)}
            buttonText={text('Button Text', 'Button Text', KnobsGroup.TEXT)}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showLeftIconImage={boolean(
              'Show Left Icon Image',
              false,
              KnobsGroup.LEFT_ICON,
            )}
            showRightIconImage={boolean(
              'Show Right Icon Image',
              false,
              KnobsGroup.RIGHT_ICON,
            )}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            leftIconMarginRight={number(
              'Left Icon MarginRight',
              10,
              {},
              KnobsGroup.LEFT_ICON,
            )}
            leftIconMarginBottom={number(
              'Left Icon MarginBottom',
              0,
              {},
              KnobsGroup.LEFT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
            rightIconMarginLeft={number(
              'Right Icon MarginLeft',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            rightIconMarginTop={number(
              'Right Icon MarginTop',
              0,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            rightIconImage={require('../../assets/resources/ic_union_white.png')}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S0_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S0_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S0_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('Disabled', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S1_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S1_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Disabled Button */}
          <Button
            buttonDisabled
            buttonBackgroundColor={mColor.orange}
            showButtonText
            fontcolor={mColor.coolGrey100}
            fontFamily={mFont.defaultType}
            buttonText={'Disabled Button'}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S1_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S1_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S1_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('With No Shadow', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S2_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S2_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Shadow Button */}
          <Button
            onPress={action('clicked-no-shadow-button')}
            shadow={false}
            buttonBackgroundColor={mColor.orange}
            showButtonText
            fontcolor={mColor.coolGrey100}
            fontFamily={mFont.defaultType}
            buttonText={'Shadow Button'}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S2_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S2_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S2_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('With Outline', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S3_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S3_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Outline Button */}
          <Button
            onPress={action('clicked-outline-button')}
            buttonBackgroundColor={mColor.orange}
            buttonBorderWidth={number(
              'Button Border Width',
              3,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S3_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S3_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S3_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('With Text', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S4_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S4_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Default Button */}
          <Button
            onPress={action('clicked-default-button')}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            buttonText={text(
              'Default Button Text',
              'Default Button Text',
              KnobsGroup.STRING,
            )}
          />
          <View style={SBStyle.spacing} />

          {/* Outline Button */}
          <Button
            onPress={action('clicked-outline-button')}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderWidth={number(
              'Button Border Width',
              3,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            buttonText={text(
              'Outline Button Text',
              'Outline Button Text',
              KnobsGroup.STRING,
            )}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S4_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S4_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S4_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('With Icon', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S5_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S5_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Default Button */}
          <Button
            onPress={action('clicked-default-button')}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            showLeftIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON)}
            iconHeight={number('Icon Height Size', 20, {}, KnobsGroup.ICON)}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
          />

          <View style={SBStyle.spacing} />

          {/* Outline Button */}
          <Button
            onPress={action('clicked-button')}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderWidth={number(
              'Button Border Width',
              3,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showLeftIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON)}
            iconHeight={number('Icon Height Size', 20, {}, KnobsGroup.ICON)}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S5_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S5_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S5_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('Circle With Icon', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S6_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S6_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageHorContainer}>
          {/* Small Circle Button */}
          <Button
            onPress={action('clicked-small-circle-button')}
            buttonWidth={65}
            buttonHeight={65}
            buttonPaddingVertical={15}
            buttonPaddingHorizontal={15}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={150}
            showLeftIconImage={true}
            iconWidth={30}
            iconHeight={30}
            leftIconImage={require('../../assets/resources/ic_flash.png')}
          />

          <View style={SBStyle.horspacing} />

          {/* Big Circle Button */}
          <Button
            onPress={action('clicked-circle-button')}
            buttonWidth={65}
            buttonHeight={65}
            buttonPaddingVertical={15}
            buttonPaddingHorizontal={15}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={150}
            showLeftIconImage={true}
            iconWidth={40}
            iconHeight={40}
            leftIconImage={require('../../assets/resources/ic_flash.png')}
          />

          <View style={SBStyle.horspacing} />

          {/* Outline Small Circle Button */}
          <Button
            onPress={action('clicked-outline-small-circle-button')}
            buttonWidth={65}
            buttonHeight={65}
            buttonPaddingVertical={15}
            buttonPaddingHorizontal={15}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={150}
            buttonBorderWidth={3}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showLeftIconImage={true}
            iconWidth={30}
            iconHeight={30}
            leftIconImage={require('../../assets/resources/ic_flash.png')}
          />

          <View style={SBStyle.horspacing} />

          {/* Outline Big Circle Button */}
          <Button
            onPress={action('clicked-outline-big-circle-button')}
            buttonWidth={65}
            buttonHeight={65}
            buttonPaddingVertical={15}
            buttonPaddingHorizontal={15}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={150}
            buttonBorderWidth={3}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showLeftIconImage={true}
            iconWidth={40}
            iconHeight={40}
            leftIconImage={require('../../assets/resources/ic_flash.png')}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S6_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S6_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S6_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('With Left Icon, Text', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S7_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S7_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Default Button */}
          <Button
            onPress={action('clicked-default-button')}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            buttonText={text(
              'Default Button Text',
              'Default Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showLeftIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            leftIconMarginRight={number(
              'Left Icon MarginRight',
              10,
              {},
              KnobsGroup.LEFT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
          />

          <View style={SBStyle.spacing} />

          {/* Outline Button */}
          <Button
            onPress={action('clicked-outline-button')}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderWidth={number(
              'Button Border Width',
              3,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            buttonText={text(
              'Outline Button Text',
              'Outline Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showLeftIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            leftIconMarginRight={number(
              'Left Icon MarginRight',
              10,
              {},
              KnobsGroup.LEFT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S7_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S7_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S7_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('With Right Icon, Text', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S8_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S8_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Default Button */}
          <Button
            onPress={action('clicked-default-button')}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            buttonText={text(
              'Default Button Text',
              'Default Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showRightIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            rightIconMarginLeft={number(
              'Right Icon MarginLeft',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            rightIconImage={require('../../assets/resources/ic_union_white.png')}
          />

          <View style={SBStyle.spacing} />

          {/* Outline Button */}
          <Button
            onPress={action('clicked-outline-button')}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderWidth={number(
              'Button Border Width',
              3,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            buttonText={text(
              'Outline Button Text',
              'Outline Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showRightIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            rightIconMarginLeft={number(
              'Right Icon MarginLeft',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            rightIconImage={require('../../assets/resources/ic_union_white.png')}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S8_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S8_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S8_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('Card With Top Icon, Text', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S9_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S9_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Default Button */}
          <Button
            onPress={action('clicked-default-button')}
            buttonFlexDirection={OptionFlexDirection.column}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            buttonText={text(
              'Default Button Text',
              'Default Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showLeftIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            leftIconMarginBottom={number(
              'Left Icon MarginBottom',
              10,
              {},
              KnobsGroup.LEFT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
          />

          <View style={SBStyle.spacing} />

          {/* Outline Button */}
          <Button
            onPress={action('clicked-outline-button')}
            buttonFlexDirection={OptionFlexDirection.column}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderWidth={number(
              'Button Border Width',
              3,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            buttonText={text(
              'Outline Button Text',
              'Outline Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showLeftIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            leftIconMarginBottom={number(
              'Left Icon MarginBottom',
              10,
              {},
              KnobsGroup.LEFT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S9_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S9_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S9_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('Card With Bottom Icon, Text', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S10_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S10_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          {/* Default Button */}
          <Button
            onPress={action('clicked-default-button')}
            buttonFlexDirection={OptionFlexDirection.column}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            buttonText={text(
              'Default Button Text',
              'Default Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showRightIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            rightIconMarginTop={number(
              'Right Icon MarginTop',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            rightIconImage={require('../../assets/resources/ic_union_white.png')}
          />

          <View style={SBStyle.spacing} />

          {/* Outline Button */}
          <Button
            onPress={action('clicked-outline-button')}
            buttonFlexDirection={OptionFlexDirection.column}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
              KnobsGroup.BUTTON,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
              KnobsGroup.BUTTON,
            )}
            buttonPaddingVertical={number(
              'Button Padding Vertical',
              18,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonPaddingHorizontal={number(
              'Button Padding Horizontal',
              20,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBackgroundColor={select(
              'Button Color',
              mColor,
              mColor.orange,
              KnobsGroup.BUTTON,
            )}
            buttonBorderRadius={number(
              'Button Border Radius',
              7,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderWidth={number(
              'Button Border Width',
              3,
              {},
              KnobsGroup.BUTTON,
            )}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
              KnobsGroup.BUTTON,
            )}
            showButtonText={true}
            buttonText={text(
              'Outline Button Text',
              'Outline Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.coolGrey100,
              KnobsGroup.TEXT,
            )}
            fontSize={select('Text Size', mFont, 16, KnobsGroup.TEXT)}
            fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
              KnobsGroup.TEXT,
            )}
            showRightIconImage={true}
            iconWidth={number('Icon Width Size', 20, {}, KnobsGroup.ICON_SIZE)}
            iconHeight={number(
              'Icon Height Size',
              20,
              {},
              KnobsGroup.ICON_SIZE,
            )}
            rightIconMarginTop={number(
              'Right Icon MarginTop',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            rightIconImage={require('../../assets/resources/ic_union_white.png')}
          />
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S10_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S10_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S10_USAGE_CODE}
        />
      </View>

      <PropsContent
        propsTitle={ButtonStoriesContent.PROPS_TITLE}
        propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}>
        <ButtonFeature />
        <TextFeature />
        <LeftIconFeature />
        <RightIconFeature />
      </PropsContent>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTON_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTON_CODE}
      />
    </View>
  ))
  .add('Button Group', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S11_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S11_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageHorContainer}>
          <ButtonGroup>
            <Button
              shadow={false}
              onPress={action('clicked-default-button')}
              buttonWidth={'auto'}
              buttonBackgroundColor={select(
                'Button Color',
                mColor,
                mColor.orange,
                KnobsGroup.BUTTON,
              )}
              buttonBorderRadius={0}
              showButtonText={true}
              fontcolor={select(
                'Text Color',
                mColor,
                mColor.coolGrey100,
                KnobsGroup.TEXT,
              )}
              fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
              buttonText={'One'}
            />
            <Button
              shadow={false}
              onPress={action('clicked-default-button')}
              buttonWidth={'auto'}
              buttonBackgroundColor={select(
                'Button Color',
                mColor,
                mColor.orange,
                KnobsGroup.BUTTON,
              )}
              buttonBorderRadius={0}
              showButtonText={true}
              fontcolor={select(
                'Text Color',
                mColor,
                mColor.coolGrey100,
                KnobsGroup.TEXT,
              )}
              fontFamily={(mFont.defaultType, KnobsGroup.TEXT)}
              buttonText={'Two'}
            />
            <Button
              shadow={false}
              onPress={action('clicked-default-button')}
              buttonWidth={'auto'}
              buttonPaddingVertical={20}
              buttonBackgroundColor={select(
                'Button Color',
                mColor,
                mColor.orange,
                KnobsGroup.BUTTON,
              )}
              buttonBorderRadius={0}
              showLeftIconImage={true}
              iconWidth={20}
              iconHeight={20}
              leftIconImage={require('../../assets/resources/ic_union_white.png')}
            />
            <Button
              shadow={false}
              onPress={action('clicked-default-button')}
              buttonWidth={'auto'}
              buttonPaddingVertical={20}
              buttonBackgroundColor={select(
                'Button Color',
                mColor,
                mColor.orange,
                KnobsGroup.BUTTON,
              )}
              buttonBorderRadius={0}
              showLeftIconImage={true}
              iconWidth={20}
              iconHeight={20}
              leftIconImage={require('../../assets/resources/home.png')}
            />
          </ButtonGroup>
        </View>

        <UsageContent
          usageTitle={ButtonStoriesContent.USAGE_TITLE}
          usageImportText={ButtonStoriesContent.S11_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S11_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S11_USAGE_CODE}
        />
      </View>

      <ComponentContent
        componentTitle={ButtonStoriesContent.COMPONENT_BUTTONGROUP_TITLE}
        componentCode={ButtonStoriesContent.COMPONENT_BUTTONGROUP_CODE}
      />
    </View>
  ));
