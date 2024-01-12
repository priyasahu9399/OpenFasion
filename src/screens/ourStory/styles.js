import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  title: {
    color: COLORS.darkgray,
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    letterSpacing: 1,
    marginVertical: height * 0.02,
    width: width * 0.94,
    alignSelf: 'center',
    lineHeight:height * 0.028
  },

  oneimg: {
    width: width,
    height: height * 0.28,
    resizeMode: 'stretch',
    marginVertical:height*.02
  },
  daytext: {
    color: COLORS.gray,
    ...FONTS.fourHundred,
    fontSize: width * 0.035,
    width: width * 0.8,
    alignSelf: 'center',
    marginVertical: width * 0.02,
  },
  rowwrap: {
    width: width * 0.94,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  
});
