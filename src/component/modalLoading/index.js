import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {ModalLoading} from 'react-native-components-design';

const Loader = ({loading}) => {
  return (
    <ModalLoading
      visible={loading}
      indicatorColor={COLORS.black}
      loadingTextStyle={COLORS.black}
      backgroundColor={COLORS.white}
    />
  );
};

export default Loader;
