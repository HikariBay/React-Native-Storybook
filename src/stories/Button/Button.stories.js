/* eslint-disable no-unused-vars */

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {number, text, select, color, boolean} from '@storybook/addon-knobs';

// Styles
import {BufferView, SBStyle} from '../decorators';
import {mSize, mColor, mFont, mOS, mStyle} from '../../helpers/appStyle';

// Strings
import {TableContent, ButtonContent} from './contentStrings';
import {ButtonCode} from './codeStrings';
import {
  OptionFontWeight,
  OptionButtonWidth,
  OptionFlexDirection,
  OptionJustifyContent,
} from '../options';

// SB Components
import SyntaxDarculaComponent from '../../components/SB/syntaxDarculaComponent';
import SyntaxTwilightComponent from '../../components/SB/syntaxTwilightComponent';
import CollipseTable from '../../components/SB/collipseTable';

// Components
import Button from '../../components/button/button';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('button component', () => (
    <View>
      {/* HEADER */}
      <View>
        <Text style={SBStyle.headerTitle}>{ButtonContent.HEADER_TITLE}</Text>

        <Text style={SBStyle.headerDescription}>
          {ButtonContent.HEADER_DESCRIPTION}
        </Text>
      </View>

      <View style={SBStyle.hairline} />

      {/* WHAT IS BUTTON? */}
      <View>
        <Text style={SBStyle.headerTitle}>{ButtonContent.WHAT_IS_BUTTON}</Text>

        <Text style={SBStyle.headerDescription}>
          {ButtonContent.BUTTON_DESCRIPTION}
        </Text>

        <View style={SBStyle.spacing} />

        <Text style={SBStyle.headerDescription}>
          {ButtonContent.WHERE_TO_USE_BUTTON}
        </Text>

        <View style={SBStyle.spacing} />

        <FlatList
          data={[
            {key: `${ButtonContent.MODAL_WINDOW}`},
            {key: `${ButtonContent.FORM}`},
            {key: `${ButtonContent.CARDS}`},
            {key: `${ButtonContent.TOOLBARS}`},
          ]}
          renderItem={({item}) => (
            <Text style={SBStyle.bulletDescription}>
              {'      \u2B24' + '     '}
              {item.key}
            </Text>
          )}
        />

        <View style={SBStyle.spacing} />
      </View>

      <View style={SBStyle.hairline} />

      {/* /USAGE */}
      <View>
        <View style={SBStyle.displayUsageContainer}>
          <Button
            onPress={action('clicked-button')}
            showLeftIconImage={boolean('Show Left Icon Image', false)}
            showRightIconImage={boolean('Show Right Icon Image', false)}
            showButtonText={boolean('Show Button Text', true)}
            buttonDisabled={boolean('Disabled', false)}
            buttonWidth={select(
              'Button Width',
              OptionButtonWidth,
              OptionButtonWidth.Hundred_Percent_Width,
            )}
            buttonFlexDirection={select(
              'Button flexDirection',
              OptionFlexDirection,
              `${OptionFlexDirection.column}`,
            )}
            buttonJustifyContent={select(
              'Button JustifyContent',
              OptionJustifyContent,
              `${OptionJustifyContent.center}`,
            )}
            buttonPaddingVertical={number('Button Padding Vertical', 18)}
            buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
            buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
            buttonBorderRadius={number('Button Border Radius', 6)}
            buttonBorderWidth={number('Button Border Width', 0)}
            buttonBorderColor={select(
              'Button Border Color',
              mColor,
              mColor.white,
            )}
            buttonText={text('Button text', 'Button')}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={select('Text Font Family', mFont, mFont.defaultType)}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
            )}
            iconWidth={number('Icon Size', 20)}
            iconHeight={number('Icon Size', 20)}
            leftIconMarginRight={number('Left Icon MarginRight', 10)}
            leftIconMarginBottom={number('Left Icon MarginBottom', 0)}
            leftIconImage={require('../../assets/resources/ic_union.png')}
            rightIconMarginLeft={number('Right Icon MarginLeft', 10)}
            rightIconMarginTop={number('Right Icon MarginTop', 0)}
            rightIconImage={require('../../assets/resources/ic_union.png')}
          />
        </View>

        <View>
          <Text style={SBStyle.headerSubtextStyle}>
            {ButtonContent.USAGE_TITLE}
          </Text>
          <Text style={SBStyle.headerDescription}>
            {ButtonContent.USAGE_IMPORT}
          </Text>

          <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

          <Text style={SBStyle.headerDescription}>
            {ButtonContent.USAGE_FULL_CODE}
          </Text>

          <SyntaxTwilightComponent code={ButtonCode.USAGE_CODE} />
        </View>
      </View>

      <View style={SBStyle.hairline} />

      {/* PROPS */}
      <View>
        <Text style={SBStyle.headerSubtextStyle}>
          {ButtonContent.PROPS_TITLE}
        </Text>

        <Text style={SBStyle.headerDescription}>
          {ButtonContent.PROPS_INSTRUCTION}
        </Text>

        <View style={SBStyle.wholeViewSpacing} />

        {/* OnPress */}
        <CollipseTable
          code={ButtonContent.ONPRESS}
          typeValue={TableContent.FUNCTION}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_ONPRESS}
        />

        {/* buttonDisabled */}
        <CollipseTable
          code={ButtonContent.BUTTON_DISABLED}
          typeValue={TableContent.BOOLEAN}
          defaultValue={TableContent.FALSE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_BUTTON_DISABLED}
        />

        {/* buttonWidth */}
        <CollipseTable
          code={ButtonContent.BUTTON_WIDTH}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.YES}
          description={ButtonContent.TEXT_BUTTON_WIDTH}
        />

        {/* buttonFlexDirection */}
        <CollipseTable
          code={ButtonContent.BUTTON_FLEX_DIRECTION}
          typeValue={TableContent.STYLEFLEXDIRECTION}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
        />

        {/* buttonJustifyContent */}
        <CollipseTable
          code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
          typeValue={TableContent.STYLEJUSTIFYCONTENT}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
        />

        {/* buttonPaddingVertical */}
        <CollipseTable
          code={ButtonContent.BUTTON_PADDING_VERTICAL}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
        />

        {/* buttonPaddingHorizontal */}
        <CollipseTable
          code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
        />

        {/* buttonBackgroundColor */}
        <CollipseTable
          code={ButtonContent.BUTTON_BACKGROUND_COLOR}
          typeValue={TableContent.COLOR}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
        />

        {/* buttonBorderRadius */}
        <CollipseTable
          code={ButtonContent.BUTTON_BORDER_RADIUS}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
        />

        {/* buttonBorderWidth */}
        <CollipseTable
          code={ButtonContent.BUTTON_BORDER_WIDTH}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
        />

        {/* buttonBorderColor */}
        <CollipseTable
          code={ButtonContent.BUTTON_BORDER_COLOR}
          typeValue={TableContent.COLOR}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
        />

        {/* showButtonText */}
        <CollipseTable
          code={ButtonContent.SHOW_BUTTON_TEXT}
          typeValue={TableContent.BOOLEAN}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
        />

        {/* buttonText */}
        <CollipseTable
          code={ButtonContent.BUTTON_TEXT}
          typeValue={TableContent.STRING}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_BUTTON_TEXT}
        />

        {/* fontcolor */}
        <CollipseTable
          code={ButtonContent.FONT_COLOR}
          typeValue={TableContent.COLOR}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_FONT_COLOR}
        />

        {/* fontSize */}
        <CollipseTable
          code={ButtonContent.FONT_SIZE}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_FONT_SIZE}
        />

        {/* fontFamily */}
        <CollipseTable
          code={ButtonContent.FONT_FAMILY}
          typeValue={TableContent.FONTFAMILY}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_FONT_FAMILY}
        />

        {/* fontWeight */}
        <CollipseTable
          code={ButtonContent.FONT_WEIGHT}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_FONT_WEIGHT}
        />

        {/* showLeftIconImage */}
        <CollipseTable
          code={ButtonContent.SHOW_LEFT_ICON_IMAGE}
          typeValue={TableContent.BOOLEAN}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_SHOW_LEFT_ICON_IMAGE}
        />

        {/* showRightIconImage */}
        <CollipseTable
          code={ButtonContent.SHOW_RIGHT_ICON_IMAGE}
          typeValue={TableContent.BOOLEAN}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.OPTIONAL}
          description={ButtonContent.TEXT_SHOW_RIGHT_ICON_IMAGE}
        />

        {/* iconWidth */}
        <CollipseTable
          code={ButtonContent.ICON_WIDTH}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_ICON_WIDTH}
        />

        {/* iconHeight */}
        <CollipseTable
          code={ButtonContent.ICON_HEIGHT}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_ICON_HEIGHT}
        />

        {/* leftIconMarginRight */}
        <CollipseTable
          code={ButtonContent.LEFT_ICON_MARGIN_RIGHT}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_LEFT_ICON_MARGIN_RIGHT}
        />

        {/* leftIconMarginBottom */}
        <CollipseTable
          code={ButtonContent.LEFT_ICON_MARGIN_BOTTOM}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_LEFT_ICON_MARGIN_BOTTOM}
        />

        {/* leftIconImage */}
        <CollipseTable
          code={ButtonContent.LEFT_ICON_IMAGE}
          typeValue={TableContent.STRING}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_LEFT_ICON_IMAGE}
        />

        {/* rightIconMarginLeft */}
        <CollipseTable
          code={ButtonContent.RIGHT_ICON_MARGIN_LEFT}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_RIGHT_ICON_MARGIN_LEFT}
        />

        {/* rightIconMarginTop */}
        <CollipseTable
          code={ButtonContent.RIGHT_ICON_MARGIN_TOP}
          typeValue={TableContent.NUMBER}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_RIGHT_ICON_MARGIN_TOP}
        />

        {/* rightIconImage */}
        <CollipseTable
          code={ButtonContent.RIGHT_ICON_IMAGE}
          typeValue={TableContent.STRING}
          defaultValue={TableContent.NONE}
          requiredValue={TableContent.ONLY_REQUIRED}
          description={ButtonContent.TEXT_RIGHT_ICON_IMAGE}
        />
      </View>

      <View style={SBStyle.hairline} />

      {/* COMPONENT CODE AND STYLESHEET */}
      <View>
        <Text style={SBStyle.componentHeaderStyle}>
          {ButtonContent.COMPONENTCODE}
        </Text>

        <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

        <Text style={SBStyle.componentHeaderStyle}>
          {ButtonContent.COMPONENTSTYLESHEET}
        </Text>

        <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

        <View style={SBStyle.spacing} />
      </View>
    </View>
  ));
