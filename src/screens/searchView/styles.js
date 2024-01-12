import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  listIconBox: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: 60,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    tintColor: COLORS.gray80,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderColor:COLORS.gray1,
    width: width * 0.94,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  input: {
    width: width * 0.7,
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.035,
    marginBottom: -3,
  },
  // -----------   numbers -----------------------
  mainbox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.7,
    alignSelf: 'center',
    marginTop: height * 0.04,
    marginBottom: height * 0.02,
  },

  numIconBox: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 2,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.01,
  },
  numIcontext: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    marginBottom: -4,
    textTransform: 'uppercase',
  },
  rarrow: {
    width: width * 0.07,
    height: width * 0.07,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
});
