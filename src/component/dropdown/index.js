import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTS, SIZES , data} from './../../constants';
const {height, width} = Dimensions.get('window');

const DropdownComponent = ({
  data,
  placeholder,
  dropdownStyle,
  containStyle,
  onChange,
  placestyle,
  size,
}) => {

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, dropdownStyle]}
        containerStyle={[styles.containerStyle, containStyle]}
        placeholderStyle={[styles.placeholderStyle, placestyle]}
        itemTextStyle={styles.itemTextStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        placeholder={placeholder}
        onChange={onChange}
        showsVerticalScrollIndicator={false}
        maxHeight={180}
        labelField="label"
        valueField="value"
        renderRightIcon={() => (
          <AntDesign name="caretdown" size={size} color={COLORS.gray} />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: height * 0.056,
    width: width * 0.28,
    backgroundColor: '#F7F7F7',
    borderRadius: 30,
    paddingHorizontal: width * 0.03,
  },
  selectedTextStyle: {
    color: COLORS.black,
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    marginBottom:-3
  },
  containerStyle: {
    borderRadius: 8,
    backgroundColor: COLORS.white,
    width: width * 0.3,
  },
  itemTextStyle: {
    color: COLORS.black,
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    marginVertical: height * -0.01,
  },
  placeholderStyle: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: COLORS.gray,
    textAlign: 'center'
  },
});
