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
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const CategoryDropAllList = ({
  data,
  placeholder,
  dropdownStyle,
  containStyle,
  onChange,
  placestyle,
  size,
  onPresslist,
  onPressgrid,
  title,
  listIconstyle,
  listIcongridstyle,
  icon1,
  icon2,
}) => {
  return (
    <View style={styles.mainbox}>
      <Text style={styles.listtext}>{title}</Text>
      <View style={styles.rowlist}>
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
        <TouchableOpacity onPress={onPressgrid} style={styles.listIconBox}>
          <Image
            source={icon1}
            style={[styles.listIcon, listIcongridstyle]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPresslist} style={styles.listIconBox}>
          <Image
            source={icon2}
            style={[styles.listIcon, listIconstyle]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryDropAllList;

const styles = StyleSheet.create({
  dropdown: {
    height: height * 0.05,
    width: width * 0.28,
    backgroundColor: '#F7F7F7',
    borderRadius: 30,
    paddingHorizontal: width * 0.03,
  },
  selectedTextStyle: {
    color: COLORS.black,
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    textAlign: 'center',
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
    textAlign: 'center',
  },
  placeholderStyle: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: COLORS.black,
    textAlign: 'center',
  },
  //   -------------
  rowlist: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.56,
  },
  mainbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.94,
    alignSelf: 'center',
    marginVertical: height * 0.02,
  },
  listIconBox: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 60,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    tintColor: COLORS.gray80,
  },
  listtext: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    marginBottom: -4,
    textTransform: 'uppercase',
  },
});
