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
import BorderHeading from './../../component/carts/borderHeading';
import CategoryList from './../../component/carts/categoryList';
import ButtonCustom from './../../component/Button/index';
import ContactUs from './../../component/carts/contactus';

const {height, width} = Dimensions.get('window');

const Blog = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState();

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BorderHeading
          heading="Blog"
          border
          boxstyle={{marginVertical: height * 0.014}}
        />
        <FlatList
          data={data.categorylist}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <CategoryList
              key={item?.id}
              text={item?.text}
              listStylebox={{
                marginLeft: index == 0 ? width * 0.03 : width * 0,
                marginRight:
                  data.categorylist?.length - 1 ? width * 0.03 : width * 0.01,
                backgroundColor:
                  active == index ? COLORS.black : COLORS.primary,
              }}
              listtextStyle={active == index && {color: COLORS.white}}
              onPress={() => {
                setActive(index), navigation.navigate('BlogListView');
              }}
            />
          )}
        />
        <FlatList
          data={data.bloglist}
          renderItem={({item, index}) => (
            <View style={{marginBottom: height * 0.02}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BlogPost')}
                activeOpacity={0.6}
                style={{marginTop: height * 0.02}}>
                <ImageBackground
                  resizeMode="stretch"
                  source={item?.img}
                  style={styles.bgImage}>
                  <TouchableOpacity
                    style={styles.bookmarkbox}
                    activeOpacity={0.6}>
                    <Image source={icons.bookmark} style={styles.bookmark} />
                  </TouchableOpacity>
                  <Text numberOfLines={2} style={styles.bgImageText}>
                    {item?.title}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              <View style={styles.row}>
                <View style={styles.rowwrap}>
                  {item?.list.map((items, index) => (
                    <CategoryList
                      key={index}
                      text={items?.text}
                      listStylebox={{
                        marginLeft: index == 0 ? width * 0.03 : width * 0,
                        marginRight:
                          item?.list?.length - 1 ? width * 0.03 : width * 0.01,
                      }}
                      elevationbtn
                    />
                  ))}
                </View>
                <Text style={styles.daytext}>{item?.day}</Text>
              </View>
            </View>
          )}
        />
        <ButtonCustom
          children="Load more"
          borderbtn
          whiterighticon={icons.Plus}
          btnStyle={{alignSelf: 'center', marginVertical: height * 0.02}}
        />

        <ContactUs navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
