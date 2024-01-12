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
import CategoryList from './../../component/carts/categoryList';
import ContactUs from './../../component/carts/contactus';
import HomeSlider from './../../component/slider/homeAutoscrollslider';

const {height, width} = Dimensions.get('window');

const BlogPost = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={images.cloth6} style={styles.oneimg} />

        <Text style={styles.title}>
          2021 Style Guide: The Biggest Fall Trends
        </Text>
        <Text style={styles.subtitle}>
          You guys know how much I love mixing high and low-end – it’s the best
          way to get the most bang for your buck while still elevating your
          wardrobe. The same goes for handbags! And honestly they are probably
          the best pieces to mix and match. I truly think the key to completing
          a look is with a great bag and I found so many this year that I wanted
          to share a round-up of my most worn handbags.
        </Text>

        <HomeSlider
          datalist={data.homesliderlist}
          scrollimgstyle={{
            height: height * 0.6,
            width: width * 0.94,
          }}
          blogpost
        />
        <Text style={styles.subtitle}>
          I found this Saint Laurent canvas handbag this summer and immediately
          fell in love. The neutral fabrics are so beautiful and I like how this
          handbag can also carry into fall. The mini Fendi bucket bag with the
          sheer fabric is so fun and such a statement bag. Also this DeMellier
          off white bag is so cute to carry to a dinner with you or going out,
          it’s small but not too small to fit your phone and keys still.
        </Text>
        <Text style={styles.daytext}>Posted by OpenFashion | 3 Days ago</Text>

        <View style={styles.rowwrap}>
          {data.hashlist.map((items, index) => (
            <CategoryList
              key={index}
              text={items?.text}
              listStylebox={{
                marginLeft: index == 0 ? width * 0.03 : width * 0,
                marginRight:
                  data.hashlist?.length - 1 ? width * 0.03 : width * 0.01,
              }}
              elevationbtn
            />
          ))}
        </View>

        <ContactUs navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
