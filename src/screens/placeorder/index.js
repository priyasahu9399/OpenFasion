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
import Entypo from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');

const PlaceOrder = ({navigation}) => {
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
        <BorderHeading
          heading="Checkout"
          border
          boxstyle={{marginVertical: height * 0.01}}
        />
        <Text style={styles.heading}>Shipping adress</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('AddAddress')}
          style={styles.rowjustify}>
          <View>
            <Text style={styles.mainaddress}>lris Watson</Text>
            <Text style={styles.subaddress}>
              606-3727 Ullamcorper. Street Roseville NH 11523
            </Text>
            <Text style={styles.subaddress}>(786) 713-8616</Text>
          </View>
          <Image source={icons.rarrow2} style={styles.twoIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.lightgraybox}>
          <Text style={styles.grayboxtext}>Add promo code</Text>
          <Entypo name="plus" size={width * 0.05} color={COLORS.gray60} />
        </TouchableOpacity>

        <Text style={styles.heading}>Shipping Method</Text>
        <TouchableOpacity style={styles.lightgraybox}>
          <Text style={styles.grayboxtext}>Pickup at store</Text>
          <View style={styles.shiprow}>
            <Text style={styles.grayboxtext}>FREE</Text>
            <Entypo
              name="chevron-small-down"
              size={width * 0.07}
              color={COLORS.gray60}
            />
          </View>
        </TouchableOpacity>

        <Text style={styles.heading}>Payment method</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewCart')}
          style={styles.lightgraybox}>
          <Text style={styles.grayboxtext}>select payment method</Text>
          <Entypo
            name="chevron-small-down"
            size={width * 0.07}
            color={COLORS.gray60}
          />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.rowjustify}>
        <Text style={styles.subtotal}>TOTAL</Text>
        <Text style={[styles.subtotal, {color: COLORS.brown}]}>
          {CURRENCY?.dollar} 240
        </Text>
      </View>
      <ButtonCustom children={'place order'} lefticon={icons.bag} />
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
