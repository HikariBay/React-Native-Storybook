// This store usage code and usage strings

export const ButtonCode = {
  IMPORT_CODE: `import Button 
from '../../components/button/button';`,

  USAGE_CODE: `<Button
  onPress={function}

  buttonDisabled={boolean}
  buttonWidth={'100%'}
  buttonFlexDirection={'row'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={'black'} 
  buttonBorderRadius={7}
  buttonBorderWidth
  buttonBorderColor

  showButtonText={boolean}
  buttonText={'Button'}
  fontcolor={'white'}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'700'}

  showLeftIconImage={boolean}
  showRightIconImage={boolean}  
  iconWidth={20}
  iconHeight={20}
  leftIconMarginRight={10}
  leftIconMarginBottom={0}
  leftIconImage={require('../../assets/resources/ic_union.png')}     
  rightIconMarginLeft={10}
  rightIconMarginTop={0}
  rightIconImage={require('../../assets/resources/ic_union.png')}
/>`,

  COMPONENT_CODE: `import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';    

const Button = ({
  onPress = () => {},

  buttonDisabled = false,
  buttonWidth,
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

export default Button;`,

  COMPONENT_STYLESHEET: `const styles = StyleSheet.create({
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
};

export const WithTextCode = {
  USAGE_CODE: `<Button
  onPress={function}

  buttonDisabled={boolean}
  buttonWidth={'100%'}
  buttonFlexDirection={'row'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={'black'} 
  buttonBorderRadius={7}
  buttonBorderWidth
  buttonBorderColor

  showButtonText={true}
  buttonText={'Button'}
  fontcolor={'white'}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'700'}
/>`,
};

export const WithIconCode = {
  USAGE_CODE: `<Button
  onPress={function}

  buttonDisabled={boolean}
  buttonWidth={'100%'}
  buttonFlexDirection={'row'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={'black'} 
  buttonBorderRadius={7}
  buttonBorderWidth
  buttonBorderColor

  showButtonText={false}

  showLeftIconImage={true}
  iconWidth={20}
  iconHeight={20}
  leftIconMarginRight={10}
  leftIconMarginBottom={0}
  leftIconImage={require('../../assets/resources/ic_union.png')}     
/>`,
};

export const CircleWithIconCode = {
  USAGE_CODE: `<Button
  onPress={function}

  buttonDisabled={boolean}
  buttonWidth={'15%'}
  buttonFlexDirection={'row'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={'black'} 
  buttonBorderRadius={30}
  buttonBorderWidth
  buttonBorderColor

  showButtonText={false}

  showLeftIconImage={true}
  iconWidth={20}
  iconHeight={20}
  leftIconMarginRight={10}
  leftIconMarginBottom={0}
  leftIconImage={require('../../assets/resources/ic_union.png')}     
/>`,
};

export const WithLeftIconAndTextCode = {
  IMPORT_CODE: `import Button 
from '../../components/button/button';`,

  USAGE_CODE: `<Button
  onPress={function}

  buttonDisabled={boolean}
  buttonWidth={'100%'}
  buttonFlexDirection={'row'}
  buttonJustifyContent={'center'}
  buttonPaddingVertical={18}
  buttonPaddingHorizontal={20}
  buttonBackgroundColor={'black'} 
  buttonBorderRadius={7}
  buttonBorderWidth
  buttonBorderColor

  showButtonText={boolean}
  buttonText={'Button'}
  fontcolor={'white'}
  fontSize={mFont.defaultTextSize}
  fontFamily={mFont.defaultType}
  fontWeight={'700'}

  showLeftIconImage={boolean}
  showRightIconImage={boolean}  
  iconWidth={20}
  iconHeight={20}
  leftIconMarginRight={10}
  leftIconMarginBottom={0}
  leftIconImage={require('../../assets/resources/ic_union.png')}     
  rightIconMarginLeft={10}
  rightIconMarginTop={0}
  rightIconImage={require('../../assets/resources/ic_union.png')}
/>`,

  COMPONENT_CODE: `import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';    

const Button = ({
  onPress = () => {},

  buttonDisabled = false,
  buttonWidth,
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

export default Button;`,

  COMPONENT_STYLESHEET: `const styles = StyleSheet.create({
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
};
