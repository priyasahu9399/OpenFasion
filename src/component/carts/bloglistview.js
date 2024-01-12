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

const BlogListViewCart = ({onPress, img , title , subtitle , day}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.box}>
      <Image source={img} style={styles.img} />
      <View>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={3} style={styles.subtitle}>
          {subtitle}
        </Text>
        <Text style={styles.day}>{day}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BlogListViewCart;

const styles = StyleSheet.create({
  box: {
    width: width * 0.93,
    alignSelf: 'center',
    marginVertical: height * 0.015,
    flexDirection: 'row',
  },
  img: {
    width: width * 0.36,
    height: height * 0.18,
    resizeMode: 'stretch',
    marginRight: width * 0.03,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.04,
    letterSpacing: 1,
    textTransform: 'uppercase',
    width: width * 0.54,
    lineHeight: height * 0.032,
    height: height * 0.065,
  },
  subtitle: {
    color: COLORS.gray70,
    ...FONTS.fourHundred,
    fontSize: width * 0.032,
    width: width * 0.54,
    lineHeight: height * 0.026,
    marginVertical: height * 0.005,
    height: height * 0.08,
  },
  day: {
    color: COLORS.gray,
    ...FONTS.fourHundred,
    fontSize: width * 0.03,
    width: width * 0.54,
  },
});
