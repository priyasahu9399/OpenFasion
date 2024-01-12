import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontain: {
    alignSelf: 'center',
    width: width * 0.94,
    marginTop: height * 0.04,
  },

  color: {
    width: width * 0.055,
    height: width * 0.055,
    borderRadius: 50,
    alignSelf: 'center',
  },
  download: {
    width: width * 0.047,
    height: width * 0.047,
    resizeMode: 'contain',
    marginHorizontal: width * 0.03,
    tintColor: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.015,
  },
  title: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.035,
    textTransform: 'uppercase',
    width: width * 0.84,
    letterSpacing: 2,
  },
  subtitle: {
    ...FONTS.fourHundred,
    color: COLORS.gray70,
    fontSize: width * 0.032,
    marginBottom: -3,
    lineHeight: height * 0.03,
  },
  price: {
    ...FONTS.fourHundred,
    color: COLORS.brown,
    fontSize: width * 0.037,
    marginBottom: height * 0.03,
    marginVertical: height * 0.005,
  },
  pdIcon: {
    width: width * 0.047,
    height: width * 0.047,
    resizeMode: 'contain',
    marginRight: width * 0.02,
    tintColor: COLORS.gray80,
  },
  // ---------------
  sizeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width * 0.4,
  },
  sizenumbox: {
    width: width * 0.074,
    height: width * 0.074,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.gray1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.01,
  },
  sizenum: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.028,
    marginBottom: -3,
  },
  // -----------
  blackbtn: {
    backgroundColor: COLORS.black,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.024,
    marginVertical: height * 0.04,
  },
  blackbtntext: {
    ...FONTS.fiveHundred,
    color: COLORS.white,
    fontSize: width * 0.035,
    marginBottom: -4,
    width: width * 0.78,
    letterSpacing: 2,
  },

  // -------collapse

  collapsbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.015,
  },
  collapstitle: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: width * 0.032,
    marginBottom: -4,
    width: width * 0.8,
  },
  collapsubtitle: {
    ...FONTS.fourHundred,
    color: COLORS.gray60,
    fontSize: width * 0.032,
  },
  subtitlebox: {
    paddingLeft: width * 0.08,
    marginBottom: height * 0.025,
  },
  collapseicon: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    marginRight: width * 0.035,
  },
  collapseborder: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray10,
    width: width*.87,
    alignSelf:'flex-end'
  },
});
