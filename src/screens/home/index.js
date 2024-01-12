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
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import ButtonCustom from './../../component/Button/index';
import CategoryList from './../../component/carts/categoryList';
import InputBox from './../../component/InputText/index';
import HomeSlider from './../../component/slider/homeAutoscrollslider';
import BorderHeading from './../../component/carts/borderHeading';
import NewArrivalCart from './../../component/carts/newarriveCart';
import VideoCart from './../../component/video/videos';
import ContactUs from './../../component/carts/contactus';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(1);

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeSlider datalist={data.homesliderlist} />
        <BorderHeading heading="new arrival" border />
        <View style={styles.listbox}>
          <FlatList
            data={data.newarrival}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setActive(item?.id);
                }}>
                <Text
                  style={[
                    styles.listtext,
                    active == item?.id && {color: COLORS.black},
                  ]}>
                  {item?.text}
                </Text>
                <Image
                  source={active == item?.id && icons.sqrfill}
                  style={styles.sqticon}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <FlatList
          data={data.NewArrivallist}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({item, index}) => (
            <NewArrivalCart
              title={item.title}
              price={item.price}
              img={item.img}
              onPress={() => navigation.navigate('ProductDetail2')}
            />
          )}
        />
        <ButtonCustom
          children="Explore More"
          mdmbtn
          borderbtn
          whiterighticon={icons.rarrow}
          btnStyle={{borderWidth: 0, alignSelf: 'center'}}
          btntextStyle={{textTransform: 'capitalize'}}
          onPress={() => navigation.navigate('CategoryGridView')}
        />

        <BorderHeading border />
        <View style={styles.brandrow}>
          {data.brand.map((item, index) => (
            <Image source={item?.image} style={styles.brand} />
          ))}
        </View>
        <BorderHeading border />

        <BorderHeading heading="Collections" />

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Collection')}>
          <Image source={images.home6} style={styles.oneImg} />
        </TouchableOpacity>
        <Image
          source={images.home7}
          style={[styles.oneImg, {width: width * 0.73, height: height * 0.34}]}
        />

        <View style={styles.videocustomstyle}>
          <VideoCart
            thumbnail={images.video}
            uri="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </View>

        <BorderHeading heading="Just for You" border />

        <View style={styles.brandrow}>
          {data.tranding.map((item, index) => (
            <CategoryList text={item?.text} />
          ))}
        </View>

        <View style={styles.primaryBox}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.title}>
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive.
          </Text>
          <BorderHeading border />
          <View style={styles.fourimgboxrow}>
            <View>
              <Image source={images.fourimg1} style={styles.fourimg} />
              <Text style={styles.subtitle}>
                Fast shipping. Free on orders over $25.
              </Text>
            </View>
            <View>
              <Image source={images.fourimg2} style={styles.fourimg} />
              <Text style={styles.subtitle}>
                Fast shipping. Free on orders over $25.
              </Text>
            </View>
          </View>

          <View style={styles.fourimgboxrow}>
            <View>
              <Image source={images.fourimg3} style={styles.fourimg} />
              <Text style={styles.subtitle}>
                Fast shipping. Free on orders over $25.
              </Text>
            </View>
            <View>
              <Image source={images.fourimg4} style={styles.fourimg} />
              <Text style={styles.subtitle}>
                Fast shipping. Free on orders over $25.
              </Text>
            </View>
          </View>
          <Image
            source={images.fourimg5}
            style={[styles.logo, {marginTop: height * 0.024}]}
          />
        </View>
        <View>
          <BorderHeading heading="Follow Us" />
          <TouchableOpacity>
            <Image source={icons.insta1} style={styles.appicon} />
          </TouchableOpacity>
          <View style={styles.brandrow}>
            {data.followus.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={{marginTop: height * 0.02}}>
                <ImageBackground
                  resizeMode="stretch"
                  source={item?.img}
                  style={styles.bgImage}>
                  <Text style={styles.bgImageText}>{item?.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <ContactUs navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
