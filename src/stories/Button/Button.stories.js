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
  ComponentAndStyleSheetContent,
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

// Components
import Button from '../../components/button/button';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('What Is Button', () => (
    <View>
      {/* WHAT IS BUTTON? */}
      <View>
        <Text style={SBStyle.headerTitle}>
          {QuestionContent.WHAT_IS_BUTTON}
        </Text>

        <Text style={SBStyle.headerDescription}>
          {QuestionContent.BUTTON_DESCRIPTION}
        </Text>

        <View style={SBStyle.spacing} />

        <Text style={SBStyle.headerDescription}>
          {QuestionContent.WHERE_TO_USE_BUTTON}
        </Text>

        <View style={SBStyle.spacing} />

        <Text style={SBStyle.bulletDescription}>
          {'      \u2B24' + `     ${QuestionContent.BULLET_MODAL_WINDOW}`}
        </Text>

        <Text style={SBStyle.bulletDescription}>
          {'      \u2B24' + `     ${QuestionContent.BULLET_FORM}`}
        </Text>

        <Text style={SBStyle.bulletDescription}>
          {'      \u2B24' + `     ${QuestionContent.BULLET_CARDS}`}
        </Text>

        <Text style={SBStyle.bulletDescription}>
          {'      \u2B24' + `     ${QuestionContent.BULLET_TOOLBARS}`}
        </Text>

        <View style={SBStyle.spacing} />
      </View>
    </View>
  ))
  .add('Button Component', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S1_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S1_HEADER_DESCRIPTION}
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
              mColor.blue,
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
              mColor.white,
              KnobsGroup.BUTTON,
            )}
            showButtonText={boolean('Show Button Text', true, KnobsGroup.TEXT)}
            buttonText={text('Button Text', 'Button Text', KnobsGroup.TEXT)}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
          usageImportText={ButtonStoriesContent.S1_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S1_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S1_USAGE_CODE}
        />
      </View>

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <TextFeature />
          <LeftIconFeature />
          <RightIconFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ))
  .add('With Text', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S2_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S2_HEADER_DESCRIPTION}
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
              mColor.blue,
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
              mColor.white,
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

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              mColor.white,
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
              'Disabled Button Text',
              'Disabled Button Text',
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
              mColor.blue,
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
              mColor.white,
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

          <View style={SBStyle.spacing} />

          {/* Outline Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              mColor.white,
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
              'Outline Disabled Button Text',
              'Outline Disabled Button Text',
              KnobsGroup.STRING,
            )}
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

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <TextFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ))
  .add('With Icon', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S3_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S3_HEADER_DESCRIPTION}
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
              mColor.blue,
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

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              mColor.blue,
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

          <View style={SBStyle.spacing} />

          {/* Outline Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
          usageImportText={ButtonStoriesContent.S3_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S3_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S3_USAGE_CODE}
        />
      </View>

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <LeftIconFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ))
  .add('Circle With Icon', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S4_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S4_HEADER_DESCRIPTION}
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
              mColor.blue,
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
              mColor.blue,
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
              mColor.blue,
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
              mColor.blue,
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
          usageImportText={ButtonStoriesContent.S4_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S4_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S4_USAGE_CODE}
        />
      </View>

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <LeftIconFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ))
  .add('With Left Icon, Text', () => (
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
              mColor.blue,
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
              mColor.white,
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

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Disabled Button Text',
              'Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
              mColor.blue,
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
              mColor.white,
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

          {/* Outline Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Outline Disabled Button Text',
              'Outline Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
          usageImportText={ButtonStoriesContent.S5_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S5_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S5_USAGE_CODE}
        />
      </View>

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <TextFeature />
          <LeftIconFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ))
  .add('With Right Icon, Text', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S6_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S6_HEADER_DESCRIPTION}
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
              mColor.blue,
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
              mColor.white,
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

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Disabled Button Text',
              'Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
              mColor.blue,
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
              mColor.white,
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

          {/* Outline Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Outline Disabled Button Text',
              'Outline Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
          usageImportText={ButtonStoriesContent.S6_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S6_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S6_USAGE_CODE}
        />
      </View>

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <TextFeature />
          <RightIconFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ))
  .add('With Both Icon, Text', () => (
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
              mColor.blue,
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
              mColor.white,
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
            showRightIconImage={true}
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
            rightIconMarginLeft={number(
              'Right Icon MarginLeft',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
            rightIconImage={require('../../assets/resources/ic_union_white.png')}
          />

          <View style={SBStyle.spacing} />

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Disabled Button Text',
              'Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
            showRightIconImage={true}
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
            rightIconMarginLeft={number(
              'Right Icon MarginLeft',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
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
              mColor.blue,
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
              mColor.white,
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
            showRightIconImage={true}
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
            rightIconMarginLeft={number(
              'Right Icon MarginLeft',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
            rightIconImage={require('../../assets/resources/ic_union_white.png')}
          />

          <View style={SBStyle.spacing} />

          {/* Outline Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Outline Disabled Button Text',
              'Outline Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
            showRightIconImage={true}
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
            rightIconMarginLeft={number(
              'Right Icon MarginLeft',
              10,
              {},
              KnobsGroup.RIGHT_ICON,
            )}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
            rightIconImage={require('../../assets/resources/ic_union_white.png')}
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

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <TextFeature />
          <LeftIconFeature />
          <RightIconFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ))
  .add('Card With Top Icon, Text', () => (
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
              mColor.blue,
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
              mColor.white,
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

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Disabled Button Text',
              'Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
              mColor.blue,
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
              mColor.white,
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

          {/* Outline Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Outline Disabled Button Text',
              'Outline Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
          usageImportText={ButtonStoriesContent.S8_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S8_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S8_USAGE_CODE}
        />
      </View>

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <TextFeature />
          <LeftIconFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ))
  .add('Card With Bottom Icon, Text', () => (
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
              mColor.blue,
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
              mColor.white,
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

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Disabled Button Text',
              'Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
              mColor.blue,
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
              mColor.white,
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

          {/* Outline Disabled Button */}
          <Button
            buttonDisabled={true}
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
              mColor.blue,
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
              'Outline Disabled Button Text',
              'Outline Disabled Button Text',
              KnobsGroup.STRING,
            )}
            fontcolor={select(
              'Text Color',
              mColor,
              mColor.white,
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
          usageImportText={ButtonStoriesContent.S9_USAGE_IMPORT}
          importCode={ButtonStoriesContent.IMPORT_CODE}
          usageFullCodeText={ButtonStoriesContent.S9_USAGE_FULL_CODE}
          usageFullCode={ButtonStoriesContent.S9_USAGE_CODE}
        />
      </View>

      {/* PROPS */}
      <View>
        <PropsContent
          propsTitle={ButtonStoriesContent.PROPS_TITLE}
          propsInstruction={ButtonStoriesContent.PROPS_INSTRUCTION}
        />

        <View>
          <ButtonFeature />
          <TextFeature />
          <RightIconFeature />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}

      <ComponentAndStyleSheetContent
        componentTitle={ButtonStoriesContent.COMPONENTCODE}
        componentCode={ButtonStoriesContent.COMPONENT_CODE}
        styleSheetTitle={ButtonStoriesContent.COMPONENTSTYLESHEET}
        styleSheetCode={ButtonStoriesContent.COMPONENT_STYLESHEET}
      />
    </View>
  ));
