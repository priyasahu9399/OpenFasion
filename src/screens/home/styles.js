import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  // new arrival list
  listtext: {
    color: COLORS.gray,
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    marginBottom: -3,
    // alignSelf: 'center',
    marginHorizontal: width * 0.03,
  },
  listbox: {
    marginVertical: height * 0.01,
  },
  sqticon: {
    height: width * 0.03,
    width: width * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.brown,
    marginHorizontal: width * 0.01,
    alignSelf: 'center',
  },

  // // new arrival cart
  oneImg: {
    width: width,
    height: height * 0.26,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginVertical: height * 0.02,
  },

  brand: {
    width: width * 0.29,
    height: height * 0.05,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.01,
  },
  brandrow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: width * 0.94,
    alignSelf: 'center',
  },
  videocustomstyle: {
    marginVertical: height * 0.02,
  },
  // ---------------primary Color Box 5 img cart  ------------------------------------------
  primaryBox: {
    backgroundColor: COLORS.primary,
    paddingVertical: height * 0.03,
    width: width,
    marginTop: height * 0.05,
    marginBottom: height * 0.02,
  },
  fourimgboxrow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.93,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.01,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.12,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: height * 0.01,
  },
  fourimg: {
    width: width * 0.2,
    height: width * 0.15,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.035,
    alignSelf: 'center',
    textAlign: 'center',
    width: width * 0.8,
    marginVertical: height * 0.01,
  },
  subtitle: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.033,
    alignSelf: 'center',
    textAlign: 'center',
    width: width * 0.46,
    marginVertical: height * 0.01,
    height: height * 0.05,
  },

  // ----------follow us -------

  bgImageText: {
    color: COLORS.primary,
    ...FONTS.fourHundred,
    fontSize: width * 0.04,
    marginTop: height * 0.17,
    marginLeft: width * 0.04,
  },
  bgImage: {
    width: width * 0.45,
    height: width * 0.45,
    
  },
  // ----- contact

  appicon: {
    width: width * 0.12,
    height: width * 0.08,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.01,
    tintColor: COLORS.black,
  },
});
