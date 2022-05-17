/* eslint-disable quotes */

export const TableContent = {
  TITLE_TYPE: `Type`,
  TITLE_DEFAULT: `Default`,
  TITLE_REQUIRED: `Required`,
  TITLE_DESCRIPTION: `Description`,

  FUNCTION: `function`,
  STRING: `string`,
  BOOLEAN: `boolean`,
  NUMBER: `number`,
  COLOR: `color`,
  FONTFAMILY: `fontFamily style`,
  STYLEFLEXDIRECTION: `flexDirection Style`,
  STYLEJUSTIFYCONTENT: `justifyContent Style`,

  NONE: `none`,
  TRUE: `true`,
  FALSE: `false`,

  OPTIONAL: `optional`,
  YES: `yes`,
  NO: `no`,
  ONLY_REQUIRED: `only required`,
};

export const ButtonContent = {
  HEADER_TITLE: `Button`,
  HEADER_DESCRIPTION: `This page store button component, where you can test out props.`,

  WHAT_IS_BUTTON: `What is Button?`,
  BUTTON_DESCRIPTION: `Buttons allow users to take actions, and make choices, with a single tap.`,
  WHERE_TO_USE_BUTTON: `Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:`,
  MODAL_WINDOW: `Modal windows`,
  FORM: `Forms`,
  CARDS: `Cards`,
  TOOLBARS: `Toolbars`,

  USAGE_TITLE: `Usage`,
  USAGE_IMPORT: `Import the button component in the script`,
  USAGE_FULL_CODE: `Full usage code of the button, it can be also be use to set custom Button components or can just use the code shown below.`,

  PROPS_TITLE: `Props`,
  PROPS_INSTRUCTION: `Click on the syntax, to show details of the prop`,

  ONPRESS: `onPress = { function }`,
  TEXT_ONPRESS: `Use when it was needed to call a function when clicked.`,

  BUTTON_DISABLED: `buttonDisabled`,
  TEXT_BUTTON_DISABLED: `If true, it will disable the button`,

  BUTTON_WIDTH: `buttonWidth = { number | perecent }`,
  TEXT_BUTTON_WIDTH: `Set width of the button by inserting number or percent inside\n\nnumber | '100%' | '50%' | 15%`,

  BUTTON_FLEX_DIRECTION: `buttonFlexDirection = { flexDirection }`,
  TEXT_BUTTON_FLEX_DIRECTION: `Set format of display by inserting in the CSS value inside\n\nrow | row-reverse | column | column-reverse`,

  BUTTON_JUSTIFY_CONTENT: `buttonJustifyContent = { justifyContent }`,
  TEXT_BUTTON_JUSTIFY_CONTENT: `Set format of display by inserting in the CSS value inside\n\nflex-start | flex-end | center | space-between | space-around | space-evenly`,

  BUTTON_PADDING_VERTICAL: `buttonPaddingVertical = { number }`,
  TEXT_BUTTON_PADDING_VERTICAL: `Set padding vertical of the button by inserting number inside`,

  BUTTON_PADDING_HORIZONTAL: `buttonPaddingHorizontal = { number }`,
  TEXT_BUTTON_PADDING_HORIZONTAL: `Set padding horizontal of the button by inserting number inside`,

  BUTTON_BACKGROUND_COLOR: `buttonBackgroundColor = { color HEX }`,
  TEXT_BUTTON_BACKGROUND_COLOR: `Set color of the button by inserting color HEX inside`,

  BUTTON_BORDER_RADIUS: `buttonBorderRadius = { number }`,
  TEXT_BUTTON_BORDER_RADIUS: `Set raduis of the button by inserting number inside`,

  BUTTON_BORDER_WIDTH: `buttonBorderWidth = { number }`,
  TEXT_BUTTON_BORDER_WIDTH: `Set border width of the button by inserting number inside\n\nOnly required when buttonBorderColor is used`,

  BUTTON_BORDER_COLOR: `buttonBorderColor = { color HEX }`,
  TEXT_BUTTON_BORDER_COLOR: `Set border color of the button by inserting color HEX inside\n\nOnly required when buttonBorderWidth is used`,

  SHOW_BUTTON_TEXT: 'showButtonText',
  TEXT_SHOW_BUTTON_TEXT: `If true, it will show the button text`,

  BUTTON_TEXT: `buttonText = { string }`,
  TEXT_BUTTON_TEXT: `If showButtonText is true, set text inside`,

  FONT_COLOR: `fontcolor = { color HEX }`,
  TEXT_FONT_COLOR: `If showButtonText is true, set color of the text by inserting color HEX inside`,

  FONT_SIZE: `fontSize = { number }`,
  TEXT_FONT_SIZE: `If showButtonText is true, set color of the text by inserting color HEX inside`,

  FONT_FAMILY: `fontFamily = { fontFamily }`,
  TEXT_FONT_FAMILY: `If showButtonText is true, set fontFamily of the text by inserting font style`,

  FONT_WEIGHT: `fontWeight = { fontWeight }`,
  TEXT_FONT_WEIGHT: `If showButtonText is true, set fontWeight of the text by inserting weight\n\n100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900`,

  SHOW_LEFT_ICON_IMAGE: `showLeftIconImage`,
  TEXT_SHOW_LEFT_ICON_IMAGE: `If true, it will shown icon at the left side.`,

  SHOW_RIGHT_ICON_IMAGE: `showRightIconImage`,
  TEXT_SHOW_RIGHT_ICON_IMAGE: `If true, it will shown icon at the right side.`,

  ICON_WIDTH: `iconWidth = { number }`,
  TEXT_ICON_WIDTH: `If showLeftIconImage or showRightIconImage is true, set width of the icon by inserting number`,

  ICON_HEIGHT: `iconHeight = { number }`,
  TEXT_ICON_HEIGHT: `If showLeftIconImage or showRightIconImage is true, set height of the icon by inserting number`,

  LEFT_ICON_MARGIN_RIGHT: `leftIconMarginRight = { number }`,
  TEXT_LEFT_ICON_MARGIN_RIGHT: `If showLeftIconImage is true, set marginRight of the left icon by inserting number`,

  LEFT_ICON_MARGIN_BOTTOM: `leftIconMarginBottom = { number }`,
  TEXT_LEFT_ICON_MARGIN_BOTTOM: `If showLeftIconImage is true, set marginBottom of the left icon by inserting number`,

  LEFT_ICON_IMAGE: `leftIconImage = { require( "Image URL" ) }`,
  TEXT_LEFT_ICON_IMAGE: `If showLeftIconImage is true, set image of the left icon by inserting image url`,

  RIGHT_ICON_MARGIN_LEFT: `rightIconMarginLeft = { number }`,
  TEXT_RIGHT_ICON_MARGIN_LEFT: `If showRightIconImage is true, set marginLeft of the right icon by inserting number`,

  RIGHT_ICON_MARGIN_TOP: `rightIconMarginTop = { number }`,
  TEXT_RIGHT_ICON_MARGIN_TOP: `If showRightIconImage is true, set marginTop of the right icon by inserting number`,

  RIGHT_ICON_IMAGE: `rightIconImage = { require( "Image URL" ) }`,
  TEXT_RIGHT_ICON_IMAGE: `If showRightIconImage is true, set image of the left icon by inserting image url`,

  COMPONENTCODE: `Component Code  ( button.js )`,
  COMPONENTSTYLESHEET: `Component StyleSheet  ( button.js )`,
};

export const WithTextContent = {
  HEADER_TITLE: `Button with Text`,
  HEADER_DESCRIPTION: `This page store normal button with text`,

  USAGE_IMPORT: `Import the button component in the script`,
  USAGE_FULL_CODE: `Full usage code of the button with text only`,
};

export const WithIconContent = {
  HEADER_TITLE: `Button with Icon`,
  HEADER_DESCRIPTION: `This page store normal button with icon`,

  USAGE_IMPORT: `Import the button component in the script`,
  USAGE_FULL_CODE: `Full usage code of the button with icon only`,
};

export const CircleWithIconContent = {
  HEADER_TITLE: `Button circle with Icon`,
  HEADER_DESCRIPTION: `This page store a circle button with icon`,

  USAGE_IMPORT: `Import the button component in the script`,
  USAGE_FULL_CODE: `Full usage code of the button circle with icon only`,
};

export const WithLeftIconAndTextContent = {
  HEADER_TITLE: `Button with Left Icon and Text`,
  HEADER_DESCRIPTION: `This page store a normal button with left icon and text`,

  USAGE_IMPORT: `Import the button component in the script`,
  USAGE_FULL_CODE: `Full usage code of the button with left icon and text only`,
};

export const WithRightIconAndTextContent = {
  HEADER_TITLE: `Button with Right Icon and Text`,
  HEADER_DESCRIPTION: `This page store a normal button with right icon and text`,

  USAGE_IMPORT: `Import the button component in the script`,
  USAGE_FULL_CODE: `Full usage code of the button with right icon and text only`,
};

export const WithBothIconAndTextContent = {
  HEADER_TITLE: `Button with Both Icon and Text`,
  HEADER_DESCRIPTION: `This page store a normal button with both icon and text`,

  USAGE_IMPORT: `Import the button component in the script`,
  USAGE_FULL_CODE: `Full usage code of the button with both icon and text only`,
};

export const CardWithIconAndTextContent = {
  HEADER_TITLE: `Button Card with Icon and Text`,
  HEADER_DESCRIPTION: `This page store a button card with icon and text`,

  USAGE_IMPORT: `Import the button component in the script`,
  USAGE_FULL_CODE: `Full usage code of the button card with icon and text only`,
};
