import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
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

const {height, width} = Dimensions.get('window');

const AddAddress = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const AddressValidationSchema = yup.object().shape({
    firstname: yup.string().required('Please Enter First Name'),
    lastname: yup.string().required('Please Enter Last Name'),
    address: yup.string().required('Address Is Required'),
    city: yup.string().required('Please Enter City'),
    state: yup.string().required('Please Enter State'),
    zipcode: yup.string().required('Please Enter Zipcode'),
    mobile: yup
      .string()
      .min(10, ({min}) => `Mobile Number Must Be ${min} Digit`)
      .required('Mobile Number Is Required'),
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
          firstname: '',
          lastname: '',
          address: '',
          city: '',
          state: '',
          zipcode: '',
          mobile: '',
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
                style={styles.innercontainer}
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}>
                <BorderHeading
                  heading="Add shipping adress"
                  border
                  boxstyle={{marginVertical: height * 0.014}}
                />
                <View style={styles.row}>
                  <InputBox
                    placeholder="First name"
                    onChangeText={handleChange('firstname')}
                    value={values?.firstname}
                    errors={touched?.firstname && errors?.firstname}
                    placeholderstyle={{width: width * 0.45}}
                    boxstyle={{width: width * 0.45}}
                    mainBox={{width: width * 0.45}}
                  />

                  <InputBox
                    placeholder="Last name"
                    onChangeText={handleChange('lastname')}
                    value={values?.lastname}
                    errors={touched?.lastname && errors?.lastname}
                    placeholderstyle={{width: width * 0.45}}
                    boxstyle={{width: width * 0.45}}
                    mainBox={{width: width * 0.45}}
                  />
                </View>
                <InputBox
                  placeholder="Address"
                  onChangeText={handleChange('address')}
                  value={values?.address}
                  errors={touched?.address && errors?.address}
                />
                <InputBox
                  value={values?.city}
                  placeholder="City"
                  onChangeText={handleChange('city')}
                  errors={touched?.city && errors?.city}
                />
                <View style={styles.row}>
                  <InputBox
                    value={values?.state}
                    placeholder="State"
                    onChangeText={handleChange('state')}
                    errors={touched?.state && errors?.state}
                    placeholderstyle={{width: width * 0.45}}
                    boxstyle={{width: width * 0.45}}
                    mainBox={{width: width * 0.45}}
                  />

                  <InputBox
                    value={values?.zipcode}
                    placeholder="ZIP code"
                    keyboardType="numeric"
                    onChangeText={handleChange('zipcode')}
                    errors={touched?.zipcode && errors?.zipcode}
                    placeholderstyle={{width: width * 0.45}}
                    boxstyle={{width: width * 0.45}}
                    mainBox={{width: width * 0.45}}
                  />
                </View>
                <InputBox
                  placeholder="Phone number"
                  keyboardType="numeric"
                  maxLength={10}
                  value={values?.mobile}
                  errors={touched?.mobile && errors?.mobile}
                  onChangeText={handleChange('mobile')}
                />
              </ScrollView>
              <ButtonCustom
                children="Add now"
                onPress={handleSubmit}
                btnStyle={{
                  marginTop: height * 0.01,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
