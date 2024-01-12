import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  bgImageText: {
    color: COLORS.primary,
    ...FONTS.fourHundred,
    fontSize: width * 0.04,
    marginTop: height * 0.13,
    marginHorizontal: width * 0.04,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  bgImage: {
    width: width * 0.93,
    height: width * 0.5,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  daytext: {
    color: COLORS.gray,
    ...FONTS.fourHundred,
    fontSize: width * 0.03,
    marginLeft: width * 0.02,
    marginTop: width * 0.04,
  },
  rowwrap: {
    width: width * 0.77,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  bookmark: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
  },
  bookmarkbox: {
    width: width * 0.09,
    height: height * 0.045,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end'
  },
});
