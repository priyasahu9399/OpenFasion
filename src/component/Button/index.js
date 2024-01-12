import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, icons, images} from './../../constants';
const {height, width} = Dimensions.get('window');

const ButtonCustom = ({
  onPress,
  children,
  iconbtns,
  btnStyle,
  btntextStyle,
  load,
  disabled,
  borderbtn,
  whiterighticon,
  iconFullbtn,
  iconMdm,
  mdmbtn,
  whiterighticonStyle,
  lefticon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
      style={[
        styles.longButton,
        borderbtn && styles.borderbtn,
        iconFullbtn && {
          flexDirection: 'row',
          alignItems: 'center',
        },
        mdmbtn && {
          width: width * 0.42,
        },
        btnStyle,
      ]}>
      {iconMdm && <Image source={iconMdm} style={styles.mdmicon} />}
      {load && (
        <View style={styles.indBox}>
          <ActivityIndicator size={width * 0.065} color={COLORS.black} />
        </View>
      )}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {iconbtns && (
          <View style={styles.iconbtnbox}>
            <Image source={iconbtns} style={styles.iconbtn} />
          </View>
        )}
        {lefticon && <Image source={lefticon} style={styles.lefticon} />}
        <Text
          style={[
            styles.buttonText,
            borderbtn && {color: COLORS.black},
            btntextStyle,
          ]}>
          {children}
        </Text>
        {whiterighticon && (
          <Image
            source={whiterighticon}
            style={[styles.whiterighticon, whiterighticonStyle]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  longButton: {
    width: width,
    height: height * 0.062,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.fourHundred,
    fontSize: width * 0.038,
    marginBottom: -4,
    textTransform: 'uppercase',
  },
  mdmicon: {
    width: width * 0.045,
    height: width * 0.045,
    resizeMode: 'contain',
    marginRight: width * 0.03,
    tintColor: COLORS.white,
  },

  icon: {
    width: width * 0.05,
    height: height * 0.04,
    resizeMode: 'contain',
    marginRight: width * 0.02,
    tintColor: COLORS.primary,
  },
  indBox: {marginLeft: width * -0.03, marginRight: width * 0.02},
  iconbtnbox: {
    width: width * 0.114,
    height: width * 0.11,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width * 0.02,
    marginLeft: width * -0.01,
  },
  iconbtn: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
  whiterighticon: {
    width: width * 0.06,
    height: width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    marginLeft: width * 0.016,
  },

  // --------------
  borderbtn: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
    width: width * 0.5,
  },
  // ------------
  lefticon: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    marginRight: width * 0.036,
    marginBottom: 2,
  },
});
export default ButtonCustom;
