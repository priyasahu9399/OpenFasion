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
import {COLORS, FONTS, CURRENCY} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const NumberList = () => {
  return (
    <View style={styles.mainbox}>
      <TouchableOpacity style={styles.numIconBox}>
        <Text style={styles.numIcontext}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.rarrow2} style={styles.rarrow} />
      </TouchableOpacity>
    </View>
  );
};

export default NumberList;

const styles = StyleSheet.create({
  mainbox: {
    flexDirection: 'row',
    alignItems: 'center',
   //  justifyContent: 'space-between',
    width: width * 0.94,
    alignSelf: 'center',
    marginVertical: height * 0.025,
  },
  numIconBox: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 2,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numIcontext: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    marginBottom: -4,
    textTransform: 'uppercase',
  },
  rarrow: {
    width: width * 0.07,
    height: width * 0.07,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    marginHorizontal: width * 0.02,
  },
});
