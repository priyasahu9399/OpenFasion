import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, CURRENCY} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const NewArrivalCart = ({
  onPress,
  title,
  subtitle,
  img,
  price,
  wishlistcategorycart,
  titlestyle,
  categoryfullimg,
}) => {
  const [heart, setHeart] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.cartbox,
        categoryfullimg && {width: width * 0.94, alignSelf: 'center'},
      ]}>
      <View>
        <Image
          source={img}
          style={[styles.img, categoryfullimg && styles.fullimg]}
        />
        {wishlistcategorycart && (
          <TouchableOpacity
            onPress={() => setHeart(!heart)}
            style={styles.heartbox}>
            <Image
              source={heart ? icons.fillheart : icons.Heart}
              style={styles.heart}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text
        style={[
          styles.heading,
          categoryfullimg && styles.categoryheading,
          wishlistcategorycart && {alignSelf: 'flex-start', textAlign: 'left'},
          titlestyle,
        ]}>
        {title}
      </Text>

      <View style={categoryfullimg && styles.catRow}>
        {subtitle && <Text style={styles.subheading}>{subtitle}</Text>}

        <Text
          style={[
            styles.price,
            wishlistcategorycart && {
              alignSelf: 'flex-start',
              textAlign: 'left',
            },
          ]}>
          {CURRENCY.dollar} {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewArrivalCart;

const styles = StyleSheet.create({
  cartbox: {
    width: width * 0.45,
    marginVertical: height * 0.012,
  },
  img: {
    width: width * 0.45,
    height: height * 0.28,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  heading: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.032,
    marginBottom: -3,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: height * 0.01,
    // height: height * 0.047,
  },
  price: {
    color: COLORS.brown,
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    marginBottom: -3,
    alignSelf: 'center',
    textAlign: 'center',
  },
  subheading: {
    color: COLORS.gray,
    ...FONTS.fourHundred,
    fontSize: width * 0.03,
    marginBottom: -3,
  },
  heart: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.brown,
  },
  heartbox: {
    width: width * 0.08,
    height: width * 0.08,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },

  // -----------categoryfullimg

  fullimg: {
    height: height * 0.58,
    width: width * 0.94,
    resizeMode: 'stretch',
  },
  categoryheading: {textTransform: 'uppercase', letterSpacing: 2},
  catRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
