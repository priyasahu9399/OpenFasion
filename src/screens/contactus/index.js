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
import ContactUs from './../../component/carts/contactus';
import ButtonCustom from './../../component/Button/index';
import BorderHeading from './../../component/carts/borderHeading';

const {height, width} = Dimensions.get('window');

const ContactUsPage = ({navigation}) => {
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
        <BorderHeading heading="Contact us" border />
        <View>
          <Image source={icons.message} style={styles.oneimg} />
          <Text style={styles.subtitle}>
            Need an ASAP answer? Contact us via chat, 24/7! For existing
            furniture orders, please call us.{' '}
          </Text>
          <ButtonCustom
            children="Chat witH us"
            btnStyle={styles.btnstyle}
            onPress={() => navigation.navigate('PageNotFound')}
          />
        </View>
        <View>
          <Image source={icons.textus} style={styles.oneimg} />
          <Text style={styles.subtitle}>
            You can text us at 800-309-2622 – or click on the “text us” link
            below on your mobile device. Please allow the system to acknowledge
            a simple greeting (even “Hi” will do!) before providing your
            question/order details. Consent is not required for any purchase.
            Message and data rates may apply. Text messaging may not be
            available via all carriers.
          </Text>
          <ButtonCustom
            children="Text us"
            btnStyle={styles.btnstyle}
            onPress={() => navigation.navigate('PageNotFound')}
          />
        </View>
        <Image source={icons.Twitter} style={styles.oneimg} />
        <Text style={styles.subtitle}>
          To send us a private or direct message, like @Open Fashion on Facebook
          or follow us on Twitter. We’ll get back to you ASAP. Please include
          your name, order number, and email address for a faster response!
        </Text>
        <ContactUs navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUsPage);
