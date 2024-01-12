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

  listIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    tintColor: COLORS.gray80,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    width: width * 0.93,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: width * 0.76,
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.035,
    marginBottom: -3,
  },
  heading: {
    fontSize: width * 0.037,
    ...FONTS.fourHundred,
    color: COLORS.gray,
    marginTop: height * 0.034,
  },
  brandrow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width * 0.94,
    alignSelf: 'center',
  },
  listtext: {
    ...FONTS.fourHundred,
    fontSize: width * 0.035,
    marginTop: height * 0.018,
    color: COLORS.black,
  },
});
