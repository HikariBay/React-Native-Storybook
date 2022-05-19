import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Button = ({
  onPress = () => {},

  buttonDisabled = false,
  buttonWidth = '100%',
  buttonHeight,
  buttonFlexDirection = 'row',
  buttonJustifyContent = 'center',
  buttonPaddingVertical = 18,
  buttonPaddingHorizontal = 20,
  buttonBackgroundColor,
  buttonBorderRadius = 7,
  buttonBorderWidth,
  buttonBorderColor,

  showButtonText = false,
  buttonText = 'Button Text',
  fontcolor,
  fontSize = 16,
  fontFamily,
  fontWeight = 'bold',

  showLeftIconImage = false,
  showRightIconImage = false,
  iconWidth = 20,
  iconHeight = 20,
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
          height: buttonHeight,
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

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
