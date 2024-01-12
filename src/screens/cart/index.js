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

const {height, width} = Dimensions.get('window');

const Cart = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <TouchableOpacity  style={styles.crossbox} onPress={() => navigation.goBack()}>
        <Image source={icons.Close} style={styles.cross} />
      </TouchableOpacity>
      <Text style={styles.heading}>CART</Text>
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        {data.categorylistview?.[0] ? (
          <View>
            {data.categorylistview.map((item, index) => (
              <CartComponent
                title={item?.title}
                subtitle={item?.subtitle}
                price={item?.price}
                img={item?.bigimg}
                onPress={() => navigation.navigate('ProductDetail1')}
              />
            ))}
          </View>
        ) : (
          <Text
            style={[
              styles.graytext,
              {marginTop: height * 0.35, textAlign: 'center'},
            ]}>
            You have no items in your Shopping Bag.
          </Text>
        )}
      </ScrollView>
      <View style={styles.border}></View>
      <View style={styles.row}>
        <Text style={styles.subtotal}>SUB TOTAL</Text>
        <Text style={[styles.subtotal, {color: COLORS.brown}]}>
          {CURRENCY?.dollar} 240
        </Text>
      </View>
      <Text style={styles.graytext}>
        *shipping charges, taxes and discount codes are calculated at the time
        of accounting.
      </Text>
      <ButtonCustom
        children={data.categorylistview?.[0] ? 'BUY NOW' : 'Continue shopping'}
        lefticon={icons.bag}
        onPress={() => navigation.navigate('CheckOut')}
      />
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
