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
    fontSize: width * 0.04,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: height * 0.03,
    width: width * 0.94,
    alignSelf: 'center',
  },
  subtitle: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.034,
    lineHeight: height * 0.026,
    marginVertical: height * 0.01,
    width: width * 0.94,
    alignSelf: 'center',
  },
  oneimg: {
    width: width,
    height: height * 0.26,
    resizeMode: 'stretch',
  },
  daytext: {
    color: COLORS.gray,
    ...FONTS.fourHundred,
    fontSize: width * 0.035,
    width: width * 0.94,
    alignSelf: 'center',
    marginVertical: width * 0.02,
  },
  rowwrap: {
    width: width * 0.94,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
 
});
