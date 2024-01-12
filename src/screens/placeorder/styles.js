import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    alignSelf: 'center',
    width: width * 0.94,
    backgroundColor: COLORS.white,
  },
  twoIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    marginHorizontal: width * 0.03,
  },

  lightgraybox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
    justifyContent: 'space-between',
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.lightgray,
    paddingHorizontal: width * 0.046,
    paddingVertical: height * 0.018,
    borderRadius: 30,
  },
  heading: {
    ...FONTS.fourHundred,
    color: COLORS.gray,
    fontSize: width * 0.037,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  subtotal: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.036,
  },
  grayboxtext: {
    ...FONTS.fourHundred,
    color: COLORS.gray70,
    fontSize: width * 0.034,
    marginBottom: -3,
  },
  mainaddress: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.037,
  },
  subaddress: {
    ...FONTS.fourHundred,
    color: COLORS.gray70,
    fontSize: width * 0.032,
    width: width * 0.55,
    lineHeight: height * 0.026,
  },

  rowjustify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height * 0.016,
    width: width * 0.93,
    alignSelf: 'center',
  },
  shiprow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:width*.2
  },
});
