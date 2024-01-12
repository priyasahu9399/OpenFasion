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
import ProductSlider from './../../component/slider/productDetailSlider';

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

const ProductDetail1 = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [activeColor, setactiveColor] = useState(0);
  const [sizeActive, setsizeActive] = useState(0);

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
        <ProductSlider
          onPresszoom={() => navigation.navigate('CategoryGridFullView')}
          datalist={data.homesliderlist}
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
            <View style={styles.row}>
              <Text style={styles.subtitle}>Color </Text>
              <View style={styles.sizeWrap}>
                {data.colors?.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => setactiveColor(index)}
                    style={[
                      styles.sizenumbox,
                      {
                        borderColor:
                          activeColor == index ? COLORS.gray : COLORS.white,
                      },
                    ]}>
                    <View
                      style={[
                        styles.color,
                        {backgroundColor: item?.color},
                      ]}></View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.subtitle}>Size </Text>
              <View style={styles.sizeWrap}>
                {data.sizes?.map((item, index) => (
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
                      {item?.size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
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
          <Text style={styles.title}>MATERIALS</Text>
          <Text style={styles.subtitle}>
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.{' '}
          </Text>
        </View>

        <View style={styles.innercontain}>
          <Text style={styles.title}>CARE</Text>
          <Text style={styles.subtitle}>
            To keep your jackets and coats clean, you only need to freshen them
            up and go over them with a cloth or a clothes brush. If you need to
            dry clean a garment, look for a dry cleaner that uses technologies
            that are respectful of the environment.
          </Text>

          <View style={{marginVertical: height * 0.02}}>
            <View style={styles.rowIcons}>
              <Image source={icons.pd1} style={styles.pdIcon} />
              <Text style={styles.subtitle}>Do not use bleach</Text>
            </View>
            <View style={styles.rowIcons}>
              <Image source={icons.pd2} style={styles.pdIcon} />
              <Text style={styles.subtitle}>Do not tumble dry</Text>
            </View>
            <View style={styles.rowIcons}>
              <Image source={icons.pd3} style={styles.pdIcon} />
              <Text style={styles.subtitle}>
                Dry clean with tetrachloroethylene
              </Text>
            </View>
            <View style={styles.rowIcons}>
              <Image source={icons.pd4} style={styles.pdIcon} />
              <Text style={styles.subtitle}>
                Iron at a maximum of 110ºC/230ºF
              </Text>
            </View>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail1);
