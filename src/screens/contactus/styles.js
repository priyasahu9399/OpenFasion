import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.042,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: height * 0.03,
    alignSelf: 'center',
  },
  subtitle: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    lineHeight: height * 0.028,
    marginVertical: height * 0.01,
    width: width * 0.93,
    alignSelf: 'center',
  },
  oneimg: {
    width: width * 0.13,
    height: width * 0.2,
    resizeMode: 'contain',
    marginTop: height * 0.03,
    alignSelf: 'center',
  },
  btnstyle: {
    width: width * 0.5,
    alignSelf: 'center',
    marginVertical: height * 0.036,
  },
});
