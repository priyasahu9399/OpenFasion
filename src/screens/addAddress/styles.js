import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    flex: 1,
    width: width * 0.94,
  },
  row: {
    // borderWidth: 1,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
