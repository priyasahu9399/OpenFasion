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

const {width, height} = Dimensions.get('window');

const CategoryGridList = ({
  onPress,
  onPressheart,
  onPressSize,
  title,
  subtitle,
  price,
  rate,
  size,
  bigimg,
}) => {
    const [heart, setHeart] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.mainbox}>
      <Image source={bigimg} style={styles.bigimg} />
      <View>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          {subtitle}
        </Text>
        <Text style={styles.price}>
          {CURRENCY.dollar} {price}
        </Text>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View>
            <View style={[styles.row, {marginVertical: height * 0.01}]}>
              <Image source={icons.star} style={styles.star} />
              <Text style={styles.rate}>{rate} Ratings</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rate}>Size</Text>
              <View style={styles.sizeWrap}>
                {size?.map((item, index) => (
                  <TouchableOpacity
                    onPress={onPressSize}
                    style={styles.sizenumbox}>
                    <Text style={styles.sizenum}>{item?.size}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => setHeart(!heart)}>
            <Image
              source={heart ? icons.fillheart : icons.Heart}
              style={styles.heart}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGridList;

const styles = StyleSheet.create({
  mainbox: {
    width: width * 0.94,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: height * 0.01,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.034,
    textTransform: 'uppercase',
    width: width * 0.57,
  },
  subtitle: {
    ...FONTS.fourHundred,
    color: COLORS.gray,
    fontSize: width * 0.031,
    width: width * 0.57,
  },
  price: {
    ...FONTS.fourHundred,
    color: COLORS.brown,
    fontSize: width * 0.036,
    width: width * 0.57,
  },
  rate: {
    ...FONTS.fourHundred,
    color: COLORS.gray,
    fontSize: width * 0.032,
    marginBottom: -4,
  },

  bigimg: {
    width: width * 0.3,
    height: height * 0.17,
    resizeMode: 'stretch',
    marginRight: height * 0.016,
  },
  star: {
    width: width * 0.036,
    height: width * 0.036,
    resizeMode: 'contain',
    tintColor: COLORS.brown,
    marginRight: height * 0.01,
  },
  heart: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    tintColor: COLORS.brown,
  },
  sizeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width * 0.43,
  },
  sizenumbox: {
    width: width * 0.074,
    height: width * 0.074,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.gray1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.01,
  },
  sizenum: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.028,
    marginBottom: -3,
  },
});
