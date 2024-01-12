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
  pymticon: {
    width: width * 0.12,
    height: width * 0.06,
    resizeMode: 'stretch',
    marginHorizontal: width * 0.03,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray1,
    marginVertical: height * 0.01,
  },

  subtotal: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.036,
  },
  pymticontext: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.032,
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
    width: width * 0.94,
    alignSelf: 'center',
  },
  imgrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // ----modal
  modalBox: {
    backgroundColor: COLORS.white,
    width: width * 0.94,
    alignSelf: 'center',
    padding: width * 0.03,
  },
  modaltitle: {
    ...FONTS.fourHundred,
    fontSize: width * 0.048,
    color: COLORS.black,
    alignSelf: 'center',
    letterSpacing: 3,
  },
  modaltext: {
    ...FONTS.fourHundred,
    fontSize: width * 0.035,
    color: COLORS.gray70,
    alignSelf: 'center',
    marginBottom: 4,
    letterSpacing: 1,
  },
  modalcross: {
    width: width * 0.06,
    height: width * 0.06,
    alignSelf: 'center',
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  success: {
    width: width * 0.2,
    height: width * 0.2,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: height * 0.034,
  },
  modalthreeicon: {
    width: width * 0.1,
    height: width * 0.1,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  modalrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
    alignSelf: 'center',
    width: width * 0.4,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
});
