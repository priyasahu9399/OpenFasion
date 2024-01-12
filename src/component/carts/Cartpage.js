import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, CURRENCY, data} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const CartComponent = ({onPress, title, subtitle, price, img}) => {
  const [incredecre, setIncredecre] = useState(1);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.mainbox}>
      <Image source={img} style={styles.bigimg} />
      <View>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          {subtitle}
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.increbox}
            activeOpacity={0.7}
            onPress={() => {
              if (incredecre === 1) {
                setIncredecre(1);
              } else {
                setIncredecre(incredecre - 1);
              }
            }}>
            <AntDesign
              name="minus"
              size={width * 0.038}
              color={COLORS.black}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <Text style={styles.incredecretext}>{incredecre}</Text>
          <TouchableOpacity
            style={styles.increbox}
            activeOpacity={0.7}
            onPress={() => setIncredecre(incredecre + 1)}>
            <AntDesign
              name="plus"
              size={width * 0.038}
              color={COLORS.black}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>
          {CURRENCY.dollar} {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartComponent;

const styles = StyleSheet.create({
  mainbox: {
    width: width * 0.94,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  title: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.034,
    textTransform: 'uppercase',
    width: width * 0.57,

    // height: height * 0.048,
  },
  subtitle: {
    ...FONTS.fourHundred,
    color: COLORS.gray,
    fontSize: width * 0.031,
    width: width * 0.57,
    marginVertical: height * 0.01,
    // height: height * 0.048,
  },
  price: {
    ...FONTS.fourHundred,
    color: COLORS.brown,
    fontSize: width * 0.036,
    width: width * 0.57,
  },
  bigimg: {
    width: width * 0.3,
    height: height * 0.17,
    resizeMode: 'stretch',
    marginRight: height * 0.016,
  },

  incredecretext: {
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    color: COLORS.black,
    width: width * 0.07,
    textAlign: 'center',
    marginBottom: -3,
    marginHorizontal: width * 0.01,
  },
  increbox: {
    width: width * 0.052,
    height: width * 0.052,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.gray1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
