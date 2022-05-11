// This store components strings

export const ComWithText = {
  code: `import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';    
import {mSize, mColor, mFont, mOS, mStyle} from '../../helpers/appStyle';

const Button = ({
    onPress = () => {},
    backgroundColor,
    small = false,
    medium = false,
    big = false,
    showLeftIconImage = false,
    leftIconImage,
    showRightIconImage = false,
    rightIconImage,
    color,
    buttonText,
    disabled = false,
}) => {

    const buttonContainer = [styles.buttonContainer];
    const iconContainer = [styles.iconContainer];
    const textContainer = [styles.textContainer];

    if (small) {
        buttonContainer.push(styles.smallContainer);
        iconContainer.push(styles.smallIcon);
        textContainer.push(styles.smallText);
    }

    if (medium) {
        buttonContainer.push(styles.mediumContainer);
        iconContainer.push(styles.mediumIcon);
        textContainer.push(styles.mediumText);
    }

    if (big) {
        buttonContainer.push(styles.bigContainer);
        iconContainer.push(styles.bigIcon);
        textContainer.push(styles.bigText);
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[buttonContainer, {backgroundColor: backgroundColor}]}>
            {showLeftIconImage && (
            <Image style={[iconContainer]} source={leftIconImage} />
            )}
            <Text style={[textContainer, {color: color}]}>{buttonText}</Text>
            {showRightIconImage && (
            <Image style={[iconContainer]} source={rightIconImage} />
            )}
        </TouchableOpacity>
        </View>
    );
};`,
  stylesheet: `const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },

    smallContainer: {
        flexDirection: 'row',
        paddingVertical: 18,
        textAlign: 'left',
        borderRadius: 5,
    },

    smallIcon: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 13,
        height: 13,
        marginEnd: 10,
    },

    smallText: {
        ...mStyle.smallText,
        fontWeight: 'bold',
        color: mColor.white,
        flex: 1,
        textAlign: 'center',
    },

    mediumContainer: {
        flexDirection: 'row',
        backgroundColor: mColor.black,
        ...mStyle.smallText,
        color: mColor.white,
        paddingVertical: 18,
        textAlign: 'left',
        borderRadius: 5,
    },

    mediumIcon: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 13,
        height: 13,
        marginEnd: 10,
    },

    mediumText: {
        ...mStyle.buttonText,
        fontWeight: 'bold',
        color: mColor.white,
        flex: 1,
        textAlign: 'center',
    },

    bigContainer: {
        flexDirection: 'row',
        backgroundColor: mColor.black,
        ...mStyle.smallText,
        color: mColor.white,
        paddingVertical: 18,
        textAlign: 'left',
        borderRadius: 5,
    },

    bigIcon: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 13,
        height: 13,
        marginEnd: 10,
    },

    bigText: {
        ...mStyle.subtitle,
        fontWeight: 'bold',
        color: mColor.white,
        flex: 1,
        textAlign: 'center',
    },
});`,
};
