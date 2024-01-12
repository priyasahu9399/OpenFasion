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

const BorderHeading = ({heading, border, boxstyle, headingstyle , borderstyle}) => {
  return (
    <View style={boxstyle}>
      {heading && <Text style={[styles.heading, headingstyle]}>{heading}</Text>}
      {border && (
        <Image source={icons.border} style={[styles.border, borderstyle]} />
      )}
    </View>
  );
};

export default BorderHeading;

const styles = StyleSheet.create({
  border: {
    width: width * 0.34,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    alignSelf: 'center',
    height: height * 0.02,
  },
  heading: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.044,
    marginBottom: -3,
    alignSelf: 'center',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginTop: height * 0.02,
  },
});
