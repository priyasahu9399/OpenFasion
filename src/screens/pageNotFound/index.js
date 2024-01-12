import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
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
import CategoryList from './../../component/carts/categoryList';
import ContactUs from './../../component/carts/contactus';
import HomeSlider from './../../component/slider/homeAutoscrollslider';
import ButtonCustom from './../../component/Button/index';

const {height, width} = Dimensions.get('window');

const PageNotFound = ({navigation}) => {
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
        <Text style={styles.title}>PAGE NOT FOUND</Text>
        <Image source={icons.dress} style={styles.oneimg} />
        <Text style={styles.subtitle}>
          We can't find the page you looking for, it will return to the
        </Text>
        <ButtonCustom
          children="Home Page"
          iconMdm={icons.larrow}
          iconFullbtn
          btnStyle={styles.btnstyle}
          onPress={() => navigation.navigate('Home')}
        />

        <ContactUs navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound);
