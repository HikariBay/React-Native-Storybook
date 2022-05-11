import {Dimensions, Platform, StyleSheet, Appearance} from 'react-native';

const mSize = {
  appWidth: Dimensions.get('window').width,
  appHeight: Dimensions.get('window').height,
};

const mTheme = Appearance.getColorScheme();

const mColor = {
  primary: '#2563CC', //blue
  orange: '#F7BA50',
  red: '#CC3123',
  green: '#008700',
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#025789',
  titleBar: '#2c3542',
  text: '#8e9293',
  border: '#c6c6c6',
  gray: '#9ca5ab',
  neutralGrey60: '#7F8182',
  coolGrey10: '#DAE0E8',
  coolGrey70: '#414C5A',
  CoolGrey040: '#8692A1',
  coolGrey100: '#0C0D0D',
  success: '#59C45A',
  lightgray: '#e9e9e9',
  lightgrey: '#D3D3D3',
  bgCircle: 'rgb(128,128,128)',
  bgCircleContainer: 'rgba(128,128,128, 0.7)',
  singpassbg: '#8F9293',
  idPageScrollbg: '#F2F2F2',
  scannerBar: '#935116',
  expandButton: '#C75100',
};

const mFont = {
  boldType: 'OpenSans-Bold',
  mediumType: 'OpenSans-Semibold',
  // normalType: "OpenSans-Regular",
  lightType: 'OpenSans-Light',
  defaultType:
    Platform.OS === 'android' ? 'OpenSans-Regular' : 'OpenSans-Light',
  headerTextSize: 24,
  titleTextSize: 20,
  subheaderTextSize: 18,
  defaultTextSize: 16,
  msgTextSize: 14,
  smallTextSize: 12,
};

const mOS = Platform.OS;

const mStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: mTheme === 'dark' ? mColor.black : mColor.white,
  },
  title: {
    fontSize: mFont.headerTextSize,
    fontFamily: mFont.mediumType,
    fontWeight: '600',
    color: mTheme === 'dark' ? mColor.white : mColor.coolGrey100,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: mFont.subheaderTextSize,
    fontFamily: mFont.mediumType,
    fontWeight: '600',
    color: mTheme === 'dark' ? mColor.white : mColor.coolGrey100,
    textAlign: 'center',
  },
  message: {
    fontSize: mFont.defaultTextSize,
    fontFamily: mFont.defaultType,
    fontWeight: '600',
    color: mTheme === 'dark' ? mColor.white : mColor.coolGrey100,
    textAlign: 'center',
  },
  smallText: {
    fontSize: mFont.smallTextSize,
    fontFamily: mFont.mediumType,
    fontWeight: '400',
    color: mTheme === 'dark' ? mColor.white : mColor.coolGrey100,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    color: mTheme === 'dark' ? mColor.white : mColor.coolGrey100,
  },
  button: {
    width: '100%',
    borderRadius: 4,
    paddingVertical: 12,
    backgroundColor: mColor.orange,
  },
  buttonText: {
    fontSize: mFont.defaultTextSize,
    fontFamily: mFont.mediumType,
    fontWeight: '600',
    color: mColor.coolGrey100,
  },
  inputText: {
    borderBottomColor: mColor.gray,
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  linkUnderlineText: {
    color: mColor.primary,
    textDecorationLine: 'underline',
  },
  cardStyle: {
    backgroundColor: mTheme === 'dark' ? mColor.black : mColor.white,
    borderRadius: 5,
    padding: 12,
  },
  shadow: {
    shadowColor: mOS === 'android' ? mColor.white : mColor.coolGrey10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export {mSize, mColor, mFont, mOS, mStyle, mTheme};
