import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  categorybox: {
    width: width * 0.25,
    alignSelf: 'center',
  },
  categorytext: {
    fontSize: width * 0.04,
    color: COLORS.gray,
    ...FONTS.fourHundred,
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    borderBottomWidth: 1,
    marginHorizontal: width * 0.04,
    borderColor: COLORS.gray10,
  },

  border: {
    width: width * 0.27,
    resizeMode: 'contain',
    tintColor: COLORS.brown,
    height: height * 0.012,
    position: 'absolute',
    bottom: -3.8,
    left: 6,
  },

  cross: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
    marginLeft: width * 0.05,
    marginTop: height * 0.05,
  },

  collapsbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.015,
    marginHorizontal: width * 0.06,
    marginBottom: height * 0.01,
  },
  collapstitle: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.037,
    marginBottom: -4,
    width: width * 0.65,
    paddingVertical: height * 0.008,
  },
  collapsubtitle: {
    ...FONTS.fourHundred,
    color: COLORS.gray80,
    fontSize: width * 0.036,
    marginBottom: -3,
    paddingVertical: height * 0.01,
  },
  subtitlebox: {
    paddingLeft: width * 0.1,
    marginTop: height * 0.01,
  },
  bottomicon: {
    width: width * 0.046,
    height: height * 0.023,
    resizeMode: 'stretch',
    tintColor: COLORS.black,
    marginRight: width * 0.03,
  },
  bottomicontext: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.034,
    marginBottom: -3,
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
  iconrow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
});
