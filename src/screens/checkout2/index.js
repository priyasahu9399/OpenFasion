import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data, CURRENCY} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import CartComponent from './../../component/carts/Cartpage';
import ButtonCustom from './../../component/Button/index';
import BorderHeading from './../../component/carts/borderHeading';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');

const CheckOut2 = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <BorderHeading
          heading="Checkout"
          border
          boxstyle={{marginVertical: height * 0.01}}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('AddAddress')}
          style={styles.rowjustify}>
          <View>
            <Text style={styles.mainaddress}>lris Watson</Text>
            <Text style={styles.subaddress}>
              606-3727 Ullamcorper. Street Roseville NH 11523
            </Text>
            <Text style={styles.subaddress}>(786) 713-8616</Text>
          </View>
          <Image source={icons.rarrow2} style={styles.twoIcon} />
        </TouchableOpacity>

        <View style={styles.border}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewCart')}
          style={styles.rowjustify}>
          <View style={styles.imgrow}>
            <Image source={icons.MasterCard} style={styles.pymticon} />
            <Text style={styles.pymticontext}>Master Card ending ••••89</Text>
          </View>
          <Image source={icons.rarrow2} style={styles.twoIcon} />
        </TouchableOpacity>
        <View style={styles.border}></View>

        {data.categorylistview.map((item, index) => (
          <CartComponent
            title={item?.title}
            subtitle={item?.subtitle}
            price={item?.price}
            img={item?.bigimg}
          />
        ))}

        <View>
          <Modal isVisible={isModalVisible}>
            <View style={styles.modalBox}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Image source={icons.Close} style={styles.modalcross} />
              </TouchableOpacity>
              <Text style={styles.modaltitle}>PAYMENT SUCCESS</Text>
              <Image source={icons.success} style={styles.success} />
              <Text style={styles.modaltext}>Your payment was success</Text>
              <Text style={styles.modaltext}>Payment ID 15263541</Text>
              <BorderHeading
                border
                boxstyle={{marginVertical: height * 0.02}}
              />
              <Text style={styles.modaltext}>Rate your purchase</Text>
              <View style={styles.modalrow}>
                <Image source={icons.sad} style={styles.modalthreeicon} />
                <Image source={icons.Happy} style={styles.modalthreeicon} />
                <Image source={icons.love} style={styles.modalthreeicon} />
              </View>
              <View style={styles.row}>
                <ButtonCustom
                  children="SUBMIT"
                  mdmbtn
                  onPress={() => {
                    setModalVisible(false), navigation.navigate('PlaceOrder');
                  }}
                />
                <ButtonCustom
                  children="BACK TO HOME"
                  mdmbtn
                  borderbtn
                  onPress={() => {
                    setModalVisible(false), navigation.navigate('Home');
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>

      <View style={styles.rowjustify}>
        <Text style={styles.subtotal}>TOTAL</Text>
        <Text style={[styles.subtotal, {color: COLORS.brown}]}>
          {CURRENCY?.dollar} 240
        </Text>
      </View>
      <ButtonCustom
        children={'Checkout'}
        lefticon={icons.bag}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut2);
