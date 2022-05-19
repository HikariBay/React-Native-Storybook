export const KnobsGroup = {
  BUTTON: 'Button',
  TEXT: 'Text',
  ICON_SIZE: 'Icon Size',
  ICON: 'Icon',
  LEFT_ICON: 'Left Icon',
  RIGHT_ICON: 'Right Icon',
  STRING: 'String',
};

export const QuestionContent = {
  WHAT_IS_BUTTON: 'What is Button?',
  BUTTON_DESCRIPTION:
    'Buttons allow users to take actions, and make choices, with a single tap.',
  WHERE_TO_USE_BUTTON:
    'Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:',
  BULLET_MODAL_WINDOW: 'Modal windows',
  BULLET_FORM: 'Forms',
  BULLET_CARDS: 'Cards',
  BULLET_TOOLBARS: 'Toolbars',
};

export const TableContent = {
  TITLE_TYPE: 'Type',
  TITLE_DEFAULT: 'Default',
  TITLE_REQUIRED: 'Required',
  TITLE_DESCRIPTION: 'Description',

  FUNCTION: 'function',
  STRING: 'string',
  BOOLEAN: 'boolean',
  NUMBER: 'number',
  COLOR: 'color',
  FONTFAMILY: 'fontFamily style',
  STYLEFLEXDIRECTION: 'flexDirection Style',
  STYLEJUSTIFYCONTENT: 'justifyContent Style',

  NONE: 'none',
  TRUE: 'true',
  FALSE: 'false',
  HUNDRED_PRECENT: '100%',
  ZERO: 0,
  ROW: 'row',
  CENTER: 'center',
  PADDINGVERTICAL: 18,
  PADDING_HORIZONTAL: 20,
  RADIUS: 7,
  BUTTONTEXT: 'Button Text',
  FONTSIZE: 16,
  FONTWEIGHT: 'bold',
  ICON_SIZE: 20,

  OPTIONAL: 'optional',
  YES: 'yes',
  NO: 'no',
  ONLY_REQUIRED: 'only required',
};

export const FeaturePropsContent = {
  FEATURE_BUTTON: 'Button Feature',
  FEATURE_TEXT: 'Text Feature',
  FEATURE_LEFT_ICON_FEATURE: 'Left Icon Feature',
  FEATURE_RIGHT_ICON_FEATURE: 'Right Icon Feature',

  ONPRESS: 'onPress = { function }',
  TEXT_ONPRESS: 'Use when it was needed to call a function when clicked.',

  BUTTON_DISABLED: 'buttonDisabled = {true|false}',
  TEXT_BUTTON_DISABLED: 'If true, it will disable the button',

  BUTTON_WIDTH: 'buttonWidth = { number | perecent }',
  TEXT_BUTTON_WIDTH:
    "Set width of the button by inserting number or percent inside\n\nnumber | '100%' | '50%' | 15%",

  BUTTON_HEIGHT: 'buttonHeight = { number }',
  TEXT_BUTTON_HEIGHT: 'Set height of the button by inserting number',

  BUTTON_FLEX_DIRECTION: 'buttonFlexDirection = { flexDirection }',
  TEXT_BUTTON_FLEX_DIRECTION:
    'Set format of display by inserting in the CSS value inside\n\nrow | row-reverse | column | column-reverse',

  BUTTON_JUSTIFY_CONTENT: 'buttonJustifyContent = { justifyContent }',
  TEXT_BUTTON_JUSTIFY_CONTENT:
    'Set format of display by inserting in the CSS value inside\n\nflex-start | flex-end | center | space-between | space-around | space-evenly',

  BUTTON_PADDING_VERTICAL: 'buttonPaddingVertical = { number }',
  TEXT_BUTTON_PADDING_VERTICAL:
    'Set padding vertical of the button by inserting number inside',

  BUTTON_PADDING_HORIZONTAL: 'buttonPaddingHorizontal = { number }',
  TEXT_BUTTON_PADDING_HORIZONTAL:
    'Set padding horizontal of the button by inserting number inside',

  BUTTON_BACKGROUND_COLOR: 'buttonBackgroundColor = { color HEX }',
  TEXT_BUTTON_BACKGROUND_COLOR:
    'Set color of the button by inserting color HEX inside',

  BUTTON_BORDER_RADIUS: 'buttonBorderRadius = { number }',
  TEXT_BUTTON_BORDER_RADIUS:
    'Set raduis of the button by inserting number inside',

  BUTTON_BORDER_WIDTH: 'buttonBorderWidth = { number }',
  TEXT_BUTTON_BORDER_WIDTH:
    'Set border width of the button by inserting number inside\n\nOnly required when buttonBorderColor is used',

  BUTTON_BORDER_COLOR: 'buttonBorderColor = { color HEX }',
  TEXT_BUTTON_BORDER_COLOR:
    'Set border color of the button by inserting color HEX inside\n\nOnly required when buttonBorderWidth is used',

  SHOW_BUTTON_TEXT: 'showButtonText = {true|false}',
  TEXT_SHOW_BUTTON_TEXT: 'If true, it will show the button text',

  BUTTON_TEXT: 'buttonText = { string }',
  TEXT_BUTTON_TEXT: 'If showButtonText is true, set text inside',

  FONT_COLOR: 'fontcolor = { color HEX }',
  TEXT_FONT_COLOR:
    'If showButtonText is true, set color of the text by inserting color HEX inside',

  FONT_SIZE: 'fontSize = { number }',
  TEXT_FONT_SIZE:
    'If showButtonText is true, set color of the text by inserting color HEX inside',

  FONT_FAMILY: 'fontFamily = { fontFamily }',
  TEXT_FONT_FAMILY:
    'If showButtonText is true, set fontFamily of the text by inserting font style',

  FONT_WEIGHT: 'fontWeight = { fontWeight }',
  TEXT_FONT_WEIGHT:
    'If showButtonText is true, set fontWeight of the text by inserting weight\n\n100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900',

  SHOW_LEFT_ICON_IMAGE: 'showLeftIconImage = {true|false}',
  TEXT_SHOW_LEFT_ICON_IMAGE: 'If true, it will shown icon at the left side.',

  SHOW_RIGHT_ICON_IMAGE: 'showRightIconImage = {true|false}',
  TEXT_SHOW_RIGHT_ICON_IMAGE: 'If true, it will shown icon at the right side.',

  ICON_WIDTH: 'iconWidth = { number }',
  TEXT_ICON_WIDTH:
    'If showLeftIconImage or showRightIconImage is true, set width of the icon by inserting number',

  ICON_HEIGHT: 'iconHeight = { number }',
  TEXT_ICON_HEIGHT:
    'If showLeftIconImage or showRightIconImage is true, set height of the icon by inserting number',

  LEFT_ICON_MARGIN_RIGHT: 'leftIconMarginRight = { number }',
  TEXT_LEFT_ICON_MARGIN_RIGHT:
    'If showLeftIconImage is true, set marginRight of the left icon by inserting number',

  LEFT_ICON_MARGIN_BOTTOM: 'leftIconMarginBottom = { number }',
  TEXT_LEFT_ICON_MARGIN_BOTTOM:
    'If showLeftIconImage is true, set marginBottom of the left icon by inserting number',

  LEFT_ICON_IMAGE: 'leftIconImage = { require( "Image URL" ) }',
  TEXT_LEFT_ICON_IMAGE:
    'If showLeftIconImage is true, set image of the left icon by inserting image url',

  RIGHT_ICON_MARGIN_LEFT: 'rightIconMarginLeft = { number }',
  TEXT_RIGHT_ICON_MARGIN_LEFT:
    'If showRightIconImage is true, set marginLeft of the right icon by inserting number',

  RIGHT_ICON_MARGIN_TOP: 'rightIconMarginTop = { number }',
  TEXT_RIGHT_ICON_MARGIN_TOP:
    'If showRightIconImage is true, set marginTop of the right icon by inserting number',

  RIGHT_ICON_IMAGE: 'rightIconImage = { require( "Image URL" ) }',
  TEXT_RIGHT_ICON_IMAGE:
    'If showRightIconImage is true, set image of the right icon by inserting image url',
};

export const ButtonStoriesContent = {
  COMPONENTCODE: 'Component Code  ( button.js )',
  COMPONENTSTYLESHEET: 'Component StyleSheet  ( button.js )',
  USAGE_TITLE: 'Usage',
  IMPORT_CODE: `import Button 
from '../../components/button/button';`,
  PROPS_TITLE: 'Props',
  PROPS_INSTRUCTION: `The props was separate with different features.
\nClick on the feature button then the prop inside to know more information about it.`,
  COMPONENT_CODE: `import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';    

const Button = ({
  onPress = () => {},

  buttonDisabled = false,
  buttonWidth,
  buttonHeight,
  buttonFlexDirection,
  buttonJustifyContent,
  buttonPaddingVertical,
  buttonPaddingHorizontal,
  buttonBackgroundColor,
  buttonBorderRadius,
  buttonBorderWidth,
  buttonBorderColor,

  showButtonText = false,
  buttonText,
  fontcolor,
  fontSize,
  fontFamily,
  fontWeight,

  showLeftIconImage = false,
  showRightIconImage = false,
  iconWidth,
  iconHeight,
  leftIconMarginRight,
  leftIconMarginBottom,
  leftIconImage,
  rightIconMarginLeft,
  rightIconMarginTop,
  rightIconImage,
}) => {
  return (
    <TouchableOpacity
      disabled={buttonDisabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          width: buttonWidth,
          flexDirection: buttonFlexDirection,
          justifyContent: buttonJustifyContent,
          paddingVertical: buttonPaddingVertical,
          paddingHorizontal: buttonPaddingHorizontal,
          backgroundColor: buttonBackgroundColor,
          borderRadius: buttonBorderRadius,
          borderWidth: buttonBorderWidth,
          borderColor: buttonBorderColor,
        },
      ]}>
      {showLeftIconImage && (
        <Image
          style={[
            styles.icon,
            {
              width: iconWidth,
              height: iconHeight,
              marginRight: leftIconMarginRight,
              marginBottom: leftIconMarginBottom,
            },
          ]}
          source={leftIconImage}
        />
      )}

      {showButtonText && (
        <Text
          style={[
            styles.buttonText,
            {
              color: fontcolor,
              fontSize: fontSize,
              fontFamily: fontFamily,
              fontWeight: fontWeight,
            },
          ]}>
          {buttonText}
        </Text>
      )}

      {showRightIconImage && (
        <Image
          style={[
            styles.icon,
            {
              width: iconWidth,
              height: iconHeight,
              marginLeft: rightIconMarginLeft,
              marginTop: rightIconMarginTop,
            },
          ]}
          source={rightIconImage}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});`,

  S0_HEADER_TITLE: 'Design Custom Button',
  S0_HEADER_DESCRIPTION: `Design button to use in the project.

If still unsure, you can see more details in the props section below.`,
  S0_USAGE_IMPORT: 'Import the button component in the script',
  S0_USAGE_FULL_CODE:
    'Full usage code of the button, it can be also be reuse to set custom components with it.',
  S0_USAGE_CODE: `<Button
  onPress={function}

  buttonDisabled={true|false}
  buttonWidth={number|'perecentage'}
  buttonHeight={number}
  buttonFlexDirection={'row'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={number}
  buttonPaddingHorizontal={number}
  buttonBackgroundColor={'color HEX'} 
  buttonBorderRadius={number}
  buttonBorderWidth={number}
  buttonBorderColor={'color HEX'} 

  showButtonText={true|false}
  buttonText={'string'}
  fontcolor={'color HEX'} 
  fontSize={number}
  fontFamily={'fontfamily style'}
  fontWeight={'bold'}

  showLeftIconImage={true|false}
  showRightIconImage={true|false}  
  iconWidth={number}
  iconHeight={number}
  leftIconMarginRight={number}
  leftIconMarginBottom={number}
  leftIconImage={require('URL')}     
  rightIconMarginLeft={number}
  rightIconMarginTop={number}
  rightIconImage={require('URL')}
/>`,

  S1_HEADER_TITLE: 'Button Component',
  S1_HEADER_DESCRIPTION:
    'This page store button component code, which is use for all the button stories.',

  S2_HEADER_TITLE: 'Disabled',
  S2_HEADER_DESCRIPTION: `This page store two buttons:\n
    \u2B24    Disabled Button
    \u2B24    Outline Disabled Button
`,
  S2_USAGE_IMPORT: 'Import the button component in the script',
  S2_USAGE_FULL_CODE: 'Use this code to disabled button.',
  S2_USAGE_CODE: `<Button
  buttonDisabled={true} 
  ...
/>`,

  S3_HEADER_TITLE: 'With Outline',
  S3_HEADER_DESCRIPTION: `This page store one button:\n
    \u2B24    Outline Button
\n\nUse addons knobs to test out if you are unsure.`,
  S3_USAGE_IMPORT: 'Import the button component in the script',
  S3_USAGE_FULL_CODE: 'Use this code to add outline on button.',
  S3_USAGE_CODE: `<Button
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
  ...
/>`,

  S4_HEADER_TITLE: 'With Text',
  S4_HEADER_DESCRIPTION: `This page store two buttons:\n
    \u2B24    Default Button
    \u2B24    Outline Button
\n\nUse addons knobs to test out if you are unsure.`,
  S4_USAGE_IMPORT: 'Import the button component in the script',
  S4_USAGE_FULL_CODE: 'Usage codes of the buttons that was display above.',
  S4_USAGE_CODE: `<Button
  onPress={function}
  buttonWidth={'100%'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={7}
  showButtonText={true}
  buttonText={'Default Button'}
  fontcolor={mColor.white}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'bold'}

  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>`,

  S5_HEADER_TITLE: 'With Icon',
  S5_HEADER_DESCRIPTION: `This page store two buttons:\n
    \u2B24    Default Button
    \u2B24    Outline Button
\n\nUse addons knobs to test out if you are unsure.`,
  S5_USAGE_IMPORT: 'Import the button component in the script',
  S5_USAGE_FULL_CODE: 'Usage codes of the buttons that was display above.',
  S5_USAGE_CODE: `<Button
  onPress={function}
  buttonWidth={'100%'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={7}
  showLeftIconImage={true}
  iconWidth={20}
  iconHeight={20}
  leftIconImage={require('../../assets/resources/ic_union_white.png')}   
  
  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>`,

  S6_HEADER_TITLE: 'Circle With Icon',
  S6_HEADER_DESCRIPTION: `This page store four buttons with different sizes and pattern:\n
    \u2B24    Small Circle Button
    \u2B24    Big Circle Button
    \u2B24    Outline Small Circle Button
    \u2B24    Outline Big Circle Button
\n\nUse addons knobs to test out if you are unsure.`,
  S6_USAGE_IMPORT: 'Import the button component in the script',
  S6_USAGE_FULL_CODE: 'Usage codes of the buttons that was display above.',
  S6_USAGE_CODE: `// Small Circle && Outline Button
<Button
  onPress={function}
  buttonWidth={65}
  buttonHeight={65}
  buttonPaddingVertical={15}
  buttonPaddingHorizontal={15}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={150}
  showLeftIconImage={true}
  iconWidth={30}
  iconHeight={30}
  leftIconImage={require('../../assets/resources/ic_flash.png')}   
  
  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>

// Big Circle && Outline Button
<Button
  onPress={function}
  buttonWidth={65}
  buttonHeight={65}
  buttonPaddingVertical={15}
  buttonPaddingHorizontal={15}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={150}
  showLeftIconImage={true}
  iconWidth={40}
  iconHeight={40}
  leftIconImage={require('../../assets/resources/ic_flash.png')}    

  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>`,

  S7_HEADER_TITLE: 'With Left Icon, Text',
  S7_HEADER_DESCRIPTION: `This page store two buttons:\n
    \u2B24    Default Button
    \u2B24    Outline Button
\n\nUse addons knobs to test out if you are unsure.`,
  S7_USAGE_IMPORT: 'Import the button component in the script',
  S7_USAGE_FULL_CODE: 'Usage codes of the buttons that was display above.',
  S7_USAGE_CODE: `<Button
  onPress={function}
  buttonWidth={'100%'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={7}
  showButtonText={true}
  buttonText={'Default Button'}
  fontcolor={mColor.white}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'bold'}
  showLeftIconImage={true}
  iconWidth={20}
  iconHeight={20}
  leftIconMarginRight={10}
  leftIconImage={require('../../assets/resources/ic_union_white.png')}    
  
  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>`,

  S8_HEADER_TITLE: 'With Right Icon, Text',
  S8_HEADER_DESCRIPTION: `This page store two buttons:\n
    \u2B24    Default Button
    \u2B24    Outline Button
\n\nUse addons knobs to test out if you are unsure.`,
  S8_USAGE_IMPORT: 'Import the button component in the script',
  S8_USAGE_FULL_CODE: 'Usage codes of the buttons that was display above.',
  S8_USAGE_CODE: `<Button
  onPress={function}
  buttonWidth={'100%'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={7}
  showButtonText={true}
  buttonText={'Default Button'}
  fontcolor={mColor.white}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'bold'}
  showRightIconImage={true}
  iconWidth={20}
  iconHeight={20}
  rightIconMarginLeft={10}
  rightIconImage={require('../../assets/resources/ic_union_white.png')}    
  
  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>`,

  S9_HEADER_TITLE: 'With Both Icon, Text',
  S9_HEADER_DESCRIPTION: `This page store two buttons:\n
    \u2B24    Default Button
    \u2B24    Outline Button
\n\nUse addons knobs to test out if you are unsure.`,
  S9_USAGE_IMPORT: 'Import the button component in the script',
  S9_USAGE_FULL_CODE: 'Usage codes of the buttons that was display above.',
  S9_USAGE_CODE: `<Button
  onPress={function}
  buttonWidth={'100%'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={7}
  showButtonText={true}
  buttonText={'Default Button'}
  fontcolor={mColor.white}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'bold'}
  showLeftIconImage={true}
  showRightIconImage={true}
  iconWidth={20}
  iconHeight={20}
  leftIconMarginRight={10}
  rightIconMarginLeft={10}
  leftIconImage={require('../../assets/resources/ic_union_white.png')}
  rightIconImage={require('../../assets/resources/ic_union_white.png')}    

  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>`,

  S10_HEADER_TITLE: 'Card With Top Icon, Text',
  S10_HEADER_DESCRIPTION: `This page store two buttons:\n
    \u2B24    Default Button
    \u2B24    Outline Button
\n\nUse addons knobs to test out if you are unsure.`,
  S10_USAGE_IMPORT: 'Import the button component in the script',
  S10_USAGE_FULL_CODE: 'Usage codes of the buttons that was display above.',
  S10_USAGE_CODE: `// Default Button
<Button
  onPress={function}
  buttonWidth={'100%'}
  buttonFlexDirection={'column'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={7}
  showButtonText={true}
  buttonText={'Default Button'}
  fontcolor={mColor.white}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'bold'}
  showLeftIconImage={true}
  iconWidth={20}
  iconHeight={20}
  leftIconMarginBottom={10}
  leftIconImage={require('../../assets/resources/ic_union_white.png')}    

  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>`,

  S11_HEADER_TITLE: 'Card With Bottom Icon, Text',
  S11_HEADER_DESCRIPTION: `This page store two buttons:\n
    \u2B24    Default Button
    \u2B24    Outline Button
\n\nUse addons knobs to test out if you are unsure.`,
  S11_USAGE_IMPORT: 'Import the button component in the script',
  S11_USAGE_FULL_CODE: 'Usage codes of the buttons that was display above.',
  S11_USAGE_CODE: `// Default Button
<Button
  onPress={function}
  buttonWidth={'100%'}
  buttonFlexDirection={'column'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={mColor.blue} 
  buttonBorderRadius={7}
  showButtonText={true}
  buttonText={'Default Button'}
  fontcolor={mColor.white}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'bold'}
  showRightIconImage={true}
  iconWidth={20}
  iconHeight={20}
  rightIconMarginTop={10}
  rightIconImage={require('../../assets/resources/ic_union_white.png')}    

  // Add these link to enable outline
  buttonBorderWidth={3}
  buttonBorderColor={mColor.CoolGrey040}
/>`,
};
