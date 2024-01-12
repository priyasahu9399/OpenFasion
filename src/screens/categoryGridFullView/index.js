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
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import ContactUs from './../../component/carts/contactus';
import NewArrivalCart from './../../component/carts/newarriveCart';
import CategoryDropAllList from './../../component/carts/categorydropdownalltoplist';
import CategoryList from './../../component/carts/categoryList';

const {height, width} = Dimensions.get('window');

const CategoryGridFullView = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(2);
  const [value, setValue] = useState(null);
  const [numActive, setnumActive] = useState(0);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryDropAllList
          icon1={icons.Listview}
          icon2={icons.Filter}
          title="4500 Apparel"
          data={data.categorygridlist1}
          placeholder="New"
          onChange={item => setValue(item.value)}
          onPressgrid={() => setActive(1)}
          onPresslist={() => setActive(2)}
          listIcongridstyle={active == 1 && {tintColor: COLORS.brown}}
          listIconstyle={active == 2 && {tintColor: COLORS.brown}}
        />

        <View style={styles.brandrow}>
          {data.searchlist.map((item, index) => (
            <CategoryList
              text={item?.text}
              cross
              elevationbtn
              listtextStyle={{color: COLORS.black}}
              listStylebox={{marginRight: width * 0.02}}
            />
          ))}
        </View>

        <FlatList
          data={data.categorygridlist}
          renderItem={({item, index}) => (
            <NewArrivalCart
              title={item.title}
              subtitle={item?.subtitle}
              price={item.price}
              img={item.img}
              wishlistcategorycart
              categoryfullimg
            />
          )}
        />

        <View style={styles.mainbox}>
          <FlatList
            data={data.number}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => setnumActive(index)}
                style={[
                  styles.numIconBox,
                  numActive == index && {backgroundColor: COLORS.black},
                ]}>
                <Text
                  style={[
                    styles.numIcontext,
                    numActive == index && {color: COLORS.white},
                  ]}>
                  {item?.num}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity>
            <Image source={icons.rarrow2} style={styles.rarrow} />
          </TouchableOpacity>
        </View>

        <ContactUs navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryGridFullView);
