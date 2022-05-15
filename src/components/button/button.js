import React from 'react';
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

  showButtonText = true,
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
});
