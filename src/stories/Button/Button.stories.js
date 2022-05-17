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
import {
  QuestionContent,
  TableContent,
  FeaturePropsContent,
  ButtonStoriesContent,
} from './contentStrings';

import {
  OptionFontWeight,
  OptionButtonWidth,
  OptionFlexDirection,
  OptionJustifyContent,
} from '../options';

// SB Components
import CollipseTable from '../../components/SB/collipseTable';
import SeparateCollipse from '../../components/SB/separateCollipse';

// Components
import Button from '../../components/button/button';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('what is button', () => (
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
  .add('button component', () => (
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
          {/* Button Feature */}
          <SeparateCollipse
            headerTitle={
              <Text style={SBStyle.buttonHeaderDescription}>
                {FeaturePropsContent.FEATURE_BUTTON}
              </Text>
            }>
            {/* OnPress */}
            <CollipseTable
              code={FeaturePropsContent.ONPRESS}
              typeValue={TableContent.FUNCTION}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_ONPRESS}
            />

            {/* buttonDisabled */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_DISABLED}
              typeValue={TableContent.BOOLEAN}
              defaultValue={TableContent.FALSE}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_DISABLED}
            />

            {/* buttonWidth */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_WIDTH}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.HUNDRED_PRECENT}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_WIDTH}
            />

            {/* buttonFlexDirection */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_FLEX_DIRECTION}
              typeValue={TableContent.STYLEFLEXDIRECTION}
              defaultValue={TableContent.ROW}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_FLEX_DIRECTION}
            />

            {/* buttonJustifyContent */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_JUSTIFY_CONTENT}
              typeValue={TableContent.STYLEJUSTIFYCONTENT}
              defaultValue={TableContent.CENTER}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_JUSTIFY_CONTENT}
            />

            {/* buttonPaddingVertical */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_PADDING_VERTICAL}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.PADDINGVERTICAL}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_PADDING_VERTICAL}
            />

            {/* buttonPaddingHorizontal */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_PADDING_HORIZONTAL}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.PADDING_HORIZONTAL}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_PADDING_HORIZONTAL}
            />

            {/* buttonBackgroundColor */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_BACKGROUND_COLOR}
              typeValue={TableContent.COLOR}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.YES}
              description={FeaturePropsContent.TEXT_BUTTON_BACKGROUND_COLOR}
            />

            {/* buttonBorderRadius */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_BORDER_RADIUS}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.RADIUS}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_BORDER_RADIUS}
            />

            {/* buttonBorderWidth */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_BORDER_WIDTH}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ZERO}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_BUTTON_BORDER_WIDTH}
            />

            {/* buttonBorderColor */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_BORDER_COLOR}
              typeValue={TableContent.COLOR}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_BUTTON_BORDER_COLOR}
            />
          </SeparateCollipse>

          {/* Text Feature */}
          <SeparateCollipse
            headerTitle={
              <Text style={SBStyle.buttonHeaderDescription}>
                {FeaturePropsContent.FEATURE_TEXT}
              </Text>
            }>
            {/* showButtonText */}
            <CollipseTable
              code={FeaturePropsContent.SHOW_BUTTON_TEXT}
              typeValue={TableContent.BOOLEAN}
              defaultValue={TableContent.FALSE}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_SHOW_BUTTON_TEXT}
            />

            {/* buttonText */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_TEXT}
              typeValue={TableContent.STRING}
              defaultValue={TableContent.BUTTONTEXT}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_BUTTON_TEXT}
            />

            {/* fontcolor */}
            <CollipseTable
              code={FeaturePropsContent.FONT_COLOR}
              typeValue={TableContent.COLOR}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_FONT_COLOR}
            />

            {/* fontSize */}
            <CollipseTable
              code={FeaturePropsContent.FONT_SIZE}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.FONTSIZE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_FONT_SIZE}
            />

            {/* fontFamily */}
            <CollipseTable
              code={FeaturePropsContent.FONT_FAMILY}
              typeValue={TableContent.FONTFAMILY}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_FONT_FAMILY}
            />

            {/* fontWeight */}
            <CollipseTable
              code={FeaturePropsContent.FONT_WEIGHT}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.FONTWEIGHT}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_FONT_WEIGHT}
            />
          </SeparateCollipse>

          {/* Left Icon Feature */}
          <SeparateCollipse
            headerTitle={
              <Text style={SBStyle.buttonHeaderDescription}>
                {FeaturePropsContent.FEATURE_LEFT_ICON_FEATURE}
              </Text>
            }>
            {/* showLeftIconImage */}
            <CollipseTable
              code={FeaturePropsContent.SHOW_LEFT_ICON_IMAGE}
              typeValue={TableContent.BOOLEAN}
              defaultValue={TableContent.FALSE}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_SHOW_LEFT_ICON_IMAGE}
            />

            {/* iconWidth */}
            <CollipseTable
              code={FeaturePropsContent.ICON_WIDTH}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ICON_SIZE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_ICON_WIDTH}
            />

            {/* iconHeight */}
            <CollipseTable
              code={FeaturePropsContent.ICON_HEIGHT}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ICON_SIZE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_ICON_HEIGHT}
            />

            {/* leftIconMarginRight */}
            <CollipseTable
              code={FeaturePropsContent.LEFT_ICON_MARGIN_RIGHT}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ZERO}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_LEFT_ICON_MARGIN_RIGHT}
            />

            {/* leftIconMarginBottom */}
            <CollipseTable
              code={FeaturePropsContent.LEFT_ICON_MARGIN_BOTTOM}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ZERO}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_LEFT_ICON_MARGIN_BOTTOM}
            />

            {/* leftIconImage */}
            <CollipseTable
              code={FeaturePropsContent.LEFT_ICON_IMAGE}
              typeValue={TableContent.STRING}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_LEFT_ICON_IMAGE}
            />
          </SeparateCollipse>

          {/* Right Icon Feature */}
          <SeparateCollipse
            headerTitle={
              <Text style={SBStyle.buttonHeaderDescription}>
                {FeaturePropsContent.FEATURE_RIGHT_ICON_FEATURE}
              </Text>
            }>
            {/* showRightIconImage */}
            <CollipseTable
              code={FeaturePropsContent.SHOW_RIGHT_ICON_IMAGE}
              typeValue={TableContent.BOOLEAN}
              defaultValue={TableContent.FALSE}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_SHOW_RIGHT_ICON_IMAGE}
            />

            {/* iconWidth */}
            <CollipseTable
              code={FeaturePropsContent.ICON_WIDTH}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ICON_SIZE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_ICON_WIDTH}
            />

            {/* iconHeight */}
            <CollipseTable
              code={FeaturePropsContent.ICON_HEIGHT}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ICON_SIZE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_ICON_HEIGHT}
            />

            {/* rightIconMarginLeft */}
            <CollipseTable
              code={FeaturePropsContent.RIGHT_ICON_MARGIN_LEFT}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ZERO}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_RIGHT_ICON_MARGIN_LEFT}
            />

            {/* rightIconMarginTop */}
            <CollipseTable
              code={FeaturePropsContent.RIGHT_ICON_MARGIN_TOP}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ZERO}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_RIGHT_ICON_MARGIN_TOP}
            />

            {/* rightIconImage */}
            <CollipseTable
              code={FeaturePropsContent.RIGHT_ICON_IMAGE}
              typeValue={TableContent.STRING}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_RIGHT_ICON_IMAGE}
            />
          </SeparateCollipse>
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
  .add('with text', () => (
    <View>
      {/* HEADER */}
      <HeaderContent
        headerTitle={ButtonStoriesContent.S2_HEADER_TITLE}
        headerDescription={ButtonStoriesContent.S2_HEADER_DESCRIPTION}
      />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          <Button
            onPress={action('clicked-button')}
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
            buttonText={text('Default Button Text', 'Default Button Text')}
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
            buttonText={text('Disabled Button Text', 'Disabled Button Text')}
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
            buttonBorderWidth={number('Button Border Width', 4)}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
            )}
            showButtonText={true}
            buttonText={text('Outline Button Text', 'Outline Button Text')}
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
            buttonBorderWidth={number('Button Border Width', 4)}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.CoolGrey040,
            )}
            showButtonText={true}
            buttonText={text(
              'Outline Disabled Button Text',
              'Outline Disabled Button Text',
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
          {/* Button Feature */}
          <SeparateCollipse
            headerTitle={
              <Text style={SBStyle.buttonHeaderDescription}>
                {FeaturePropsContent.FEATURE_BUTTON}
              </Text>
            }>
            {/* OnPress */}
            <CollipseTable
              code={FeaturePropsContent.ONPRESS}
              typeValue={TableContent.FUNCTION}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_ONPRESS}
            />

            {/* buttonDisabled */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_DISABLED}
              typeValue={TableContent.BOOLEAN}
              defaultValue={TableContent.FALSE}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_DISABLED}
            />

            {/* buttonWidth */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_WIDTH}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.HUNDRED_PRECENT}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_WIDTH}
            />

            {/* buttonJustifyContent */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_JUSTIFY_CONTENT}
              typeValue={TableContent.STYLEJUSTIFYCONTENT}
              defaultValue={TableContent.CENTER}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_JUSTIFY_CONTENT}
            />

            {/* buttonPaddingVertical */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_PADDING_VERTICAL}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.PADDINGVERTICAL}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_PADDING_VERTICAL}
            />

            {/* buttonPaddingHorizontal */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_PADDING_HORIZONTAL}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.PADDING_HORIZONTAL}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_PADDING_HORIZONTAL}
            />

            {/* buttonBackgroundColor */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_BACKGROUND_COLOR}
              typeValue={TableContent.COLOR}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.YES}
              description={FeaturePropsContent.TEXT_BUTTON_BACKGROUND_COLOR}
            />

            {/* buttonBorderRadius */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_BORDER_RADIUS}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.RADIUS}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_BUTTON_BORDER_RADIUS}
            />

            {/* buttonBorderWidth */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_BORDER_WIDTH}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.ZERO}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_BUTTON_BORDER_WIDTH}
            />

            {/* buttonBorderColor */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_BORDER_COLOR}
              typeValue={TableContent.COLOR}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_BUTTON_BORDER_COLOR}
            />
          </SeparateCollipse>

          {/* Text Feature */}
          <SeparateCollipse
            headerTitle={
              <Text style={SBStyle.buttonHeaderDescription}>
                {FeaturePropsContent.FEATURE_TEXT}
              </Text>
            }>
            {/* showButtonText */}
            <CollipseTable
              code={FeaturePropsContent.SHOW_BUTTON_TEXT}
              typeValue={TableContent.BOOLEAN}
              defaultValue={TableContent.FALSE}
              requiredValue={TableContent.OPTIONAL}
              description={FeaturePropsContent.TEXT_SHOW_BUTTON_TEXT}
            />

            {/* buttonText */}
            <CollipseTable
              code={FeaturePropsContent.BUTTON_TEXT}
              typeValue={TableContent.STRING}
              defaultValue={TableContent.BUTTONTEXT}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_BUTTON_TEXT}
            />

            {/* fontcolor */}
            <CollipseTable
              code={FeaturePropsContent.FONT_COLOR}
              typeValue={TableContent.COLOR}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_FONT_COLOR}
            />

            {/* fontSize */}
            <CollipseTable
              code={FeaturePropsContent.FONT_SIZE}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.FONTSIZE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_FONT_SIZE}
            />

            {/* fontFamily */}
            <CollipseTable
              code={FeaturePropsContent.FONT_FAMILY}
              typeValue={TableContent.FONTFAMILY}
              defaultValue={TableContent.NONE}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_FONT_FAMILY}
            />

            {/* fontWeight */}
            <CollipseTable
              code={FeaturePropsContent.FONT_WEIGHT}
              typeValue={TableContent.NUMBER}
              defaultValue={TableContent.FONTWEIGHT}
              requiredValue={TableContent.ONLY_REQUIRED}
              description={FeaturePropsContent.TEXT_FONT_WEIGHT}
            />
          </SeparateCollipse>
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
