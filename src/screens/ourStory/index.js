import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import BorderHeading from './../../component/carts/borderHeading';
import InputBox from './../../component/InputText/index';
import ButtonCustom from './../../component/Button/index';

const {height, width} = Dimensions.get('window');

const OurStory = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BorderHeading heading="our story" border />
        <Text style={styles.title}>
          Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You
          can open Open Fashion - Free Ecommerce UI Kit file by Figma. {'\n\n'}
          Create stunning shop with bulletproof guidelines and thoughtful
          components. Its library contains more than 50+ components supporting
          Light & Dark Mode and 60+ ready to use mobile screens.
        </Text>
        <Image source={images.home2} style={styles.oneimg} />
        <BorderHeading heading="Sign Up" border />
        <Text style={styles.daytext}>
          Receive early access to new arrivals, sales, exclusive content, events
          and much more!
        </Text>
        <InputBox
          placeholder="Email adress"
          boxstyle={{marginBottom: height * 0.03}}
        />
        <ButtonCustom
          children="Submit"
          whiterighticon={icons.rarrow}
          whiterighticonStyle={{tintColor: COLORS.white}}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OurStory);
