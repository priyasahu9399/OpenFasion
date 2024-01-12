import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  // headerTitle: {
  //   ...FONTS.sixHundred,
  //   color: COLORS.black,
  //   fontSize: width * 0.038,
  //   marginBottom: -4,
  // },
  headerstyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: COLORS.white,
  },
  menu: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
    marginLeft: width * 0.03,
  },
  titleimg: {
    width: width * 0.22,
    height: width * 0.12,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meheaderrighticon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    marginRight: width * 0.03,
  },
});
