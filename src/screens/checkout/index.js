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
} from 'react-native';
import {COLORS, FONTS, images, icons, data, CURRENCY} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import CartComponent from './../../component/carts/Cartpage';
import ButtonCustom from './../../component/Button/index';
import BorderHeading from './../../component/carts/borderHeading';

const {height, width} = Dimensions.get('window');

const CheckOut = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <BorderHeading
            heading="Checkout"
            border
            boxstyle={{marginVertical: height * 0.02}}
          />
          {data.categorylistview.map((item, index) => (
            <CartComponent
              title={item?.title}
              subtitle={item?.subtitle}
              price={item?.price}
              img={item?.bigimg}
            />
          ))}
          <View style={[styles.border, {marginTop: height * 0.03}]}></View>
          <TouchableOpacity style={styles.row}>
            <Image source={icons.promocode} style={styles.twoIcon} />
            <Text style={styles.twoicontext}>Add promo code</Text>
          </TouchableOpacity>
          <View style={styles.border}></View>
          <TouchableOpacity style={styles.rowjustify}>
            <View style={styles.iconrow}>
              <Image source={icons.delivery} style={styles.twoIcon} />
              <Text style={styles.twoicontext}>Delivery</Text>
            </View>
            <Text style={[styles.twoicontext, {marginRight: width * 0.04}]}>
              Free
            </Text>
          </TouchableOpacity>
          <View style={[styles.border, {marginBottom: height * 0.05}]}></View>
        </View>
      </ScrollView>
      <View style={styles.rowjustify}>
        <Text style={styles.subtotal}>EST. TOTAL</Text>
        <Text style={[styles.subtotal, {color: COLORS.brown}]}>
          {CURRENCY?.dollar} 240
        </Text>
      </View>
      <ButtonCustom
        children={'Checkout'}
        lefticon={icons.bag}
        onPress={() => navigation.navigate('CheckOut2')}
      />
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
