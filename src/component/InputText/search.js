import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const {width, height} = Dimensions.get('window');

const SearchBox = ({
  placeholder,
  searchStyle,
  editable,
  onPressfilter,
  disabled,
  onPresssearch,
  disabledfilter,
  onChangeText,
  value,
  filter,
  autoFocus,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPresssearch}
      activeOpacity={0.6}
      style={[styles.searchbox, searchStyle]}>
      <TextInput
        editable={editable}
        placeholder={'Search'}
        style={[styles.searchinput]}
        placeholderTextColor={COLORS.gray40}
        onChangeText={onChangeText}
        value={value}
        autoFocus={autoFocus}
      />
      <Image source={icons.search} style={styles.search} />
    </TouchableOpacity>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchbox: {
    height: height * 0.058,
    width: width * 0.93,
    marginVertical: height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray30,
    alignSelf: 'center',
    elevation: 4,
    paddingHorizontal: width * 0.02,
  },
  search: {
    height: height * 0.023,
    width: width * 0.05,
    marginHorizontal: width * 0.03,
    resizeMode: 'stretch',
    tintColor: COLORS.primary,
  },
  searchinput: {
    width: width * 0.78,
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginBottom: -3,
    color: COLORS.black,
  },
});
