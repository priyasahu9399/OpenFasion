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
  heading: {
    fontSize: width * 0.042,
    ...FONTS.fourHundred,
    color: COLORS.black,
    marginVertical: height * 0.01,
    letterSpacing: 3,
    width: width * 0.94,
    alignSelf: 'center',
  },
  crossbox: {
    width: width * 0.06,
    height: width * 0.06,
    marginTop: height * 0.05,
    marginLeft: width * 0.03,
  },
  cross: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray1,
    marginTop: height * 0.01,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height * 0.01,
    width: width * 0.94,
    alignSelf: 'center',
  },
  subtotal: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.036,
  },
  graytext: {
    ...FONTS.fourHundred,
    color: COLORS.gray,
    fontSize: width * 0.034,
    marginBottom: height * 0.02,
    width: width * 0.94,
    alignSelf: 'center',
  },
});
