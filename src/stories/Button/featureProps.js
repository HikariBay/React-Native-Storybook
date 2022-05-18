import React from 'react';
import {View, Text} from 'react-native';

// Styles
import {SBStyle} from '../decorators';

// Strings
import {TableContent, FeaturePropsContent} from './contentStrings';

// SB Components
import CollipseTable from '../../components/SB/collipseTable';
import SeparateCollipse from '../../components/SB/separateCollipse';

export const ButtonFeature = () => {
  return (
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
    </View>
  );
};

export const TextFeature = () => {
  return (
    <View>
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
  );
};

export const LeftIconFeature = () => {
  return (
    <View>
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
    </View>
  );
};

export const RightIconFeature = () => {
  return (
    <View>
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
  );
};
