import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const InputBox = ({
  placeholder,
  search,
  maxLength,
  keyboardType,
  label,
  onChangeText,
  value,
  editable,
  icon,
  multiline,
  textAlignVertical,
  numberOfLines,
  labelStyle,
  inputboxstyle,
  errors,
  errorstyle,
  inputboxwidth,
  secureTextEntry,
  img,
  boxstyle,
  placeholderstyle,
  mainBox
}) => {
  const [visible, setVisible] = useState(true);
  const [show, setshow] = useState(false);

  return (
    <View style={mainBox}>
      <View style={[styles.box, boxstyle]}>
        <TextInput
          mode="flat"
          label={label}
          placeholder={placeholder}
          contentStyle={styles.placeholdera}
          underlineColor={COLORS.gray20}
          activeUnderlineColor={COLORS.black}
          activeOutlineColor={COLORS.black}
          textColor={COLORS.black}
          underlineStyle={COLORS.brown}
          maxLength={maxLength}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={COLORS.gray20}
          onChangeText={onChangeText}
          value={value}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
          numberOfLines={numberOfLines}
          secureTextEntry={secureTextEntry && visible}
        />
      </View>
      {errors ? <Text style={[styles.error, errorstyle]}>{errors}</Text> : null}
    </View>
  );
};
export default InputBox;

const styles = StyleSheet.create({
  box: {
    width: width * 0.93,
    alignSelf: 'center',
  },
  placeholdera: {
    ...FONTS.fourHundred,
    fontSize: width * 0.034,
    color: COLORS.black,
    marginBottom: -3,
    width: width * 0.93,
    backgroundColor: COLORS.white,
    paddingLeft: -10,
  },

  error: {
    color: 'red',
    fontSize: 12,
    ...FONTS.fourHundred,
    marginBottom: height * 0.01,
  },
});
