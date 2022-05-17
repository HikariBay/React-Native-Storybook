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
  TableContent,
  ButtonContent,
  WithTextContent,
  WithIconContent,
  CircleWithIconContent,
  WithLeftIconAndTextContent,
  WithRightIconAndTextContent,
  WithBothIconAndTextContent,
  CardWithIconAndTextContent,
} from './contentStrings';

import {
  ButtonCode,
  WithTextCode,
  WithIconCode,
  CircleWithIconCode,
  WithLeftIconAndTextCode,
} from './codeStrings';

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
import {flushSync} from 'react-dom';

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

        <Text style={SBStyle.bulletDescription}>
          {'      \u2B24' + `     ${ButtonContent.MODAL_WINDOW}`}
        </Text>

        <Text style={SBStyle.bulletDescription}>
          {'      \u2B24' + `     ${ButtonContent.FORM}`}
        </Text>

        <Text style={SBStyle.bulletDescription}>
          {'      \u2B24' + `     ${ButtonContent.CARDS}`}
        </Text>

        <Text style={SBStyle.bulletDescription}>
          {'      \u2B24' + `     ${ButtonContent.TOOLBARS}`}
        </Text>

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
            buttonText={text('Button text', 'Button')}
            fontcolor={select('Text Color', mColor, mColor.white)}
            fontSize={select('Text Size', mFont, 16)}
            fontFamily={mFont.defaultType}
            fontWeight={select(
              'Text Weight',
              OptionFontWeight,
              OptionFontWeight.Bold,
            )}
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
// .add('with text', () => (
//   <View>
//     {/* HEADER */}
//     <View>
//       <Text style={SBStyle.headerTitle}>{WithTextContent.HEADER_TITLE}</Text>

//       <Text style={SBStyle.headerDescription}>
//         {WithTextContent.HEADER_DESCRIPTION}
//       </Text>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* /USAGE */}
//     <View>
//       <View style={SBStyle.displayUsageContainer}>
//         <Button
//           onPress={action('clicked-button-with-text')}
//           showButtonText={true}
//           buttonWidth={select(
//             'Button Width',
//             OptionButtonWidth,
//             OptionButtonWidth.Hundred_Percent_Width,
//           )}
//           buttonJustifyContent={select(
//             'Button JustifyContent',
//             OptionJustifyContent,
//             `${OptionJustifyContent.center}`,
//           )}
//           buttonPaddingVertical={number('Button Padding Vertical', 18)}
//           buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
//           buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
//           buttonBorderRadius={number('Button Border Radius', 7)}
//           buttonText={text('Button text', 'Button')}
//           fontcolor={select('Text Color', mColor, mColor.white)}
//           fontSize={select('Text Size', mFont, 16)}
//           fontFamily={select('Text Font Family', mFont, mFont.defaultType)}
//           fontWeight={select(
//             'Text Weight',
//             OptionFontWeight,
//             OptionFontWeight.Bold,
//           )}
//         />
//       </View>

//       <View>
//         <Text style={SBStyle.headerSubtextStyle}>
//           {ButtonContent.USAGE_TITLE}
//         </Text>
//         <Text style={SBStyle.headerDescription}>
//           {WithTextContent.USAGE_IMPORT}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

//         <Text style={SBStyle.headerDescription}>
//           {WithTextContent.USAGE_FULL_CODE}
//         </Text>

//         <SyntaxTwilightComponent code={WithTextCode.USAGE_CODE} />
//       </View>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* PROPS */}
//     <View>
//       <Text style={SBStyle.headerSubtextStyle}>
//         {ButtonContent.PROPS_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {ButtonContent.PROPS_INSTRUCTION}
//       </Text>

//       <View style={SBStyle.wholeViewSpacing} />

//       {/* OnPress */}
//       <CollipseTable
//         code={ButtonContent.ONPRESS}
//         typeValue={TableContent.FUNCTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_ONPRESS}
//       />

//       {/* buttonDisabled */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_DISABLED}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.FALSE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_DISABLED}
//       />

//       {/* buttonWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.YES}
//         description={ButtonContent.TEXT_BUTTON_WIDTH}
//       />

//       {/* buttonFlexDirection */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_FLEX_DIRECTION}
//         typeValue={TableContent.STYLEFLEXDIRECTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
//       />

//       {/* buttonJustifyContent */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
//         typeValue={TableContent.STYLEJUSTIFYCONTENT}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
//       />

//       {/* buttonPaddingVertical */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_VERTICAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
//       />

//       {/* buttonPaddingHorizontal */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
//       />

//       {/* buttonBackgroundColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BACKGROUND_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
//       />

//       {/* buttonBorderRadius */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_RADIUS}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
//       />

//       {/* buttonBorderWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
//       />

//       {/* buttonBorderColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
//       />

//       {/* showButtonText */}
//       <CollipseTable
//         code={ButtonContent.SHOW_BUTTON_TEXT}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
//       />

//       {/* buttonText */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_TEXT}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_TEXT}
//       />

//       {/* fontcolor */}
//       <CollipseTable
//         code={ButtonContent.FONT_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_COLOR}
//       />

//       {/* fontSize */}
//       <CollipseTable
//         code={ButtonContent.FONT_SIZE}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_SIZE}
//       />

//       {/* fontFamily */}
//       <CollipseTable
//         code={ButtonContent.FONT_FAMILY}
//         typeValue={TableContent.FONTFAMILY}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_FAMILY}
//       />

//       {/* fontWeight */}
//       <CollipseTable
//         code={ButtonContent.FONT_WEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_WEIGHT}
//       />
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* COMPONENT CODE AND STYLESHEET */}
//     <View>
//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTCODE}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTSTYLESHEET}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

//       <View style={SBStyle.spacing} />
//     </View>
//   </View>
// ))
// .add('outline with text', () => (
//   <View>
//     {/* HEADER */}
//     <View>
//       <Text style={SBStyle.headerTitle}>{WithTextContent.HEADER_TITLE}</Text>

//       <Text style={SBStyle.headerDescription}>
//         {WithTextContent.HEADER_DESCRIPTION}
//       </Text>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* /USAGE */}
//     <View>
//       <View style={SBStyle.displayUsageContainer}>
//         <Button
//           onPress={action('clicked-button-with-text')}
//           showButtonText={true}
//           buttonWidth={select(
//             'Button Width',
//             OptionButtonWidth,
//             OptionButtonWidth.Hundred_Percent_Width,
//           )}
//           buttonJustifyContent={select(
//             'Button JustifyContent',
//             OptionJustifyContent,
//             `${OptionJustifyContent.center}`,
//           )}
//           buttonPaddingVertical={number('Button Padding Vertical', 18)}
//           buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
//           buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
//           buttonBorderRadius={number('Button Border Radius', 7)}
//           buttonBorderWidth={number('Button Border Width', 7)}
//           buttonBorderColor={select(
//             'Button Border Color',
//             mColor,
//             mColor.orange,
//           )}
//           buttonText={text('Button text', 'Button')}
//           fontcolor={select('Text Color', mColor, mColor.white)}
//           fontSize={select('Text Size', mFont, 16)}
//           fontFamily={select('Text Font Family', mFont, mFont.defaultType)}
//           fontWeight={select(
//             'Text Weight',
//             OptionFontWeight,
//             OptionFontWeight.Bold,
//           )}
//         />
//       </View>

//       <View>
//         <Text style={SBStyle.headerSubtextStyle}>
//           {ButtonContent.USAGE_TITLE}
//         </Text>
//         <Text style={SBStyle.headerDescription}>
//           {WithTextContent.USAGE_IMPORT}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

//         <Text style={SBStyle.headerDescription}>
//           {WithTextContent.USAGE_FULL_CODE}
//         </Text>

//         <SyntaxTwilightComponent code={WithTextCode.USAGE_CODE} />
//       </View>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* PROPS */}
//     <View>
//       <Text style={SBStyle.headerSubtextStyle}>
//         {ButtonContent.PROPS_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {ButtonContent.PROPS_INSTRUCTION}
//       </Text>

//       <View style={SBStyle.wholeViewSpacing} />

//       {/* OnPress */}
//       <CollipseTable
//         code={ButtonContent.ONPRESS}
//         typeValue={TableContent.FUNCTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_ONPRESS}
//       />

//       {/* buttonDisabled */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_DISABLED}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.FALSE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_DISABLED}
//       />

//       {/* buttonWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.YES}
//         description={ButtonContent.TEXT_BUTTON_WIDTH}
//       />

//       {/* buttonFlexDirection */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_FLEX_DIRECTION}
//         typeValue={TableContent.STYLEFLEXDIRECTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
//       />

//       {/* buttonJustifyContent */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
//         typeValue={TableContent.STYLEJUSTIFYCONTENT}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
//       />

//       {/* buttonPaddingVertical */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_VERTICAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
//       />

//       {/* buttonPaddingHorizontal */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
//       />

//       {/* buttonBackgroundColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BACKGROUND_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
//       />

//       {/* buttonBorderRadius */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_RADIUS}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
//       />

//       {/* buttonBorderWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
//       />

//       {/* buttonBorderColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
//       />

//       {/* showButtonText */}
//       <CollipseTable
//         code={ButtonContent.SHOW_BUTTON_TEXT}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
//       />

//       {/* buttonText */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_TEXT}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_TEXT}
//       />

//       {/* fontcolor */}
//       <CollipseTable
//         code={ButtonContent.FONT_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_COLOR}
//       />

//       {/* fontSize */}
//       <CollipseTable
//         code={ButtonContent.FONT_SIZE}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_SIZE}
//       />

//       {/* fontFamily */}
//       <CollipseTable
//         code={ButtonContent.FONT_FAMILY}
//         typeValue={TableContent.FONTFAMILY}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_FAMILY}
//       />

//       {/* fontWeight */}
//       <CollipseTable
//         code={ButtonContent.FONT_WEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_WEIGHT}
//       />
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* COMPONENT CODE AND STYLESHEET */}
//     <View>
//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTCODE}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTSTYLESHEET}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

//       <View style={SBStyle.spacing} />
//     </View>
//   </View>
// ));
// .add('with icon', () => (
//   <View>
//     {/* HEADER */}
//     <View>
//       <Text style={SBStyle.headerTitle}>{WithIconContent.HEADER_TITLE}</Text>

//       <Text style={SBStyle.headerDescription}>
//         {WithIconContent.HEADER_DESCRIPTION}
//       </Text>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* /USAGE */}
//     <View>
//       <View style={SBStyle.displayUsageContainer}>
//         <Button
//           onPress={action('clicked-button-icon')}
//           showLeftIconImage={true}
//           buttonWidth={select(
//             'Button Width',
//             OptionButtonWidth,
//             OptionButtonWidth.Hundred_Percent_Width,
//           )}
//           buttonJustifyContent={select(
//             'Button JustifyContent',
//             OptionJustifyContent,
//             `${OptionJustifyContent.center}`,
//           )}
//           buttonPaddingVertical={number('Button Padding Vertical', 18)}
//           buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
//           buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
//           buttonBorderRadius={number('Button Border Radius', 7)}
//           iconWidth={number('Icon Size', 20)}
//           iconHeight={number('Icon Size', 20)}
//           leftIconImage={require('../../assets/resources/ic_union_white.png')}
//         />
//       </View>

//       <View>
//         <Text style={SBStyle.headerSubtextStyle}>
//           {ButtonContent.USAGE_TITLE}
//         </Text>
//         <Text style={SBStyle.headerDescription}>
//           {WithIconContent.USAGE_IMPORT}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

//         <Text style={SBStyle.headerDescription}>
//           {WithIconContent.USAGE_FULL_CODE}
//         </Text>

//         <SyntaxTwilightComponent code={WithIconCode.USAGE_CODE} />
//       </View>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* PROPS */}
//     <View>
//       <Text style={SBStyle.headerSubtextStyle}>
//         {ButtonContent.PROPS_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {ButtonContent.PROPS_INSTRUCTION}
//       </Text>

//       <View style={SBStyle.wholeViewSpacing} />

//       {/* OnPress */}
//       <CollipseTable
//         code={ButtonContent.ONPRESS}
//         typeValue={TableContent.FUNCTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_ONPRESS}
//       />

//       {/* buttonDisabled */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_DISABLED}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.FALSE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_DISABLED}
//       />

//       {/* buttonWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.YES}
//         description={ButtonContent.TEXT_BUTTON_WIDTH}
//       />

//       {/* buttonFlexDirection */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_FLEX_DIRECTION}
//         typeValue={TableContent.STYLEFLEXDIRECTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
//       />

//       {/* buttonJustifyContent */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
//         typeValue={TableContent.STYLEJUSTIFYCONTENT}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
//       />

//       {/* buttonPaddingVertical */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_VERTICAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
//       />

//       {/* buttonPaddingHorizontal */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
//       />

//       {/* buttonBackgroundColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BACKGROUND_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
//       />

//       {/* buttonBorderRadius */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_RADIUS}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
//       />

//       {/* buttonBorderWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
//       />

//       {/* buttonBorderColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
//       />

//       {/* showButtonText */}
//       <CollipseTable
//         code={ButtonContent.SHOW_BUTTON_TEXT}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
//       />

//       {/* showLeftIconImage */}
//       <CollipseTable
//         code={ButtonContent.SHOW_LEFT_ICON_IMAGE}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_LEFT_ICON_IMAGE}
//       />

//       {/* iconWidth */}
//       <CollipseTable
//         code={ButtonContent.ICON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_WIDTH}
//       />

//       {/* iconHeight */}
//       <CollipseTable
//         code={ButtonContent.ICON_HEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_HEIGHT}
//       />

//       {/* leftIconMarginRight */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_RIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_RIGHT}
//       />

//       {/* leftIconMarginBottom */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_BOTTOM}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_BOTTOM}
//       />

//       {/* leftIconImage */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_IMAGE}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_IMAGE}
//       />
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* COMPONENT CODE AND STYLESHEET */}
//     <View>
//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTCODE}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTSTYLESHEET}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

//       <View style={SBStyle.spacing} />
//     </View>
//   </View>
// ))
// .add('circle with icon', () => (
//   <View>
//     {/* HEADER */}
//     <View>
//       <Text style={SBStyle.headerTitle}>
//         {CircleWithIconContent.HEADER_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {CircleWithIconContent.HEADER_DESCRIPTION}
//       </Text>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* /USAGE */}
//     <View>
//       <View style={SBStyle.displayUsageContainer}>
//         <Button
//           onPress={action('clicked-button-circle-icon')}
//           showLeftIconImage={true}
//           buttonWidth={OptionButtonWidth.Circle_Width}
//           buttonPaddingVertical={18}
//           buttonPaddingHorizontal={18}
//           buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
//           buttonBorderRadius={30}
//           iconWidth={number('Icon Size', 20)}
//           iconHeight={number('Icon Size', 20)}
//           leftIconImage={require('../../assets/resources/ic_union_white.png')}
//         />
//       </View>

//       <View>
//         <Text style={SBStyle.headerSubtextStyle}>
//           {ButtonContent.USAGE_TITLE}
//         </Text>
//         <Text style={SBStyle.headerDescription}>
//           {CircleWithIconContent.USAGE_IMPORT}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

//         <Text style={SBStyle.headerDescription}>
//           {CircleWithIconContent.USAGE_FULL_CODE}
//         </Text>

//         <SyntaxTwilightComponent code={CircleWithIconCode.USAGE_CODE} />
//       </View>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* PROPS */}
//     <View>
//       <Text style={SBStyle.headerSubtextStyle}>
//         {ButtonContent.PROPS_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {ButtonContent.PROPS_INSTRUCTION}
//       </Text>

//       <View style={SBStyle.wholeViewSpacing} />

//       {/* OnPress */}
//       <CollipseTable
//         code={ButtonContent.ONPRESS}
//         typeValue={TableContent.FUNCTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_ONPRESS}
//       />

//       {/* buttonDisabled */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_DISABLED}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.FALSE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_DISABLED}
//       />

//       {/* buttonWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.YES}
//         description={ButtonContent.TEXT_BUTTON_WIDTH}
//       />

//       {/* buttonFlexDirection */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_FLEX_DIRECTION}
//         typeValue={TableContent.STYLEFLEXDIRECTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
//       />

//       {/* buttonJustifyContent */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
//         typeValue={TableContent.STYLEJUSTIFYCONTENT}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
//       />

//       {/* buttonPaddingVertical */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_VERTICAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
//       />

//       {/* buttonPaddingHorizontal */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
//       />

//       {/* buttonBackgroundColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BACKGROUND_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
//       />

//       {/* buttonBorderRadius */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_RADIUS}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
//       />

//       {/* buttonBorderWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
//       />

//       {/* buttonBorderColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
//       />

//       {/* showButtonText */}
//       <CollipseTable
//         code={ButtonContent.SHOW_BUTTON_TEXT}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
//       />

//       {/* showLeftIconImage */}
//       <CollipseTable
//         code={ButtonContent.SHOW_LEFT_ICON_IMAGE}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_LEFT_ICON_IMAGE}
//       />

//       {/* iconWidth */}
//       <CollipseTable
//         code={ButtonContent.ICON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_WIDTH}
//       />

//       {/* iconHeight */}
//       <CollipseTable
//         code={ButtonContent.ICON_HEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_HEIGHT}
//       />

//       {/* leftIconMarginRight */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_RIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_RIGHT}
//       />

//       {/* leftIconMarginBottom */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_BOTTOM}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_BOTTOM}
//       />

//       {/* leftIconImage */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_IMAGE}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_IMAGE}
//       />
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* COMPONENT CODE AND STYLESHEET */}
//     <View>
//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTCODE}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTSTYLESHEET}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

//       <View style={SBStyle.spacing} />
//     </View>
//   </View>
// ))
// .add('with left icon and text', () => (
//   <View>
//     {/* HEADER */}
//     <View>
//       <Text style={SBStyle.headerTitle}>
//         {WithLeftIconAndTextContent.HEADER_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {WithLeftIconAndTextContent.HEADER_DESCRIPTION}
//       </Text>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* /USAGE */}
//     <View>
//       <View style={SBStyle.displayUsageContainer}>
//         <Button
//           onPress={action('clicked-button')}
//           showLeftIconImage={true}
//           showButtonText={true}
//           buttonWidth={select(
//             'Button Width',
//             OptionButtonWidth,
//             OptionButtonWidth.Hundred_Percent_Width,
//           )}
//           buttonJustifyContent={select(
//             'Button JustifyContent',
//             OptionJustifyContent,
//             `${OptionJustifyContent.center}`,
//           )}
//           buttonPaddingVertical={number('Button Padding Vertical', 18)}
//           buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
//           buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
//           buttonBorderRadius={number('Button Border Radius', 7)}
//           buttonText={text('Button text', 'Button')}
//           fontcolor={select('Text Color', mColor, mColor.white)}
//           fontSize={select('Text Size', mFont, 16)}
//           fontFamily={select('Text Font Family', mFont, mFont.defaultType)}
//           fontWeight={select(
//             'Text Weight',
//             OptionFontWeight,
//             OptionFontWeight.Bold,
//           )}
//           iconWidth={number('Icon Size', 20)}
//           iconHeight={number('Icon Size', 20)}
//           leftIconMarginRight={number('Left Icon MarginRight', 10)}
//           leftIconImage={require('../../assets/resources/ic_union_white.png')}
//         />
//       </View>

//       <View>
//         <Text style={SBStyle.headerSubtextStyle}>
//           {ButtonContent.USAGE_TITLE}
//         </Text>
//         <Text style={SBStyle.headerDescription}>
//           {WithLeftIconAndTextContent.USAGE_IMPORT}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

//         <Text style={SBStyle.headerDescription}>
//           {WithLeftIconAndTextContent.USAGE_FULL_CODE}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.USAGE_CODE} />
//       </View>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* PROPS */}
//     <View>
//       <Text style={SBStyle.headerSubtextStyle}>
//         {ButtonContent.PROPS_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {ButtonContent.PROPS_INSTRUCTION}
//       </Text>

//       <View style={SBStyle.wholeViewSpacing} />

//       {/* OnPress */}
//       <CollipseTable
//         code={ButtonContent.ONPRESS}
//         typeValue={TableContent.FUNCTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_ONPRESS}
//       />

//       {/* buttonDisabled */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_DISABLED}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.FALSE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_DISABLED}
//       />

//       {/* buttonWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.YES}
//         description={ButtonContent.TEXT_BUTTON_WIDTH}
//       />

//       {/* buttonFlexDirection */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_FLEX_DIRECTION}
//         typeValue={TableContent.STYLEFLEXDIRECTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
//       />

//       {/* buttonJustifyContent */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
//         typeValue={TableContent.STYLEJUSTIFYCONTENT}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
//       />

//       {/* buttonPaddingVertical */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_VERTICAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
//       />

//       {/* buttonPaddingHorizontal */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
//       />

//       {/* buttonBackgroundColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BACKGROUND_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
//       />

//       {/* buttonBorderRadius */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_RADIUS}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
//       />

//       {/* buttonBorderWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
//       />

//       {/* buttonBorderColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
//       />

//       {/* showButtonText */}
//       <CollipseTable
//         code={ButtonContent.SHOW_BUTTON_TEXT}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
//       />

//       {/* buttonText */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_TEXT}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_TEXT}
//       />

//       {/* fontcolor */}
//       <CollipseTable
//         code={ButtonContent.FONT_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_COLOR}
//       />

//       {/* fontSize */}
//       <CollipseTable
//         code={ButtonContent.FONT_SIZE}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_SIZE}
//       />

//       {/* fontFamily */}
//       <CollipseTable
//         code={ButtonContent.FONT_FAMILY}
//         typeValue={TableContent.FONTFAMILY}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_FAMILY}
//       />

//       {/* fontWeight */}
//       <CollipseTable
//         code={ButtonContent.FONT_WEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_WEIGHT}
//       />

//       {/* showLeftIconImage */}
//       <CollipseTable
//         code={ButtonContent.SHOW_LEFT_ICON_IMAGE}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_LEFT_ICON_IMAGE}
//       />

//       {/* showRightIconImage */}
//       <CollipseTable
//         code={ButtonContent.SHOW_RIGHT_ICON_IMAGE}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_RIGHT_ICON_IMAGE}
//       />

//       {/* iconWidth */}
//       <CollipseTable
//         code={ButtonContent.ICON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_WIDTH}
//       />

//       {/* iconHeight */}
//       <CollipseTable
//         code={ButtonContent.ICON_HEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_HEIGHT}
//       />

//       {/* leftIconMarginRight */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_RIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_RIGHT}
//       />

//       {/* leftIconMarginBottom */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_BOTTOM}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_BOTTOM}
//       />

//       {/* leftIconImage */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_IMAGE}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_IMAGE}
//       />

//       {/* rightIconMarginLeft */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_MARGIN_LEFT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_MARGIN_LEFT}
//       />

//       {/* rightIconMarginTop */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_MARGIN_TOP}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_MARGIN_TOP}
//       />

//       {/* rightIconImage */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_IMAGE}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_IMAGE}
//       />
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* COMPONENT CODE AND STYLESHEET */}
//     <View>
//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTCODE}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTSTYLESHEET}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

//       <View style={SBStyle.spacing} />
//     </View>
//   </View>
// ))
// .add('with right icon and text', () => (
//   <View>
//     {/* HEADER */}
//     <View>
//       <Text style={SBStyle.headerTitle}>
//         {WithRightIconAndTextContent.HEADER_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {WithRightIconAndTextContent.HEADER_DESCRIPTION}
//       </Text>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* /USAGE */}
//     <View>
//       <View style={SBStyle.displayUsageContainer}>
//         <Button
//           onPress={action('clicked-button')}
//           showRightIconImage={true}
//           showButtonText={true}
//           buttonWidth={select(
//             'Button Width',
//             OptionButtonWidth,
//             OptionButtonWidth.Hundred_Percent_Width,
//           )}
//           buttonJustifyContent={select(
//             'Button JustifyContent',
//             OptionJustifyContent,
//             `${OptionJustifyContent.center}`,
//           )}
//           buttonPaddingVertical={number('Button Padding Vertical', 18)}
//           buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
//           buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
//           buttonBorderRadius={number('Button Border Radius', 7)}
//           buttonText={text('Button text', 'Button')}
//           fontcolor={select('Text Color', mColor, mColor.white)}
//           fontSize={select('Text Size', mFont, 16)}
//           fontFamily={select('Text Font Family', mFont, mFont.defaultType)}
//           fontWeight={select(
//             'Text Weight',
//             OptionFontWeight,
//             OptionFontWeight.Bold,
//           )}
//           iconWidth={number('Icon Size', 20)}
//           iconHeight={number('Icon Size', 20)}
//           rightIconMarginLeft={number('Right Icon MarginLeft', 10)}
//           rightIconImage={require('../../assets/resources/ic_union_white.png')}
//         />
//       </View>

//       <View>
//         <Text style={SBStyle.headerSubtextStyle}>
//           {ButtonContent.USAGE_TITLE}
//         </Text>
//         <Text style={SBStyle.headerDescription}>
//           {WithRightIconAndTextContent.USAGE_IMPORT}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

//         <Text style={SBStyle.headerDescription}>
//           {WithRightIconAndTextContent.USAGE_FULL_CODE}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.USAGE_CODE} />
//       </View>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* PROPS */}
//     <View>
//       <Text style={SBStyle.headerSubtextStyle}>
//         {ButtonContent.PROPS_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {ButtonContent.PROPS_INSTRUCTION}
//       </Text>

//       <View style={SBStyle.wholeViewSpacing} />

//       {/* OnPress */}
//       <CollipseTable
//         code={ButtonContent.ONPRESS}
//         typeValue={TableContent.FUNCTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_ONPRESS}
//       />

//       {/* buttonDisabled */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_DISABLED}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.FALSE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_DISABLED}
//       />

//       {/* buttonWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.YES}
//         description={ButtonContent.TEXT_BUTTON_WIDTH}
//       />

//       {/* buttonFlexDirection */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_FLEX_DIRECTION}
//         typeValue={TableContent.STYLEFLEXDIRECTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
//       />

//       {/* buttonJustifyContent */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
//         typeValue={TableContent.STYLEJUSTIFYCONTENT}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
//       />

//       {/* buttonPaddingVertical */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_VERTICAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
//       />

//       {/* buttonPaddingHorizontal */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
//       />

//       {/* buttonBackgroundColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BACKGROUND_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
//       />

//       {/* buttonBorderRadius */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_RADIUS}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
//       />

//       {/* buttonBorderWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
//       />

//       {/* buttonBorderColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
//       />

//       {/* showButtonText */}
//       <CollipseTable
//         code={ButtonContent.SHOW_BUTTON_TEXT}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
//       />

//       {/* buttonText */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_TEXT}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_TEXT}
//       />

//       {/* fontcolor */}
//       <CollipseTable
//         code={ButtonContent.FONT_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_COLOR}
//       />

//       {/* fontSize */}
//       <CollipseTable
//         code={ButtonContent.FONT_SIZE}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_SIZE}
//       />

//       {/* fontFamily */}
//       <CollipseTable
//         code={ButtonContent.FONT_FAMILY}
//         typeValue={TableContent.FONTFAMILY}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_FAMILY}
//       />

//       {/* fontWeight */}
//       <CollipseTable
//         code={ButtonContent.FONT_WEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_WEIGHT}
//       />

//       {/* showLeftIconImage */}
//       <CollipseTable
//         code={ButtonContent.SHOW_LEFT_ICON_IMAGE}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_LEFT_ICON_IMAGE}
//       />

//       {/* showRightIconImage */}
//       <CollipseTable
//         code={ButtonContent.SHOW_RIGHT_ICON_IMAGE}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_RIGHT_ICON_IMAGE}
//       />

//       {/* iconWidth */}
//       <CollipseTable
//         code={ButtonContent.ICON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_WIDTH}
//       />

//       {/* iconHeight */}
//       <CollipseTable
//         code={ButtonContent.ICON_HEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_HEIGHT}
//       />

//       {/* leftIconMarginRight */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_RIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_RIGHT}
//       />

//       {/* leftIconMarginBottom */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_BOTTOM}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_BOTTOM}
//       />

//       {/* leftIconImage */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_IMAGE}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_IMAGE}
//       />

//       {/* rightIconMarginLeft */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_MARGIN_LEFT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_MARGIN_LEFT}
//       />

//       {/* rightIconMarginTop */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_MARGIN_TOP}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_MARGIN_TOP}
//       />

//       {/* rightIconImage */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_IMAGE}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_IMAGE}
//       />
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* COMPONENT CODE AND STYLESHEET */}
//     <View>
//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTCODE}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTSTYLESHEET}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

//       <View style={SBStyle.spacing} />
//     </View>
//   </View>
// ))
// .add('with both icon and text', () => (
//   <View>
//     {/* HEADER */}
//     <View>
//       <Text style={SBStyle.headerTitle}>
//         {WithBothIconAndTextContent.HEADER_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {WithBothIconAndTextContent.HEADER_DESCRIPTION}
//       </Text>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* /USAGE */}
//     <View>
//       <View style={SBStyle.displayUsageContainer}>
//         <Button
//           onPress={action('clicked-button')}
//           showLeftIconImage={true}
//           showRightIconImage={true}
//           showButtonText={true}
//           buttonWidth={select(
//             'Button Width',
//             OptionButtonWidth,
//             OptionButtonWidth.Hundred_Percent_Width,
//           )}
//           buttonJustifyContent={select(
//             'Button JustifyContent',
//             OptionJustifyContent,
//             `${OptionJustifyContent.center}`,
//           )}
//           buttonPaddingVertical={number('Button Padding Vertical', 18)}
//           buttonPaddingHorizontal={number('Button Padding Horizontal', 20)}
//           buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
//           buttonBorderRadius={number('Button Border Radius', 7)}
//           buttonText={text('Button text', 'Button')}
//           fontcolor={select('Text Color', mColor, mColor.white)}
//           fontSize={select('Text Size', mFont, 16)}
//           fontFamily={select('Text Font Family', mFont, mFont.defaultType)}
//           fontWeight={select(
//             'Text Weight',
//             OptionFontWeight,
//             OptionFontWeight.Bold,
//           )}
//           iconWidth={number('Icon Size', 20)}
//           iconHeight={number('Icon Size', 20)}
//           leftIconMarginRight={number('Left Icon MarginRight', 10)}
//           leftIconImage={require('../../assets/resources/ic_union_white.png')}
//           rightIconMarginLeft={number('Right Icon MarginLeft', 10)}
//           rightIconImage={require('../../assets/resources/ic_union_white.png')}
//         />
//       </View>

//       <View>
//         <Text style={SBStyle.headerSubtextStyle}>
//           {ButtonContent.USAGE_TITLE}
//         </Text>
//         <Text style={SBStyle.headerDescription}>
//           {WithBothIconAndTextContent.USAGE_IMPORT}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

//         <Text style={SBStyle.headerDescription}>
//           {WithBothIconAndTextContent.USAGE_FULL_CODE}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.USAGE_CODE} />
//       </View>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* PROPS */}
//     <View>
//       <Text style={SBStyle.headerSubtextStyle}>
//         {ButtonContent.PROPS_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {ButtonContent.PROPS_INSTRUCTION}
//       </Text>

//       <View style={SBStyle.wholeViewSpacing} />

//       {/* OnPress */}
//       <CollipseTable
//         code={ButtonContent.ONPRESS}
//         typeValue={TableContent.FUNCTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_ONPRESS}
//       />

//       {/* buttonDisabled */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_DISABLED}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.FALSE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_DISABLED}
//       />

//       {/* buttonWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.YES}
//         description={ButtonContent.TEXT_BUTTON_WIDTH}
//       />

//       {/* buttonFlexDirection */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_FLEX_DIRECTION}
//         typeValue={TableContent.STYLEFLEXDIRECTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
//       />

//       {/* buttonJustifyContent */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
//         typeValue={TableContent.STYLEJUSTIFYCONTENT}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
//       />

//       {/* buttonPaddingVertical */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_VERTICAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
//       />

//       {/* buttonPaddingHorizontal */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
//       />

//       {/* buttonBackgroundColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BACKGROUND_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
//       />

//       {/* buttonBorderRadius */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_RADIUS}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
//       />

//       {/* buttonBorderWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
//       />

//       {/* buttonBorderColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
//       />

//       {/* showButtonText */}
//       <CollipseTable
//         code={ButtonContent.SHOW_BUTTON_TEXT}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
//       />

//       {/* buttonText */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_TEXT}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_TEXT}
//       />

//       {/* fontcolor */}
//       <CollipseTable
//         code={ButtonContent.FONT_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_COLOR}
//       />

//       {/* fontSize */}
//       <CollipseTable
//         code={ButtonContent.FONT_SIZE}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_SIZE}
//       />

//       {/* fontFamily */}
//       <CollipseTable
//         code={ButtonContent.FONT_FAMILY}
//         typeValue={TableContent.FONTFAMILY}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_FAMILY}
//       />

//       {/* fontWeight */}
//       <CollipseTable
//         code={ButtonContent.FONT_WEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_WEIGHT}
//       />

//       {/* showLeftIconImage */}
//       <CollipseTable
//         code={ButtonContent.SHOW_LEFT_ICON_IMAGE}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_LEFT_ICON_IMAGE}
//       />

//       {/* showRightIconImage */}
//       <CollipseTable
//         code={ButtonContent.SHOW_RIGHT_ICON_IMAGE}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_RIGHT_ICON_IMAGE}
//       />

//       {/* iconWidth */}
//       <CollipseTable
//         code={ButtonContent.ICON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_WIDTH}
//       />

//       {/* iconHeight */}
//       <CollipseTable
//         code={ButtonContent.ICON_HEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_ICON_HEIGHT}
//       />

//       {/* leftIconMarginRight */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_RIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_RIGHT}
//       />

//       {/* leftIconMarginBottom */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_MARGIN_BOTTOM}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_MARGIN_BOTTOM}
//       />

//       {/* leftIconImage */}
//       <CollipseTable
//         code={ButtonContent.LEFT_ICON_IMAGE}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_LEFT_ICON_IMAGE}
//       />

//       {/* rightIconMarginLeft */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_MARGIN_LEFT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_MARGIN_LEFT}
//       />

//       {/* rightIconMarginTop */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_MARGIN_TOP}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_MARGIN_TOP}
//       />

//       {/* rightIconImage */}
//       <CollipseTable
//         code={ButtonContent.RIGHT_ICON_IMAGE}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_RIGHT_ICON_IMAGE}
//       />
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* COMPONENT CODE AND STYLESHEET */}
//     <View>
//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTCODE}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTSTYLESHEET}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

//       <View style={SBStyle.spacing} />
//     </View>
//   </View>
// ))
// .add('card with icon and text', () => (
//   <View>
//     {/* HEADER */}
//     <View>
//       <Text style={SBStyle.headerTitle}>
//         {CardWithIconAndTextContent.HEADER_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {CardWithIconAndTextContent.HEADER_DESCRIPTION}
//       </Text>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* /USAGE */}
//     <View>
//       <View style={SBStyle.displayUsageContainer}>
//         <Button
//           onPress={action('clicked-button')}
//           showLeftIconImage={true}
//           showButtonText={true}
//           buttonWidth={OptionButtonWidth.Thirty_Five_Percent_Width}
//           buttonFlexDirection={OptionFlexDirection.column}
//           buttonPaddingVertical={number('Button Padding Vertical', 30)}
//           buttonPaddingHorizontal={number('Button Padding Horizontal', 10)}
//           buttonBackgroundColor={select('Button Color', mColor, mColor.red)}
//           buttonBorderRadius={number('Button Border Radius', 7)}
//           buttonText={text('Button text', 'Button')}
//           fontcolor={select('Text Color', mColor, mColor.white)}
//           fontSize={select('Text Size', mFont, 16)}
//           fontFamily={select('Text Font Family', mFont, mFont.defaultType)}
//           fontWeight={select(
//             'Text Weight',
//             OptionFontWeight,
//             OptionFontWeight.Bold,
//           )}
//           iconWidth={number('Icon Size', 30)}
//           iconHeight={number('Icon Size', 30)}
//           leftIconMarginBottom={number('Left Icon MarginBottom', 10)}
//           leftIconImage={require('../../assets/resources/ic_union_white.png')}
//         />
//       </View>

//       <View>
//         <Text style={SBStyle.headerSubtextStyle}>
//           {ButtonContent.USAGE_TITLE}
//         </Text>
//         <Text style={SBStyle.headerDescription}>
//           {CardWithIconAndTextContent.USAGE_IMPORT}
//         </Text>

//         <SyntaxTwilightComponent code={ButtonCode.IMPORT_CODE} />

//         <Text style={SBStyle.headerDescription}>
//           {CardWithIconAndTextContent.USAGE_FULL_CODE}
//         </Text>

//         <SyntaxTwilightComponent code={WithTextCode.USAGE_CODE} />
//       </View>
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* PROPS */}
//     <View>
//       <Text style={SBStyle.headerSubtextStyle}>
//         {ButtonContent.PROPS_TITLE}
//       </Text>

//       <Text style={SBStyle.headerDescription}>
//         {ButtonContent.PROPS_INSTRUCTION}
//       </Text>

//       <View style={SBStyle.wholeViewSpacing} />

//       {/* OnPress */}
//       <CollipseTable
//         code={ButtonContent.ONPRESS}
//         typeValue={TableContent.FUNCTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_ONPRESS}
//       />

//       {/* buttonDisabled */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_DISABLED}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.FALSE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_DISABLED}
//       />

//       {/* buttonWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.YES}
//         description={ButtonContent.TEXT_BUTTON_WIDTH}
//       />

//       {/* buttonFlexDirection */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_FLEX_DIRECTION}
//         typeValue={TableContent.STYLEFLEXDIRECTION}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_FLEX_DIRECTION}
//       />

//       {/* buttonJustifyContent */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_JUSTIFY_CONTENT}
//         typeValue={TableContent.STYLEJUSTIFYCONTENT}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_JUSTIFY_CONTENT}
//       />

//       {/* buttonPaddingVertical */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_VERTICAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_VERTICAL}
//       />

//       {/* buttonPaddingHorizontal */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_PADDING_HORIZONTAL}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_PADDING_HORIZONTAL}
//       />

//       {/* buttonBackgroundColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BACKGROUND_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BACKGROUND_COLOR}
//       />

//       {/* buttonBorderRadius */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_RADIUS}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_BUTTON_BORDER_RADIUS}
//       />

//       {/* buttonBorderWidth */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_WIDTH}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_WIDTH}
//       />

//       {/* buttonBorderColor */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_BORDER_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_BORDER_COLOR}
//       />

//       {/* showButtonText */}
//       <CollipseTable
//         code={ButtonContent.SHOW_BUTTON_TEXT}
//         typeValue={TableContent.BOOLEAN}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.OPTIONAL}
//         description={ButtonContent.TEXT_SHOW_BUTTON_TEXT}
//       />

//       {/* buttonText */}
//       <CollipseTable
//         code={ButtonContent.BUTTON_TEXT}
//         typeValue={TableContent.STRING}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_BUTTON_TEXT}
//       />

//       {/* fontcolor */}
//       <CollipseTable
//         code={ButtonContent.FONT_COLOR}
//         typeValue={TableContent.COLOR}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_COLOR}
//       />

//       {/* fontSize */}
//       <CollipseTable
//         code={ButtonContent.FONT_SIZE}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_SIZE}
//       />

//       {/* fontFamily */}
//       <CollipseTable
//         code={ButtonContent.FONT_FAMILY}
//         typeValue={TableContent.FONTFAMILY}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_FAMILY}
//       />

//       {/* fontWeight */}
//       <CollipseTable
//         code={ButtonContent.FONT_WEIGHT}
//         typeValue={TableContent.NUMBER}
//         defaultValue={TableContent.NONE}
//         requiredValue={TableContent.ONLY_REQUIRED}
//         description={ButtonContent.TEXT_FONT_WEIGHT}
//       />
//     </View>

//     <View style={SBStyle.hairline} />

//     {/* COMPONENT CODE AND STYLESHEET */}
//     <View>
//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTCODE}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_CODE} />

//       <Text style={SBStyle.componentHeaderStyle}>
//         {ButtonContent.COMPONENTSTYLESHEET}
//       </Text>

//       <SyntaxDarculaComponent code={ButtonCode.COMPONENT_STYLESHEET} />

//       <View style={SBStyle.spacing} />
//     </View>
//   </View>
// ));
