/* eslint-disable no-unused-vars */

import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {number, text, select, color, boolean} from '@storybook/addon-knobs';

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
import {QuestionContent, ButtonStoriesContent} from './contentStrings';

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
  .add('What is button', () => (
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
  .add('Button component', () => (
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
            buttonDisabled={boolean('Disabled', false)}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
            )}
            buttonFlexDirection={select(
              'Button flexDirection',
              OptionFlexDirection,
              `${OptionFlexDirection.row}`,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            buttonBorderWidth={number('Button Border Width', 0)}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.white,
            )}
            showButtonText={boolean('Show Button Text', true)}
            buttonText={text('Button text', 'Button Text')}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
            )}
            showLeftIconImage={boolean('Show Left Icon Image', false)}
            showRightIconImage={boolean('Show Right Icon Image', false)}
            iconWidth={number('Icon Size', 20)}
            iconHeight={number('Icon Size', 20)}
            leftIconMarginRight={number('Left Icon MarginRight', 10)}
            leftIconMarginBottom={number('Left Icon MarginBottom', 0)}
            leftIconImage={require('../../assets/resources/ic_union_white.png')}
            rightIconMarginLeft={number('Right Icon MarginLeft', 10)}
            rightIconMarginTop={number('Right Icon MarginTop', 0)}
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
  .add('With text', () => (
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
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.blue)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            showButtonText={true}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
            )}
            buttonText={text('Default Button Text', 'Default Button')}
          />

          <View style={SBStyle.spacing} />

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.blue)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            showButtonText={true}
            buttonText={text('Disabled Button Text', 'Disabled Button')}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
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
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.blue)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            buttonBorderWidth={number('Button Border Width', 5)}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
            )}
            showButtonText={true}
            buttonText={text('Outline Button Text', 'Outline Button')}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
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
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.blue)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            buttonBorderWidth={number('Button Border Width', 5)}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
            )}
            showButtonText={true}
            buttonText={text(
              'Outline Disabled Button Text',
              'Outline Disabled Button',
            )}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
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
  .add('With icon', () => (
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
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.blue)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            showButtonText={true}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
            )}
            buttonText={text('Default Button Text', 'Default Button')}
          />

          <View style={SBStyle.spacing} />

          {/* Disabled Button */}
          <Button
            buttonDisabled={true}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.blue)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            showButtonText={true}
            buttonText={text('Disabled Button Text', 'Disabled Button')}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
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
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.blue)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            buttonBorderWidth={number('Button Border Width', 5)}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
            )}
            showButtonText={true}
            buttonText={text('Outline Button Text', 'Outline Button')}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
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
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.blue)}
            buttonBorderRadius={number('Button Border Radius', 7)}
            buttonBorderWidth={number('Button Border Width', 5)}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
            )}
            showButtonText={true}
            buttonText={text(
              'Outline Disabled Button Text',
              'Outline Disabled Button',
            )}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
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
  ));
