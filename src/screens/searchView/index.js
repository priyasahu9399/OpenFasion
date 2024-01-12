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

const {height, width} = Dimensions.get('window');

const SearchView = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(2);
  const [value, setValue] = useState(null);
  const [numActive, setnumActive] = useState(0);
  const [postData, setPostData] = useState('');

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Dress"
            placeholderTextColor={COLORS.black}
            style={styles.input}
            onChange={text => setPostData(text)}
            value={postData}
          />

          {postData && (
            <TouchableOpacity
              onPress={() => setPostData('')}
              style={styles.listIconBox}>
              <Image source={icons.Close} style={styles.listIcon} />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Image source={icons.search} style={styles.listIcon} />
          </TouchableOpacity>
        </View>

        <CategoryDropAllList
          title="8 result of dress"
          icon1={icons.Listview}
          icon2={icons.Filter}
          data={data.categorygridlist1}
          placeholder="New"
          onChange={item => setValue(item.value)}
          onPressgrid={() => setActive(1)}
          onPresslist={() => setActive(2)}
          listIcongridstyle={active == 1 && {tintColor: COLORS.brown}}
          listIconstyle={active == 2 && {tintColor: COLORS.brown}}
        />
        <FlatList
          data={data.categorygridlist}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({item, index}) => (
            <NewArrivalCart
              title={item.title}
              subtitle={item?.subtitle}
              price={item.price}
              img={item.img}
              wishlistcategorycart
              onPress={() => navigation.navigate('ProductDetail2')}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
