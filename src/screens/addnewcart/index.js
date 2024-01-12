import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import BorderHeading from './../../component/carts/borderHeading';
import ButtonCustom from './../../component/Button/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputBox from './../../component/InputText/index';
import PaymentSlider from './../../component/slider/PaymentSlider';

const {height, width} = Dimensions.get('window');

const AddNewCart = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const AddressValidationSchema = yup.object().shape({
    Nameoncard: yup
      .string()
      .required('*Please enter your exactly as it appears on your card'),
    cartnumber: yup.string().length(16).required('please enter cart number'),
    expmonth: yup.string().required('exp month is Required'),
    expdate: yup.string().required('please enter exp date'),
    cvv: yup.string().length(3).required('please enter cvv'),
  });

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />

      <Formik
        validationSchema={AddressValidationSchema}
        initialValues={{
          Nameoncard: '',
          cartnumber: '',
          expmonth: '',
          expdate: '',
          cvv: '',
        }}
        onSubmit={values => {
          console.log(values), navigation.goBack();
        }}>
        {({
          setFieldValue,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          values,
          errors,
          isValid,
        }) => {
          return (
            <>
              <ScrollView
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}>
                <BorderHeading
                  heading="Payment method"
                  border
                  boxstyle={{marginVertical: height * 0.014}}
                />
                <PaymentSlider datalist={data.paymentimg} />
                <View style={styles.innercontainer}>
                  <InputBox
                    placeholder="Name On Card"
                    onChangeText={handleChange('Nameoncard')}
                    value={values?.Nameoncard}
                    errors={touched?.Nameoncard && errors?.Nameoncard}
                    mainBox={{marginBottom: height * 0.01}}
                  />
                  <InputBox
                    placeholder="Cart Number"
                    onChangeText={handleChange('cartnumber')}
                    value={values?.cartnumber}
                    keyboardType="numeric"
                    maxLength={16}
                    errors={touched?.cartnumber && errors?.cartnumber}
                    mainBox={{marginBottom: height * 0.01}}
                  />
                  <View style={styles.row}>
                    <InputBox
                      placeholder="Exp Month"
                      onChangeText={handleChange('expmonth')}
                      value={values?.expmonth}
                      keyboardType="numeric"
                      errors={touched?.expmonth && errors?.expmonth}
                      placeholderstyle={{width: width * 0.45}}
                      boxstyle={{width: width * 0.45}}
                      mainBox={{width: width * 0.45}}
                    />
                    <InputBox
                      placeholder="Exp Date"
                      onChangeText={handleChange('expdate')}
                      value={values?.expdate}
                      keyboardType="numeric"
                      errors={touched?.expdate && errors?.expdate}
                      placeholderstyle={{width: width * 0.45}}
                      boxstyle={{width: width * 0.45}}
                      mainBox={{width: width * 0.45}}
                    />
                  </View>
                  <InputBox
                    placeholder="CVV"
                    keyboardType="numeric"
                    maxLength={3}
                    value={values?.cvv}
                    errors={touched?.cvv && errors?.cvv}
                    onChangeText={handleChange('cvv')}
                  />
                </View>
              </ScrollView>
              <ButtonCustom
                children="Add CARD"
                onPress={handleSubmit}
                btnStyle={{
                  marginTop: height * 0.02,
                }}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCart);
