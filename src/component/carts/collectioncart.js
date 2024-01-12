import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const CollectionCart = ({onPress, img, num, title}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Image source={img} style={styles.bigimg} />
      <View style={styles.mainrow}>
        <View style={styles.row}>
          <Text style={styles.number}>{num}</Text>
          <View style={styles.border}></View>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionCart;

const styles = StyleSheet.create({
  mainrow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.94,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.023,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bigimg: {
    width: width * 0.94,
    alignSelf: 'center',
    height: height * 0.56,
    resizeMode: 'stretch',
    marginVertical: height * 0.007,
  },
  title: {
    ...FONTS.fourHundred,
    color: COLORS.white,
    fontSize: width * 0.035,
    marginBottom: -3,
    textTransform: 'uppercase',
    textAlign: 'right',
    width: width * 0.54,
  },
  number: {
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    color: COLORS.white,
    marginBottom: -3,
    marginRight: width * 0.02,
  },
  border: {
    width: width * 0.3,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
  },
});
