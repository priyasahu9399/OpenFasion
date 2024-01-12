import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const CategoryList = ({
  listStylebox,
  elevationbtn,
  listtextStyle,
  onPress,
  text,
  cross,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[
        styles.listbox,
        elevationbtn && styles.elevationbtn,
        listStylebox,
      ]}>
      <Text
        style={[
          styles.listboxtext,
          elevationbtn && {color: COLORS.gray},
          listtextStyle,
        ]}>
        {text}
      </Text>
      {cross && <Image source={icons.Close} style={styles.cross} />}
    </TouchableOpacity>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  listbox: {
    backgroundColor: COLORS.primary,
    paddingVertical: height * 0.009,
    paddingHorizontal: height * 0.018,
    borderRadius: 20,
    marginTop: height * 0.01,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  listboxtext: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.031,
    marginBottom: -2,
  },
  elevationbtn: {
    // elevation: 1,
    backgroundColor: COLORS.white,
    marginTop: height * 0.01,
    paddingVertical: height * 0.007,
    borderWidth: 1,
    borderColor: COLORS.gray10,
  },
  cross: {
    width: width * 0.042,
    height: width * 0.042,
    resizeMode: 'contain',
    tintColor: COLORS.gray80,
    marginLeft: width * 0.01,
  },
});
