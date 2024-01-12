import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  innercontainer: {
    alignSelf: 'center',
    width: width * 0.94,
    backgroundColor: COLORS.black,
    marginBottom: height * 0.02,
  },
  octLogo: {
    width: width * 0.4,
    height: width * 0.1,
    resizeMode: 'stretch',
    tintColor: COLORS.white,
    alignSelf: 'center',
    marginTop: height * 0.03,
    marginBottom: height * 0.01,
  },
  mainhead2: {
    ...FONTS.fourHundred,
    fontSize: width * 0.044,
    color: COLORS.white,
    textTransform: 'uppercase',
    letterSpacing: 3,
    alignSelf: 'center',
  },
});
