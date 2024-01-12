import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  scrollBox: {
    width: width,
    alignSelf: 'center',
    marginVertical: height * 0.015,
    justifyContent: 'center',
  },
  scrollImage: {
    width: width,
    height: height * 0.76,
    resizeMode: 'stretch',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  iconrow: {
    position: 'absolute',
    top: height * 0.4,
    right: width * 0.04,
  },
  icon: {
    height: width * 0.03,
    width: width * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    marginVertical: width * 0.01,
  },
});
