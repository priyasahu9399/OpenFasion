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
  border: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray1,
    // marginTop: height * 0.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.016,
    width: width * 0.94,
    alignSelf: 'center',
  },
  subtotal: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.036,
  },
  twoicontext: {
    ...FONTS.fourHundred,
    color: COLORS.gray70,
    fontSize: width * 0.034,
    marginBottom: -3,
  },
  iconrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowjustify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height * 0.016,
    width: width * 0.94,
    alignSelf: 'center',
  },
});
