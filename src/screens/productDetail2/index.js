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
import {COLORS, FONTS, images, icons, data, CURRENCY} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import CategoryList from './../../component/carts/categoryList';
import Collapsible from 'react-native-collapsible';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BorderHeading from './../../component/carts/borderHeading';
import NewArrivalCart from './../../component/carts/newarriveCart';
import ContactUs from './../../component/carts/contactus';

const {height, width} = Dimensions.get('window');

const CareCollapse = ({icon, title, subtitle}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <>
      <TouchableOpacity
        onPress={() => setCollapsed(!isCollapsed)}
        style={styles.collapsbox}>
        <Image source={icon} style={styles.collapseicon} />
        <Text style={styles.collapstitle}>{title}</Text>
        <SimpleLineIcons
          name={!isCollapsed == true ? 'arrow-up' : 'arrow-down'}
          size={13}
          color={COLORS.black}
        />
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <View style={styles.subtitlebox}>
          <Text style={styles.collapsubtitle}>{subtitle}</Text>
        </View>
      </Collapsible>
      <View style={styles.collapseborder}></View>
    </>
  );
};

const ProductDetail2 = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [activeimg, setactiveimg] = useState(0);
  const [sizeActive, setsizeActive] = useState(0);
  const [changeimg, setchangeimg] = useState();

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            source={activeimg ? changeimg : images.ring1}
            style={styles.mainImg}>
            <TouchableOpacity
              style={styles.bgzoomiconbox}
              onPress={() => navigation.navigate('FullImage')}>
              <Image source={icons.zoom} style={styles.bgzoomicon} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <FlatList
          data={data.productlist2}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setactiveimg(index), setchangeimg(item?.img);
              }}
              style={{
                marginLeft: index == 0 ? width * 0.04 : width * 0,
                marginRight:
                  data.productlist2?.length - 1 ? width * 0.04 : width * 0,
              }}>
              <Image source={item?.img} style={styles.mainsmallImg} />
              {activeimg == index && (
                <Image source={icons.border2} style={styles.border} />
              )}
            </TouchableOpacity>
          )}
        />

        <View style={styles.innercontain}>
          <View style={styles.row}>
            <Text style={styles.title}>MOHAn</Text>
            <TouchableOpacity>
              <Image
                source={icons.download}
                style={[styles.download, {tintColor: COLORS.black}]}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={styles.price}>{CURRENCY.dollar} 120</Text>

          <View style={styles.row}>
            <Text style={styles.subtitle}>Ring Size </Text>
            <View style={styles.sizeWrap}>
              {data.ringsize?.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setsizeActive(index)}
                  style={[
                    styles.sizenumbox,
                    sizeActive == index && {
                      backgroundColor: COLORS.black,
                      borderWidth: 0,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.sizenum,
                      sizeActive == index && {color: COLORS.white},
                    ]}>
                    {item?.num}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          activeOpacity={0.6}
          style={styles.blackbtn}>
          <Image source={icons.Plus} style={styles.download} />
          <Text style={styles.blackbtntext}>ADD TO BASKET</Text>
          <Image source={icons.Heart} style={styles.download} />
        </TouchableOpacity>

        <View style={[styles.innercontain, {marginTop: 0}]}>
          <Text style={styles.title}>GALLERY</Text>
          <Image source={images.skin1} style={styles.galleryimg} />
          <Image
            source={images.skin2}
            style={[styles.galleryimg, {height: height * 0.46}]}
          />
          <Image
            source={images.ring5}
            style={[styles.galleryimg, {height: height * 0.3}]}
          />
        </View>

        <View style={[styles.innercontain, {marginTop: height * 0.02}]}>
          <Text style={styles.title}>CARE</Text>
          <CareCollapse
            icon={icons.car}
            title="Free Flat Rate Shipping"
            subtitle="Estimated to be delivered on  09/11/2021 - 12/11/2021."
          />

          <CareCollapse
            icon={icons.Tag}
            title="COD Policy"
            subtitle="Estimated to be delivered on  09/11/2021 - 12/11/2021."
          />
          <CareCollapse
            icon={icons.Refresh}
            title="Return Policy"
            subtitle="Estimated to be delivered on  09/11/2021 - 12/11/2021."
          />
        </View>

        <View style={styles.innercontain}>
          <BorderHeading
            heading="You may also like"
            border
            boxstyle={{marginBottom: height * 0.02}}
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
              />
            )}
          />
        </View>
        <ContactUs navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail2);
