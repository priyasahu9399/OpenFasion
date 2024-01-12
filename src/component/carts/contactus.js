import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Linking,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';
import BorderHeading from './borderHeading';

const {width, height} = Dimensions.get('window');

const ContactUs = ({
  mainBox,
  navigation,
  onPressBlog,
  onPressAbout,
  onPressContact,
}) => {
  return (
    <View style={[styles.mainboxstyle, mainBox]}>
      <View style={styles.fourimgboxrow}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://twitter.com')}>
          <Image source={icons.twit} style={styles.appicon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <Image source={icons.insta2} style={styles.appicon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/')}>
          <Image source={icons.yutube} style={styles.appicon} />
        </TouchableOpacity>
      </View>
      <BorderHeading border boxstyle={{marginVertical: height * 0.02}} />
      <Text style={styles.title}>support@openui.design</Text>
      <Text style={styles.title}>+60 825 876</Text>
      <Text style={styles.title}>08:00 - 22:00 - Everyday</Text>
      <BorderHeading border boxstyle={{marginVertical: height * 0.02}} />

      <View style={styles.fourimgboxrow}>
        <TouchableOpacity
          onPress={() => navigation.navigate('OurStory')}
          style={{width: width * 0.3}}>
          <Text style={styles.title}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ContactUsPage')}
          style={{width: width * 0.3}}>
          <Text style={styles.title}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Blog')}
          style={{width: width * 0.3}}>
          <Text style={styles.title}>Blog</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.primaryBox}>
        <Text style={styles.title}>Copyright© OpenUI All Rights Reserved.</Text>
      </View>
    </View>
  );
};
export default ContactUs;
export const styles = StyleSheet.create({
  mainboxstyle: {marginTop: height * 0.03, backgroundColor: COLORS.white},
  fourimgboxrow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.93,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.012,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: height * 0.01,
    marginBottom: -1,
  },
  appicon: {
    width: width * 0.1,
    height: width * 0.06,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.01,
    tintColor: COLORS.black,
    marginHorizontal: height * 0.01,
  },
  primaryBox: {
    backgroundColor: COLORS.primary,
    paddingVertical: height * 0.014,
    width: width,
    marginTop: height * 0.02,
    marginBottom: height * 0.002,
  },
});
